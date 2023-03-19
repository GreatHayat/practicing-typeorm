import { Router } from "express";
import { createPost, getAllPosts } from "../../controllers/post";
import { asyncHandler } from "../../middleware/asyncHandler";

const router: Router = Router();

router.get("/", asyncHandler(getAllPosts));
router.post("/", asyncHandler(createPost));

export default router;
