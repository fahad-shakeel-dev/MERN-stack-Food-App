

import mongoose from 'mongoose';

const claimSchema = new mongoose.Schema({
  offerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Offer' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  claimedAt: Date
});

const Claim = mongoose.model('Claim', claimSchema);
export default Offer;