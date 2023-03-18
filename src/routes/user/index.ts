import { Router } from "express";
import { createUser } from "../../controllers/user";
import { asyncHandler } from "../../middleware/asyncHandler";

const router: Router = Router();

router.post("/", asyncHandler(createUser));

export default router;
