import { Router } from "express";
import AuthContoller from "../controller/AuthController.js";

const router = Router();

router.post("/auth/register", AuthContoller.register);

export default router;
