import { Router } from "express";
import loginRouter from "./login.js";
import registerRouter from "./register.js";
import postRouter from "./posts.js";

const router = Router();

router.use("/auth", registerRouter);
router.use("/auth", loginRouter);
router.use("/posts", postRouter);

export default router