import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Food from '../models/foodModel.js';
import Offer from '../models/Offer.js';
import OfferCategory from '../models/OfferCategory.js';

dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)) });
const expiry = new Date('2026-11-08T23:59:59+05:00');
const definitions = [
  { type: 'Category Deals', title: 'A fresh start', description: 'Enjoy 15% off every salad. A little lighter, a little greener, and full of flavor.', discount: 15, targetCategory: 'Salad' },
  { type: 'Category Deals', title: 'Pasta night, sorted', description: 'Save 20% on our pasta collection, from creamy favorites to comforting tomato classics.', discount: 20, targetCategory: 'Pasta' },
  { type: 'Category Deals', title: 'Something sweet', description: 'Treat yourself to 15% off every ice cream in our dessert collection.', discount: 15, targetCategory: 'Desserts' },
  { type: 'Category Deals', title: 'Noodles worth a twirl', description: 'Take 15% off our noodle dishes and find your next comforting favorite.', discount: 15, targetCategory: 'Noodles' },
  { type: 'Chef Picks', title: 'Roll into a good meal', description: 'Enjoy our Chicken Rolls with 20% off. A satisfying bite at a sweeter price.', discount: 20, productName: 'Chicken Rolls' },
  { type: 'Chef Picks', title: 'Your grilled favorite', description: 'Enjoy 15% off the Grilled Sandwich for a warm and satisfying meal.', discount: 15, productName: 'Grilled Sandwich' },
  { type: 'Chef Picks', title: 'A slice of happiness', description: 'Make room for Butterscotch Cake with 20% off this sweet favorite.', discount: 20, productName: 'Butterscotch Cake' },
  { type: 'Chef Picks', title: 'A little garlic goodness', description: 'Discover the savory flavors of Garlic Mushroom with 15% off.', discount: 15, productName: 'Garlic Mushroom' },
];

try {
  await mongoose.connect(process.env.MONGO_URL, { serverSelectionTimeoutMS: 15000 });
  const offers = [];
  for (const { productName, ...definition } of definitions) {
    const product = await Food.findOne(productName ? { name: productName } : { category: definition.targetCategory }).lean();
    if (!product) throw new Error('Eligible product missing');
    fs.accessSync(new URL('../uploads/' + product.image, import.meta.url));
    const offer = { ...definition, expiry, image: product.image, ...(productName ? { targetProduct: String(product._id) } : {}) };
    await new Offer(offer).validate();
    offers.push(offer);
  }
  await OfferCategory.bulkWrite([...new Set(offers.map(offer => offer.type))].map(name => ({ updateOne: { filter: { name }, update: { $setOnInsert: { name } }, upsert: true } })));
  const result = await Offer.bulkWrite(offers.map(offer => ({ updateOne: { filter: { title: offer.title, type: offer.type }, update: { $setOnInsert: offer }, upsert: true } })));
  const saved = await Offer.find({ title: { $in: offers.map(offer => offer.title) } }).lean();
  if (saved.length !== offers.length) throw new Error('Offer count verification failed');
  console.log(JSON.stringify({ offersAdded: result.upsertedCount, offersVerified: saved.length, discountRange: '15-20%', expiry: '8 November 2026' }, null, 2));
} catch (error) {
  console.error('Offer import failed (' + error.name + '). Check database connectivity and eligible products.');
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
