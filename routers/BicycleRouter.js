import Express  from "express";
import {getBicycles} from "../controllers/BicycleController.js"

const router = Express.Router();

router.get("/", getBicycles);

export default router;