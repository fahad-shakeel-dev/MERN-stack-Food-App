import mongoose from "mongoose";

const categoryMetadataSchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
  isPopular: { type: Boolean, default: false },
});

const categoryMetadataModel = mongoose.models.categoryMetadata || mongoose.model("categoryMetadata", categoryMetadataSchema);

export default categoryMetadataModel;