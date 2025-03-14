import { Router } from "express";
import AuthContoller from "../controller/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = Router();

router.post("/auth/register", AuthContoller.register);
router.post("/auth/login", AuthContoller.login);

router.get("/auth/user", authMiddleware, AuthContoller.user);

export default router;
