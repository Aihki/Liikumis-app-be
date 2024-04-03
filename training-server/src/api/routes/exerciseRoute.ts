import express from "express";
import { addExercise, getUsersSpecificExercise, getUsersExercise, modifySpecificExercise, removeExercise, getExercisesByWorkoutId, getDefaultExercise, getPersonalBestByExerciseName } from "../controllers/exercisesController";
import { authenticate } from "../../middlewares";

const router = express.Router();

router.get("/:userId", authenticate, getUsersExercise);
router.get("/", getDefaultExercise)
router.get("/:userId/:exerciseId", authenticate, getUsersSpecificExercise);
router.get("/:userId/workout/:userWorkoutId", getExercisesByWorkoutId);
router.get("/:userId/personal-best/:exerciseName", authenticate, getPersonalBestByExerciseName);
router.post("/:userId", authenticate, addExercise);
router.put("/:userId/:exerciseId", modifySpecificExercise);
router.delete("/:userId/:exerciseId", authenticate, removeExercise);

export default router;
