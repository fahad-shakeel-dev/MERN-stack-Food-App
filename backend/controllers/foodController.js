// import foodModel from "../models/foodModel.js";
// import userModel from "../models/userModel.js";
// import fs from "fs";

// // add food items

// const addFood = async (req, res) => {
//   let image_filename = `${req.file.filename}`;
//   const food = new foodModel({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//     image: image_filename,
//   });
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     if (userData && userData.role === "admin") {
//       await food.save();
//       res.json({ success: true, message: "Food Added" });
//     } else {
//       res.json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // all foods
// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // remove food item
// const removeFood = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     if (userData && userData.role === "admin") {
//       const food = await foodModel.findById(req.body.id);
//       fs.unlink(`uploads/${food.image}`, () => {});
//       await foodModel.findByIdAndDelete(req.body.id);
//       res.json({ success: true, message: "Food Removed" });
//     } else {
//       res.json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { addFood, listFood, removeFood };









// import foodModel from "../models/foodModel.js";
// import userModel from "../models/userModel.js";
// import fs from "fs";

// const addFood = async (req, res) => {
//   try {
//     let image_filename = `${req.file.filename}`;
//     const food = new foodModel({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       category: req.body.category,
//       image: image_filename,
//     });

//     // Check if user is admin using req.user from middleware
//     if (req.user && req.user.role === "admin") {
//       await food.save();
//       res.json({ success: true, message: "Food Added" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Add food error:", error.message);
//     res.status(500).json({ success: false, message: "Error adding food" });
//   }
// };

// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.error("List food error:", error.message);
//     res.json({ success: false, message: "Error fetching food list" });
//   }
// };

// const removeFood = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const food = await foodModel.findById(req.body.id);
//       if (!food) {
//         return res.status(404).json({ success: false, message: "Food not found" });
//       }
//       fs.unlink(`uploads/${food.image}`, (err) => {
//         if (err) console.error("Error deleting image:", err.message);
//       });
//       await foodModel.findByIdAndDelete(req.body.id);
//       res.json({ success: true, message: "Food Removed" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Remove food error:", error.message);
//     res.status(500).json({ success: false, message: "Error removing food" });
//   }
// };

// export { addFood, listFood, removeFood };


// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// const addFood = async (req, res) => {
//   try {
//     let image_filename = `${req.file.filename}`;
//     const food = new foodModel({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       category: req.body.category,
//       image: image_filename,
//     });

//     console.log("Adding food:", food); // Debug log
//     if (req.user && req.user.role === "admin") {
//       await food.save();
//       res.json({ success: true, message: "Food Added" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Add food error:", error.message);
//     res.status(500).json({ success: false, message: "Error adding food" });
//   }
// };

// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({}).lean();
//     console.log("Fetched food list:", foods); // Debug log
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.error("List food error:", error.message);
//     res.status(500).json({ success: false, message: "Error fetching food list" });
//   }
// };

// const removeFood = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const food = await foodModel.findById(req.body.id);
//       if (!food) {
//         return res.status(404).json({ success: false, message: "Food not found" });
//       }
//       fs.unlink(`uploads/${food.image}`, (err) => {
//         if (err) console.error("Error deleting image:", err.message);
//       });
//       await foodModel.findByIdAndDelete(req.body.id);
//       res.json({ success: true, message: "Food Removed" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Remove food error:", error.message);
//     res.status(500).json({ success: false, message: "Error removing food" });
//   }
// };

// export { addFood, listFood, removeFood };







// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// const addFood = async (req, res) => {
//   try {
//     let image_filename = `${req.file.filename}`;
//     const food = new foodModel({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       category: req.body.category,
//       image: image_filename,
//       isFeatured: req.body.isFeatured === "true" || false,
//       isPopular: req.body.isPopular === "true" || false,
//     });

//     console.log("Adding food:", food); // Debug log
//     if (req.user && req.user.role === "admin") {
//       await food.save();
//       res.json({ success: true, message: "Food Added" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Add food error:", error.message);
//     res.status(500).json({ success: false, message: "Error adding food" });
//   }
// };

// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({}).lean();
//     console.log("Fetched food list:", foods); // Debug log
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.error("List food error:", error.message);
//     res.status(500).json({ success: false, message: "Error fetching food list" });
//   }
// };

// const removeFood = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const food = await foodModel.findById(req.body.id);
//       if (!food) {
//         return res.status(404).json({ success: false, message: "Food not found" });
//       }
//       fs.unlink(`uploads/${food.image}`, (err) => {
//         if (err) console.error("Error deleting image:", err.message);
//       });
//       await foodModel.findByIdAndDelete(req.body.id);
//       res.json({ success: true, message: "Food Removed" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Remove food error:", error.message);
//     res.status(500).json({ success: false, message: "Error removing food" });
//   }
// };

// const updateFood = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const { id, isFeatured, isPopular } = req.body;
//       const food = await foodModel.findById(id);
//       if (!food) {
//         return res.status(404).json({ success: false, message: "Food not found" });
//       }
//       food.isFeatured = isFeatured !== undefined ? isFeatured : food.isFeatured;
//       food.isPopular = isPopular !== undefined ? isPopular : food.isPopular;
//       await food.save();
//       console.log("Updated food:", food); // Debug log
//       res.json({ success: true, message: "Food updated", data: food });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Update food error:", error.message);
//     res.status(500).json({ success: false, message: "Error updating food" });
//   }
// };

// export { addFood, listFood, removeFood, updateFood };







import foodModel from "../models/foodModel.js";
import categoryMetadataModel from "../models/categoryMetadataModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
      isFeatured: req.body.isFeatured === "true" || false,
      isPopular: req.body.isPopular === "true" || false,
    });

    console.log("Adding food:", food);
    if (req.user && req.user.role === "admin") {
      await food.save();
      await categoryMetadataModel.updateOne(
        { category: req.body.category },
        { $setOnInsert: { category: req.body.category, isPopular: false } },
        { upsert: true }
      );
      res.json({ success: true, message: "Food Added" });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("Add food error:", error.message);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({}).lean();
    console.log("Fetched food list:", foods);
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("List food error:", error.message);
    res.status(500).json({ success: false, message: "Error fetching food list" });
  }
};

const listCategories = async (req, res) => {
  try {
    const categories = await categoryMetadataModel.find({}).distinct("category");
    console.log("Fetched categories:", categories);
    res.json({ success: true, data: categories });
  } catch (error) {
    console.error("List categories error:", error.message);
    res.status(500).json({ success: false, message: "Error fetching categories" });
  }
};

const removeFood = async (req, res) => {
  try {
    if (req.user && req.user.role === "admin") {
      const food = await foodModel.findById(req.body.id);
      if (!food) {
        return res.status(404).json({ success: false, message: "Food not found" });
      }
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) console.error("Error deleting image:", err.message);
      });
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Food Removed" });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("Remove food error:", error.message);
    res.status(500).json({ success: false, message: "Error removing food" });
  }
};

const updateFood = async (req, res) => {
  try {
    if (req.user && req.user.role === "admin") {
      const { id, isFeatured, isPopular } = req.body;
      const food = await foodModel.findById(id);
      if (!food) {
        return res.status(404).json({ success: false, message: "Food not found" });
      }
      food.isFeatured = isFeatured !== undefined ? isFeatured : food.isFeatured;
      food.isPopular = isPopular !== undefined ? isPopular : food.isPopular;
      await food.save();
      console.log("Updated food:", food);
      res.json({ success: true, message: "Food updated", data: food });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("Update food error:", error.message);
    res.status(500).json({ success: false, message: "Error updating food" });
  }
};

export { addFood, listFood, listCategories, removeFood, updateFood };