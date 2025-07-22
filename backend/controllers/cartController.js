// import userModel from "../models/userModel.js";

// // add items to user cart
// const addToCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     if (!cartData[req.body.itemId]) {
//       cartData[req.body.itemId] = 1;
//     } else {
//       cartData[req.body.itemId] += 1;
//     }
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//     res.json({ success: true, message: "Added to Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // remove from cart
// const removeFromCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     if (cartData[req.body.itemId] > 1) {
//       cartData[req.body.itemId] -= 1;
//     } else {
//       delete cartData[req.body.itemId];
//     }
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//     res.json({ success: true, message: "Removed from Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // fetch user cart data
// const getCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     res.json({ success: true, cartData: cartData });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { addToCart, removeFromCart, getCart };










import userModel from "../models/userModel.js";

// Add items to user cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { itemId } = req.body;
    if (!userId || !itemId) {
      return res.status(400).json({ success: false, message: "User ID and item ID are required" });
    }
    let userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    let cartData = userData.cartData || {};
    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });
    console.log(`Added to cart for user ${userId}:`, cartData);
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.error("Add to cart error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { itemId } = req.body;
    if (!userId || !itemId) {
      return res.status(400).json({ success: false, message: "User ID and item ID are required" });
    }
    let userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    let cartData = userData.cartData || {};
    if (cartData[itemId] > 1) {
      cartData[itemId] -= 1;
    } else {
      delete cartData[itemId];
    }
    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });
    console.log(`Removed from cart for user ${userId}:`, cartData);
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.error("Remove from cart error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Fetch user cart data
export const getCart = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }
    let userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    let cartData = userData.cartData || {};
    console.log(`Fetched cart for user ${userId}:`, cartData);
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("Get cart error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Server error" });
  }
};