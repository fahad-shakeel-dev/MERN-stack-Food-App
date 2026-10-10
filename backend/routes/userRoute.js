// import express from "express";
// import { loginUser, registerUser } from "../controllers/userController.js";

// const userRouter = express.Router();

// userRouter.post("/register", registerUser);
// userRouter.post("/login", loginUser);

// export default userRouter;



// import express from "express";
// import { signup, login, logout } from "../controllers/authController.js";

// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.get("/logout", logout);

// export default router;




// import express from "express";
// import { signup, login, logout } from "../controllers/authController.js";

// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.get("/logout", logout);

// export default router;








import express from "express";
import { signup, login, logout, socialCallback } from "../controllers/authController.js";
import passport from "passport";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

// Return a clear response when social login is not configured.
const requireOAuth = (provider) => (req, res, next) => {
  const configured = provider === "google"
    ? process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    : process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET;
  if (!configured) {
    return res.status(503).json({ success: false, message: provider + " login is not configured" });
  }
  next();
};

// Google OAuth
router.get("/google", requireOAuth("google"), passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", requireOAuth("google"), passport.authenticate("google", { session: false }), socialCallback);

// Facebook OAuth
router.get("/facebook", requireOAuth("facebook"), passport.authenticate("facebook", { scope: ["email"] }));
router.get("/facebook/callback", requireOAuth("facebook"), passport.authenticate("facebook", { session: false }), socialCallback);

export default router;
