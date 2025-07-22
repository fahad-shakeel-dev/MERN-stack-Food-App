// import express from "express";
// import { addCategoryMetadata, listCategoryMetadata, updateCategory, deleteCategory, togglePopularCategory } from "../controllers/categoryController.js";

// const categoryRouter = express.Router();

// categoryRouter.post("/add", addCategoryMetadata);
// categoryRouter.get("/list", listCategoryMetadata);
// categoryRouter.post("/update", updateCategory);
// categoryRouter.post("/delete", deleteCategory);
// categoryRouter.post("/toggle-popular", togglePopularCategory);

// export default categoryRouter;

import express from "express";
import { addCategoryMetadata, listCategoryMetadata, updateCategory, deleteCategory, togglePopularCategory } from "../controllers/categoryController.js";
import verifyToken from "../middleware/auth.js";
const categoryRouter = express.Router();

categoryRouter.post("/add",verifyToken, addCategoryMetadata);
categoryRouter.get("/list", listCategoryMetadata);
categoryRouter.put("/update",verifyToken, updateCategory);
categoryRouter.delete("/delete", verifyToken,deleteCategory);
categoryRouter.post("/toggle-popular",verifyToken, togglePopularCategory);

export default categoryRouter;