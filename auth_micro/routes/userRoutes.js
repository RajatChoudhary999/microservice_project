import { Router } from "express";
import AuthContoller from "../controller/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";
import UserController from "../controller/UserController.js";

const router = Router();

router.get("/getUser/:id", UserController.getUser);
router.post("/getUsers", UserController.getUsers);

export default router;
