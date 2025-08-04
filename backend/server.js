// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// // app config
// const app = express();
// const port =process.env.PORT || 4000;

// //middlewares
// app.use(express.json());
// app.use(cors());

// // DB connection
// connectDB();

// // api endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/user", userRouter);
// app.use("/api/auth", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => {
//   console.log(`Server Started on port: ${port}`);
// });






// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// // app config
// const app = express();
// const port = process.env.PORT || 4000;

// // middlewares
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Specify the frontend origin
//   credentials: true, // Allow credentials (cookies, etc.)
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
// }));

// // Handle preflight requests explicitly (optional, as cors middleware handles it)
// app.options('*', cors({
//   origin: 'http://localhost:5173',
//   credentials: true,
// }));

// // DB connection
// connectDB();

// // api endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
// // app.use("/api/user", userRouter);
// app.use("/api/auth", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => {
//   console.log(`Server Started on port: ${port}`);
// });








// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// // app config
// const app = express();
// const port = process.env.PORT || 4000;

// // middlewares
// app.use(express.json());
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both user and admin origins
//   credentials: true, // Allow credentials (cookies, etc.)
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
// }));

// // Handle preflight requests explicitly
// app.options('*', cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
// }));

// // DB connection
// connectDB();

// // api endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/auth", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => {
//   console.log(`Server Started on port: ${port}`);
// });







// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import verifyToken from "./middleware/auth.js"; // Import middleware

// // app config
// const app = express();
// const port = process.env.PORT || 4000;

// // middlewares
// app.use(express.json());
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// app.options('*', cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
// }));

// // DB connection
// connectDB();

// // api endpoints
// app.use("/api/food", verifyToken, foodRouter); // Apply verifyToken to food routes
// app.use("/images", express.static("uploads"));
// app.use("/api/auth", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => {
//   console.log(`Server Started on port: ${port}`);
// });







// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import verifyToken from "./middleware/auth.js";

// // app config
// const app = express();
// const port = process.env.PORT || 4000;

// // middlewares
// app.use(express.json());
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// app.options('*', cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
// }));

// // DB connection
// connectDB();

// // api endpoints
// app.use("/api/food", verifyToken, foodRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/auth", userRouter);
// app.use("/api/cart", verifyToken, cartRouter);
// app.use("/api/order", verifyToken, orderRouter); // Apply verifyToken to order routes

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => {
//   console.log(`Server Started on port: ${port}`);
// });








// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import categoryRouter from "./routes/categoryRoute.js";
// import "dotenv/config";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import verifyToken from "./middleware/auth.js";
// import offerRoutes from "./routes/offerRoutes.js";
// // app config
// const app = express();
// const port = process.env.PORT || 4000;

// // middlewares
// app.use(express.json());
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   exposedHeaders: ['Set-Cookie'],
// }));

// app.use((req, res, next) => {
//   console.log("CORS headers for", req.method, req.url, ":", res.getHeaders());
//   next();
// });

// app.options('*', cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
// }));

// // DB connection
// connectDB();

// // api endpoints
// app.use("/api/food", verifyToken, foodRouter);
// app.use("/api/category", verifyToken, categoryRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/auth", userRouter);
// app.use("/api/cart", verifyToken, cartRouter);
// app.use("/api/order", verifyToken, orderRouter);
// app.use('/api', offerRoutes);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => {
//   console.log(`Server Started on port: ${port}`);
// });



// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import categoryRouter from "./routes/categoryRoute.js";
// import "dotenv/config";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import verifyToken from "./middleware/auth.js";
// import offerRoutes from "./routes/offerRoutes.js";
// import contactRouter from "./routes/contactRoutes.js";

// const app = express();
// const port = process.env.PORT || 4000;

// app.use(express.json());
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   exposedHeaders: ['Set-Cookie'],
// }));

// app.use((req, res, next) => {
//   console.log(`Request: ${req.method} ${req.url}`);
//   console.log("CORS headers:", res.getHeaders());
//   next();
// });

// app.options('*', cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true,
// }));

// connectDB();

// app.use("/api/food", foodRouter);
// app.use("/api/category", categoryRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/auth", userRouter);
// app.use("/api/cart", verifyToken, cartRouter);
// app.use("/api/order", verifyToken, orderRouter);
// app.use("/api/contact", contactRouter);
// app.use("/api", offerRoutes);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => {
//   console.log(`Server Started on port: ${port}`);
// });











import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import offerRoutes from "./routes/offerRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import verifyToken from "./middleware/auth.js";
import "dotenv/config";

import "./config/passport.js"; // Import Passport config

const app = express();
const port = process.env.PORT || 4000;

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
  })
);


// app.use(
//   cors({
//     origin: ["https://fayzr-food.vercel.app", "https://fayzr-food-admin.vercel.app"],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     exposedHeaders: ["Set-Cookie"],
//   })
// );



// app.use((req, res, next) => {
//   console.log(`Request: ${req.method} ${req.url}`);
//   console.log("CORS headers:", res.getHeaders());
//   next();
// });

app.use("/api/*", (req, res, next) => {
  if (req.user && req.session.passport) {
    console.log("Clearing Passport session-based req.user for API route");
    delete req.user;
  }
  next();
});

app.options("*", cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
}));

connectDB();

app.use("/api/food", foodRouter);
app.use("/api/category", categoryRouter);
app.use("/images", express.static("uploads"));
app.use("/api/auth", userRouter);
app.use("/api/cart", verifyToken, cartRouter);
app.use("/api/order", verifyToken, orderRouter);
app.use("/api/contact", contactRouter);
app.use("/api", offerRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on port: ${port}`);
});