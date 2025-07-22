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

// Google OAuth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { session: false }), socialCallback);

// Facebook OAuth
router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));
router.get("/facebook/callback", passport.authenticate("facebook", { session: false }), socialCallback);

export default router;