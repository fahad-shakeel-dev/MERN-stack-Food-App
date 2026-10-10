import express from "express";
import { addFood, listFood, removeFood} from "../controllers/foodController.js";
import { updateFood } from "../controllers/foodController.js";
import multer from "multer";
import authMiddleware from "../middleware/auth.js";
import { listCategories } from "../controllers/foodController.js";
const foodRouter = express.Router();
import verifyToken from "../middleware/auth.js";
// Image Storage Engine

import fs from "fs";

// Ensure uploads directory exists if not on Vercel
const uploadDir = process.env.VERCEL ? "/tmp" : "uploads";
if (!process.env.VERCEL && !fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload= multer({storage:storage})

foodRouter.post("/add",upload.single("image"),authMiddleware,addFood);
foodRouter.get("/list",listFood);
foodRouter.get("/categories", listCategories);
foodRouter.post("/remove",verifyToken,authMiddleware,removeFood);
foodRouter.post("/update",verifyToken, updateFood);

export default foodRouter;
