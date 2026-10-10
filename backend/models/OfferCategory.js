// import mongoose from 'mongoose';

// const offerCategorySchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   createdBy: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// const OfferCategory = mongoose.model('OfferCategory', offerCategorySchema);
// export default OfferCategory;

import mongoose from 'mongoose';

const offerCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const OfferCategory = mongoose.model('OfferCategory', offerCategorySchema);
export default OfferCategory;