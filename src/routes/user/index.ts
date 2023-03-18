import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../../controllers/user";
import { asyncHandler } from "../../middleware/asyncHandler";

const router: Router = Router();

router.get("/", asyncHandler(getAllUsers));
router.post("/", asyncHandler(createUser));
router.get("/:id", asyncHandler(getUserById));
router.put("/:id", asyncHandler(updateUser));
router.delete("/:id", asyncHandler(deleteUser));

export default router;
