import express from "express";
import { addFood, listFood, removeFood} from "../controllers/foodController.js";
import { updateFood } from "../controllers/foodController.js";
import multer from "multer";
import authMiddleware from "../middleware/auth.js";
import { listCategories } from "../controllers/foodController.js";
const foodRouter = express.Router();
import verifyToken from "../middleware/auth.js";
// Image Storage Engine

const storage= multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload= multer({storage:storage})

foodRouter.post("/add",upload.single("image"),authMiddleware,addFood);
foodRouter.get("/list",listFood);
foodRouter.get("/categories", listCategories);
foodRouter.post("/remove",verifyToken,authMiddleware,removeFood);
foodRouter.post("/update",verifyToken, updateFood);

export default foodRouter;
