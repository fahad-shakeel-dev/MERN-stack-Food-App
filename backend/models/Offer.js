// import mongoose from 'mongoose';

// const offerSchema = new mongoose.Schema({
//   type: { type: String, required: true },
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   expiry: { type: Date },
//   discount: { type: Number, min: 0, max: 100 },
//   target: { type: String }, // productId, category, or restaurant
//   createdAt: { type: Date, default: Date.now },
// });

// const Offer = mongoose.model('Offer', offerSchema);

// export default Offer;









// import mongoose from 'mongoose';

// const offerSchema = new mongoose.Schema({
//   type: { type: String, required: true },
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   expiry: { type: Date },
//   discount: { type: Number, min: 0, max: 100 },
//   targetCategory: { type: String },
//   targetProduct: { type: String },
//   createdBy: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedBy: { type: String },
//   updatedAt: { type: Date },
// });

// const Offer = mongoose.model('Offer', offerSchema);
// export default Offer;







// import mongoose from 'mongoose';

// const offerSchema = new mongoose.Schema({
//   type: { type: String, required: true },
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   expiry: { type: Date },
//   discount: { type: Number, min: 0, max: 100 },
//   targetCategory: { type: String },
//   targetProduct: { type: String },
//   createdBy: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedBy: { type: String },
//   updatedAt: { type: Date },
// });

// const Offer = mongoose.model('Offer', offerSchema);
// export default Offer;







import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  expiry: { type: Date },
  discount: { type: Number, min: 0, max: 100 },
  targetCategory: { type: String },
  targetProduct: { type: String },
  image: { type: String },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
  updatedAt: { type: Date },
});

const Offer = mongoose.model('Offer', offerSchema);
export default Offer;