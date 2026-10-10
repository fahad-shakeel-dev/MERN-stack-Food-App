// import Offer from '../models/Offer.js';

// const getOffers = async (req, res) => {
//   try {
//     const offers = await Offer.find();
//     res.json(offers);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const addOffer = async (req, res) => {
//   const offer = new Offer(req.body);
//   try {
//     const savedOffer = await offer.save();
//     res.status(201).json(savedOffer);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// const deleteOffer = async (req, res) => {
//   try {
//     await Offer.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Offer deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export default {
//   getOffers,
//   addOffer,
//   deleteOffer
// };


// import Offer from '../models/Offer.js';

// const getOffers = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const offers = await Offer.find({}).lean();
//       console.log("Fetched offers:", offers);
//       res.json({ success: true, data: offers });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Get offers error:", error.message);
//     res.status(500).json({ success: false, message: "Error fetching offers" });
//   }
// };

// const addOffer = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const offer = new Offer({ ...req.body, createdBy: req.user.id });
//       console.log("Adding offer:", offer);
//       const savedOffer = await offer.save();
//       res.status(201).json({ success: true, data: savedOffer });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Add offer error:", error.message);
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// const updateOffer = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const offer = await Offer.findById(req.params.id);
//       if (!offer) {
//         return res.status(404).json({ success: false, message: "Offer not found" });
//       }
//       const updatedOffer = await Offer.findByIdAndUpdate(
//         req.params.id,
//         { ...req.body, updatedBy: req.user.id, updatedAt: new Date() },
//         { new: true }
//       );
//       console.log("Updated offer:", updatedOffer);
//       res.json({ success: true, data: updatedOffer });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Update offer error:", error.message);
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// const deleteOffer = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const offer = await Offer.findById(req.params.id);
//       if (!offer) {
//         return res.status(404).json({ success: false, message: "Offer not found" });
//       }
//       await Offer.findByIdAndDelete(req.params.id);
//       console.log("Deleted offer with ID:", req.params.id);
//       res.json({ success: true, message: "Offer deleted" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Delete offer error:", error.message);
//     res.status(500).json({ success: false, message: "Error deleting offer" });
//   }
// };

// export { getOffers, addOffer, updateOffer, deleteOffer };


// import Offer from '../models/Offer.js';
// import OfferCategory from '../models/OfferCategory.js';

// const getOffers = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const offers = await Offer.find({}).lean();
//       console.log("Fetched offers:", offers);
//       res.json({ success: true, data: offers });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Get offers error:", error.message);
//     res.status(500).json({ success: false, message: "Error fetching offers" });
//   }
// };

// const addOffer = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       console.log("Add offer payload:", req.body);
//       const offer = new Offer({ ...req.body, createdBy: req.user.id });
//       const savedOffer = await offer.save();
//       console.log("Saved offer:", savedOffer);
//       res.status(201).json({ success: true, data: savedOffer });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Add offer error:", error.message);
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// const updateOffer = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       console.log("Update offer payload:", req.body);
//       const offer = await Offer.findById(req.params.id);
//       if (!offer) {
//         return res.status(404).json({ success: false, message: "Offer not found" });
//       }
//       const updatedOffer = await Offer.findByIdAndUpdate(
//         req.params.id,
//         { ...req.body, updatedBy: req.user.id, updatedAt: new Date() },
//         { new: true }
//       );
//       console.log("Updated offer:", updatedOffer);
//       res.json({ success: true, data: updatedOffer });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Update offer error:", error.message);
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// const deleteOffer = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const offer = await Offer.findById(req.params.id);
//       if (!offer) {
//         return res.status(404).json({ success: false, message: "Offer not found" });
//       }
//       await Offer.findByIdAndDelete(req.params.id);
//       console.log("Deleted offer with ID:", req.params.id);
//       res.json({ success: true, message: "Offer deleted" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Delete offer error:", error.message);
//     res.status(500).json({ success: false, message: "Error deleting offer" });
//   }
// };

// const getOfferCategories = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const categories = await OfferCategory.find({}).lean();
//       console.log("Fetched offer categories:", categories);
//       res.json({ success: true, data: categories.map(cat => cat.name) });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Get offer categories error:", error.message);
//     res.status(500).json({ success: false, message: "Error fetching offer categories" });
//   }
// };

// const addOfferCategory = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const { name } = req.body;
//       console.log("Add offer category payload:", req.body);
//       if (!name || !/^[A-Za-z\s]+$/.test(name)) {
//         return res.status(400).json({ success: false, message: "Category name must contain only letters and spaces" });
//       }
//       const existingCategory = await OfferCategory.findOne({ name });
//       if (existingCategory) {
//         return res.status(400).json({ success: false, message: "Category already exists" });
//       }
//       const category = new OfferCategory({ name, createdBy: req.user.id });
//       const savedCategory = await category.save();
//       console.log("Saved offer category:", savedCategory);
//       res.status(201).json({ success: true, data: savedCategory });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Add offer category error:", error.message);
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// const deleteOfferCategory = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const { name } = req.params;
//       console.log("Deleting offer category:", name);
//       const category = await OfferCategory.findOne({ name });
//       if (!category) {
//         return res.status(404).json({ success: false, message: "Category not found" });
//       }
//       await OfferCategory.deleteOne({ name });
//       console.log("Deleted offer category:", name);
//       res.json({ success: true, message: "Category deleted" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Delete offer category error:", error.message);
//     res.status(500).json({ success: false, message: "Error deleting offer category" });
//   }
// };

// export { getOffers, addOffer, updateOffer, deleteOffer, getOfferCategories, addOfferCategory, deleteOfferCategory };






import Offer from '../models/Offer.js';
import OfferCategory from '../models/OfferCategory.js';

const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find({}).lean();
    console.log("Fetched offers:", offers);
    res.json({ success: true, data: offers });
  } catch (error) {
    console.error("Get offers error:", error.message);
    res.status(500).json({ success: false, message: "Error fetching offers" });
  }
};

const addOffer = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      console.log("Add offer failed: User not admin", req.user);
      return res.status(403).json({ success: false, message: "You are not admin" });
    }
    console.log("Add offer payload:", req.body);
    const offer = new Offer({ ...req.body, createdBy: req.user.id });
    const savedOffer = await offer.save();
    console.log("Saved offer:", savedOffer);
    res.status(201).json({ success: true, data: savedOffer });
  } catch (error) {
    console.error("Add offer error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateOffer = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      console.log("Update offer failed: User not admin", req.user);
      return res.status(403).json({ success: false, message: "You are not admin" });
    }
    console.log("Update offer payload:", req.body);
    console.log("Updating offer ID:", req.params.id);
    const offer = await Offer.findById(req.params.id);
    if (!offer) {
      console.log("Offer not found for ID:", req.params.id);
      return res.status(404).json({ success: false, message: "Offer not found" });
    }
    const updatedOffer = await Offer.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedBy: req.user.id, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    console.log("Updated offer:", updatedOffer);
    res.json({ success: true, data: updatedOffer });
  } catch (error) {
    console.error("Update offer error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteOffer = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      console.log("Delete offer failed: User not admin", req.user);
      return res.status(403).json({ success: false, message: "You are not admin" });
    }
    console.log("Deleting offer ID:", req.params.id);
    const offer = await Offer.findById(req.params.id);
    if (!offer) {
      console.log("Offer not found for ID:", req.params.id);
      return res.status(404).json({ success: false, message: "Offer not found" });
    }
    await Offer.findByIdAndDelete(req.params.id);
    console.log("Deleted offer with ID:", req.params.id);
    res.json({ success: true, message: "Offer deleted" });
  } catch (error) {
    console.error("Delete offer error:", error.message);
    res.status(500).json({ success: false, message: "Error deleting offer" });
  }
};

const getOfferCategories = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      console.log("Get offer categories failed: User not admin", req.user);
      return res.status(403).json({ success: false, message: "You are not admin" });
    }
    const categories = await OfferCategory.find({}).lean();
    console.log("Fetched offer categories:", categories);
    res.json({ success: true, data: categories.map(cat => cat.name) });
  } catch (error) {
    console.error("Get offer categories error:", error.message);
    res.status(500).json({ success: false, message: "Error fetching offer categories" });
  }
};

const addOfferCategory = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      console.log("Add offer category failed: User not admin", req.user);
      return res.status(403).json({ success: false, message: "You are not admin" });
    }
    const { name } = req.body;
    console.log("Add offer category payload:", req.body);
    if (!name || !/^[A-Za-z\s]+$/.test(name)) {
      return res.status(400).json({ success: false, message: "Category name must contain only letters and spaces" });
    }
    const existingCategory = await OfferCategory.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ success: false, message: "Category already exists" });
    }
    const category = new OfferCategory({ name, createdBy: req.user.id });
    const savedCategory = await category.save();
    console.log("Saved offer category:", savedCategory);
    res.status(201).json({ success: true, data: savedCategory });
  } catch (error) {
    console.error("Add offer category error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteOfferCategory = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      console.log("Delete offer category failed: User not admin", req.user);
      return res.status(403).json({ success: false, message: "You are not admin" });
    }
    const { name } = req.params;
    console.log("Deleting offer category:", name);
    const category = await OfferCategory.findOne({ name });
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    await OfferCategory.deleteOne({ name });
    console.log("Deleted offer category:", name);
    res.json({ success: true, message: "Category deleted" });
  } catch (error) {
    console.error("Delete offer category error:", error.message);
    res.status(500).json({ success: false, message: "Error deleting offer category" });
  }
};

export { getOffers, addOffer, updateOffer, deleteOffer, getOfferCategories, addOfferCategory, deleteOfferCategory };