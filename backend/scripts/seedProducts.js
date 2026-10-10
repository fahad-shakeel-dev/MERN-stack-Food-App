import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Food from '../models/foodModel.js';
import Category from '../models/categoryMetadataModel.js';

dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)) });
const products = JSON.parse(fs.readFileSync(new URL('./sampleProducts.json', import.meta.url), 'utf8'));
const categories = [...new Set(products.map(product => product.category))];
const popularCategories = new Set(categories);
const uploadDirectory = new URL('../uploads/', import.meta.url);

try {
  if (!process.env.MONGO_URL) throw new Error('MONGO_URL must be set in backend/.env.');
  // Validate every record and source image before modifying the database.
  for (const { sourceImage, ...product } of products) {
    await new Food(product).validate();
    fs.accessSync(new URL('../../frontend/src/assets/frontend_assets/' + sourceImage, import.meta.url));
  }
  for (const category of categories) {
    await new Category({ category, isPopular: popularCategories.has(category) }).validate();
  }
  await mongoose.connect(process.env.MONGO_URL, { serverSelectionTimeoutMS: 15000 });
  fs.mkdirSync(uploadDirectory, { recursive: true });
  for (const product of products) {
    const target = new URL(product.image, uploadDirectory);
    try {
      fs.copyFileSync(new URL('../../frontend/src/assets/frontend_assets/' + product.sourceImage, import.meta.url), target, fs.constants.COPYFILE_EXCL);
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
    }
  }
  const categoryResult = await Category.bulkWrite(categories.map(category => ({
    updateOne: {
      filter: { category },
      update: { $setOnInsert: { category, isPopular: popularCategories.has(category) } },
      upsert: true,
    },
  })));
  const productResult = await Food.bulkWrite(products.map(({ sourceImage, ...product }) => ({
    updateOne: {
      filter: { name: product.name, category: product.category },
      update: { $setOnInsert: product },
      upsert: true,
    },
  })));
  const saved = await Food.find({ $or: products.map(product => ({ name: product.name, category: product.category })) }).lean();
  if (saved.length !== products.length) throw new Error('Catalog verification failed: unexpected product count.');
  for (const product of saved) {
    fs.accessSync(new URL(product.image, uploadDirectory));
  }
  console.log(JSON.stringify({
    productsAdded: productResult.upsertedCount,
    categoriesAdded: categoryResult.upsertedCount,
    catalogProducts: saved.length,
    catalogCategories: categories.length,
    featuredProducts: saved.filter(product => product.isFeatured).length,
    popularProducts: saved.filter(product => product.isPopular).length,
    popularCategories: await Category.countDocuments({ category: { $in: categories }, isPopular: true }),
    imagesVerified: saved.length,
  }, null, 2));
} catch (error) {
  // Connection errors can contain credentials, so report only their type.
  console.error('Sample catalog import failed (' + error.name + '). Check the database connection, source images, and model validation.');
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
