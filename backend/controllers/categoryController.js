// import categoryMetadataModel from "../models/categoryMetadataModel.js";
// import foodModel from "../models/foodModel.js";

// const addCategoryMetadata = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const { category } = req.body;
//       if (!category) {
//         return res.status(400).json({ success: false, message: "Category name is required" });
//       }
//       const existingCategory = await categoryMetadataModel.findOne({ category });
//       if (existingCategory) {
//         return res.status(400).json({ success: false, message: "Category already exists" });
//       }
//       const newCategory = new categoryMetadataModel({ category, isPopular: false });
//       await newCategory.save();
//       console.log("Added category metadata:", newCategory); // Debug log
//       res.json({ success: true, message: "Category metadata added" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Add category metadata error:", error.message);
//     res.status(500).json({ success: false, message: "Error adding category metadata" });
//   }
// };

// const listCategoryMetadata = async (req, res) => {
//   try {
//     const categories = await categoryMetadataModel.find({}).lean();
//     console.log("Fetched category metadata:", categories); // Debug log
//     res.json({ success: true, data: categories });
//   } catch (error) {
//     console.error("List category metadata error:", error.message);
//     res.status(500).json({ success: false, message: "Error fetching category metadata" });
//   }
// };

// const togglePopularCategory = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const { category, isPopular } = req.body;
//       const categoryMetadata = await categoryMetadataModel.findOne({ category });
//       if (!categoryMetadata) {
//         return res.status(404).json({ success: false, message: "Category metadata not found" });
//       }
//       categoryMetadata.isPopular = isPopular !== undefined ? isPopular : !categoryMetadata.isPopular;
//       await categoryMetadata.save();
//       console.log("Updated category metadata:", categoryMetadata); // Debug log
//       res.json({ success: true, message: "Category updated", data: categoryMetadata });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Toggle popular category error:", error.message);
//     res.status(500).json({ success: false, message: "Error toggling popular category" });
//   }
// };

// export { addCategoryMetadata, listCategoryMetadata, togglePopularCategory };












import categoryMetadataModel from "../models/categoryMetadataModel.js";
import foodModel from "../models/foodModel.js";

const addCategoryMetadata = async (req, res) => {
  try {
    if (req.user && req.user.role === "admin") {
      const { category } = req.body;
      if (!category) {
        return res.status(400).json({ success: false, message: "Category name is required" });
      }
      const existingCategory = await categoryMetadataModel.findOne({ category });
      if (existingCategory) {
        return res.status(400).json({ success: false, message: "Category already exists" });
      }
      const newCategory = new categoryMetadataModel({ category, isPopular: false });
      await newCategory.save();
      console.log("Added category metadata:", newCategory);
      res.json({ success: true, message: "Category metadata added" });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("Add category metadata error:", error.message);
    res.status(500).json({ success: false, message: "Error adding category metadata" });
  }
};

const listCategoryMetadata = async (req, res) => {
  try {
    const categories = await categoryMetadataModel.find({}).lean();
    console.log("Fetched category metadata:", categories);
    res.json({ success: true, data: categories });
  } catch (error) {
    console.error("List category metadata error:", error.message);
    res.status(500).json({ success: false, message: "Error fetching category metadata" });
  }
};

const updateCategory = async (req, res) => {
  try {
    if (req.user && req.user.role === "admin") {
      const { oldCategory, newCategory } = req.body;
      if (!oldCategory || !newCategory) {
        return res.status(400).json({ success: false, message: "Old and new category names are required" });
      }
      const existingCategory = await categoryMetadataModel.findOne({ category: newCategory });
      if (existingCategory) {
        return res.status(400).json({ success: false, message: "New category name already exists" });
      }
      const categoryMetadata = await categoryMetadataModel.findOne({ category: oldCategory });
      if (!categoryMetadata) {
        return res.status(404).json({ success: false, message: "Category metadata not found" });
      }
      await foodModel.updateMany({ category: oldCategory }, { $set: { category: newCategory } });
      await categoryMetadataModel.updateOne(
        { category: oldCategory },
        { $set: { category: newCategory } }
      );
      console.log("Updated category:", { oldCategory, newCategory });
      res.json({ success: true, message: "Category updated" });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("Update category error:", error.message);
    res.status(500).json({ success: false, message: "Error updating category" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    if (req.user && req.user.role === "admin") {
      const { category } = req.body;
      if (!category) {
        return res.status(400).json({ success: false, message: "Category name is required" });
      }
      const foodCount = await foodModel.countDocuments({ category });
      if (foodCount > 0) {
        return res.status(400).json({ success: false, message: "Cannot delete category with associated food items" });
      }
      const categoryMetadata = await categoryMetadataModel.findOneAndDelete({ category });
      if (!categoryMetadata) {
        return res.status(404).json({ success: false, message: "Category metadata not found" });
      }
      console.log("Deleted category metadata:", categoryMetadata);
      res.json({ success: true, message: "Category deleted" });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("Delete category error:", error.message);
    res.status(500).json({ success: false, message: "Error deleting category" });
  }
};

const togglePopularCategory = async (req, res) => {
  try {
    if (req.user && req.user.role === "admin") {
      const { category, isPopular } = req.body;
      let categoryMetadata = await categoryMetadataModel.findOne({ category });
      if (!categoryMetadata) {
        categoryMetadata = new categoryMetadataModel({ category, isPopular: isPopular !== undefined ? isPopular : true });
      } else {
        categoryMetadata.isPopular = isPopular !== undefined ? isPopular : !categoryMetadata.isPopular;
      }
      await categoryMetadata.save();
      console.log("Updated category metadata:", categoryMetadata);
      res.json({ success: true, message: "Category updated", data: categoryMetadata });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("Toggle popular category error:", error.message);
    res.status(500).json({ success: false, message: "Error toggling popular category" });
  }
};

export { addCategoryMetadata, listCategoryMetadata, updateCategory, deleteCategory, togglePopularCategory };