import { Router } from "express";
import userRouter from "./user";
import addressRouter from "./address";
import postRouter from "./post";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/addresses", addressRouter);
router.use("/posts", postRouter);

export default router;
