import Express from "express";

import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = Express.Router();

// routeing
// Registers||method post
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);
router.get("/test", requireSignIn,isAdmin, testController);

export default router;
