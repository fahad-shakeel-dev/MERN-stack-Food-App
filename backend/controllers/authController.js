// // import User from "../models/userModel.js";
// // import bcrypt from "bcrypt";
// // import jwt from "jsonwebtoken";

// // // Signup
// // exports.signup = async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     const userExists = await User.findOne({ email });
// //     if (userExists) return res.status(400).json({ message: "User already exists" });

// //     const hashed = await bcrypt.hash(password, 10);
// //     const newUser = new User({ name, email, password: hashed });
// //     await newUser.save();

// //     res.status(201).json({ message: "Signup successful", user: newUser });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // Login
// // exports.login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: "Invalid email" });

// //     const match = await bcrypt.compare(password, user.password);
// //     if (!match) return res.status(400).json({ message: "Invalid password" });

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "3d",
// //     });

// //     res.cookie("token", token, {
// //       httpOnly: true,
// //       sameSite: "strict",
// //       secure: false, // Set true in production with HTTPS
// //       maxAge: 3 * 24 * 60 * 60 * 1000,
// //     });

// //     res.status(200).json({ message: "Login successful", user });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // Logout
// // exports.logout = (req, res) => {
// //   res.clearCookie("token");
// //   res.status(200).json({ message: "Logout successful" });
// // };








// import User from "../models/userModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// // Signup Controller
// // export const signup = async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     const userExists = await User.findOne({ email });
// //     if (userExists) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     const hashed = await bcrypt.hash(password, 10);
// //     const newUser = new User({ name, email, password: hashed });
// //     await newUser.save();

// //     res.status(201).json({ message: "Signup successful", user: newUser });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };
// export const signup = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashed = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashed });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "3d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "strict",
//       secure: false, // true in production (HTTPS)
//       maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
//     });

//     res.status(201).json({ message: "Signup successful", user: newUser, token, success: true });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Login Controller
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid email" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "3d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "strict",
//       secure: false, // true in production (HTTPS)
//       maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
//     });

//     res.status(200).json({ message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Logout Controller
// export const logout = (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({ message: "Logout successful" });
// };










// import User from "../models/userModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const signup = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashed = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashed, role: role || "user" });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
//       expiresIn: "3d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "strict",
//       secure: false, // true in production (HTTPS)
//       maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
//     });

//     res.status(201).json({ message: "Signup successful", user: newUser, token, role: newUser.role, success: true });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email }).lean(); // Use .lean() for plain JS object
//     if (!user) return res.status(400).json({ message: "Invalid email" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Invalid password" });

//     console.log("User found:", user); // Debug log to inspect entire user object
//     console.log("User role from database:", user.role); // Debug log for role

//     if (!user.role) {
//       console.warn("Role is undefined for user, defaulting to 'user'");
//       user.role = "user"; // Fallback to avoid undefined
//     }

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//       expiresIn: "3d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "strict",
//       secure: false, // true in production (HTTPS)
//       maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
//     });

//     res.status(200).json({ message: "Login successful", user, token, role: user.role, success: true });
//   } catch (err) {
//     console.error("Login error:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// export const logout = (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({ message: "Logout successful" });
// };







import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed, role: role || "user" });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: false, // true in production (HTTPS)
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });

    res.status(201).json({ message: "Signup successful", user: newUser, token, role: newUser.role, success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean();
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    console.log("User found:", user);
    console.log("User role from database:", user.role);

    if (!user.role) {
      console.warn("Role is undefined for user, defaulting to 'user'");
      user.role = "user";
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: false, // true in production (HTTPS)
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });

    res.status(200).json({ message: "Login successful", user, token, role: user.role, success: true });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
};

export const socialCallback = (req, res) => {
  const token = req.user.token;
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: false, // true in production (HTTPS)
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
  });
  res.redirect(`http://localhost:5173/auth/callback?token=${token}`);
};