// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   const { token } = req.headers;
//   if (!token) {
//     return res.json({ success: false, message: "Not Authorized Login Again" });
//   }
//   try {
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.userId = token_decode.id;
//     next();
//   } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"});
//   }
// };
// export default authMiddleware;


// import jwt from "jsonwebtoken";

// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: "Unauthorized" });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(403).json({ message: "Token invalid" });

//     req.user = decoded;
//     next();
//   });
// };

// export default verifyUser;









import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id).lean();
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid token: User not found" });
    }

    req.user = { id: user._id, role: user.role };
    console.log("Verified user:", req.user); // Debug log
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default verifyToken;
