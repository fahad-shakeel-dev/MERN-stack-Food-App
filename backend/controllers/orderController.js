// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // placing user order for frontend
// const placeOrder = async (req, res) => {
//   const frontend_url = "https://food-delivery-frontend-s2l9.onrender.com";
//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: "Delivery Charges",
//         },
//         unit_amount: 2 * 100,
//       },
//       quantity: 1,
//     });

//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: "payment",
//       success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//     });

//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// const verifyOrder = async (req, res) => {
//   const { orderId, success } = req.body;
//   try {
//     if (success == "true") {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       res.json({ success: true, message: "Paid" });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       res.json({ success: false, message: "Not Paid" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // user orders for frontend
// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.body.userId });
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // Listing orders for admin pannel
// const listOrders = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     if (userData && userData.role === "admin") {
//       const orders = await orderModel.find({});
//       res.json({ success: true, data: orders });
//     } else {
//       res.json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // api for updating status
// const updateStatus = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     if (userData && userData.role === "admin") {
//       await orderModel.findByIdAndUpdate(req.body.orderId, {
//         status: req.body.status,
//       });
//       res.json({ success: true, message: "Status Updated Successfully" });
//     }else{
//       res.json({ success: false, message: "You are not an admin" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };











// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const placeOrder = async (req, res) => {
//   const frontend_url = "https://food-delivery-frontend-s2l9.onrender.com";
//   try {
//     const newOrder = new orderModel({
//       userId: req.user.id, // Use req.user from middleware
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.user.id, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: { name: item.name },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "usd",
//         product_data: { name: "Delivery Charges" },
//         unit_amount: 2 * 100,
//       },
//       quantity: 1,
//     });

//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: "payment",
//       success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//     });

//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.error("Place order error:", error.message);
//     res.status(500).json({ success: false, message: "Error placing order" });
//   }
// };

// const verifyOrder = async (req, res) => {
//   const { orderId, success } = req.body;
//   try {
//     if (success === "true") {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       res.json({ success: true, message: "Paid" });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       res.json({ success: false, message: "Not Paid" });
//     }
//   } catch (error) {
//     console.error("Verify order error:", error.message);
//     res.status(500).json({ success: false, message: "Error verifying order" });
//   }
// };

// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.user.id }).lean();
//     console.log("Fetched user orders:", orders);
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.error("User orders error:", error.message);
//     res.status(500).json({ success: false, message: "Error fetching user orders" });
//   }
// };

// const listOrders = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const orders = await orderModel.find({}).lean();
//       console.log("Fetched all orders:", orders);
//       res.json({ success: true, data: orders });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("List orders error:", error.message);
//     res.status(500).json({ success: false, message: "Error fetching orders" });
//   }
// };

// const updateStatus = async (req, res) => {
//   try {
//     if (req.user && req.user.role === "admin") {
//       const { orderId, status } = req.body;
//       await orderModel.findByIdAndUpdate(orderId, { status });
//       console.log("Updated status for order:", orderId, "to:", status);
//       res.json({ success: true, message: "Status Updated Successfully" });
//     } else {
//       res.status(403).json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.error("Update status error:", error.message);
//     res.status(500).json({ success: false, message: "Error updating status" });
//   }
// };

// export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };








import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173";
  try {
    const { items, amount, address } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: "No items provided" });
    }
    if (!amount || typeof amount !== "number" || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid amount" });
    }
    if (!address || !address.firstName || !address.email || !address.street || !address.city || !address.state || !address.zipcode || !address.country || !address.phone) {
      return res.status(400).json({ success: false, message: "Incomplete address information" });
    }
    if (!/^\S+@\S+\.\S+$/.test(address.email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }
    if (!/^\d{5}(-\d{4})?$/.test(address.zipcode)) {
      return res.status(400).json({ success: false, message: "Invalid zip code format" });
    }
    if (!/^\+?\d{10,15}$/.test(address.phone.replace(/\D/g, ""))) {
      return res.status(400).json({ success: false, message: "Invalid phone number" });
    }

    const newOrder = new orderModel({
      userId: req.user.id,
      items,
      amount,
      address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.user.id, { cartData: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100), // Ensure integer cents
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: { name: "Delivery Charges" },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });

    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ success: false, message: "Stripe secret key not configured" });
    }

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    console.log(`Order placed for user ${req.user.id}:`, newOrder._id);
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Place order error:", error.message, error.stack);
    res.status(500).json({ success: false, message: error.message || "Error placing order" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (!orderId) {
      return res.status(400).json({ success: false, message: "Order ID is required" });
    }
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      console.log(`Order ${orderId} marked as paid`);
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      console.log(`Order ${orderId} deleted due to payment failure`);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.error("Verify order error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Error verifying order" });
  }
};

const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.user.id }).lean();
    console.log(`Fetched user orders for ${req.user.id}:`, orders.length);
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("User orders error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Error fetching user orders" });
  }
};

const listOrders = async (req, res) => {
  try {
    if (req.user && req.user.role === "admin") {
      const orders = await orderModel.find({}).lean();
      console.log("Fetched all orders:", orders.length);
      res.json({ success: true, data: orders });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("List orders error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

const updateStatus = async (req, res) => {
  try {
    if (req.user && req.user.role === "admin") {
      const { orderId, status } = req.body;
      if (!orderId || !status) {
        return res.status(400).json({ success: false, message: "Order ID and status are required" });
      }
      await orderModel.findByIdAndUpdate(orderId, { status });
      console.log(`Updated status for order ${orderId} to: ${status}`);
      res.json({ success: true, message: "Status Updated Successfully" });
    } else {
      res.status(403).json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.error("Update status error:", error.message, error.stack);
    res.status(500).json({ success: false, message: "Error updating status" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };