import { Router } from "express";
import { createAddress } from "../../controllers/address";
import { asyncHandler } from "../../middleware/asyncHandler";

const router: Router = Router();

router.post("/", asyncHandler(createAddress));

export default router;
