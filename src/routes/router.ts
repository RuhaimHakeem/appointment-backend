import express from "express";
import { addAppointment } from "../controller/appointment.controller";

const router = express.Router();

// router.get("/", getAllAppointments);

router.post("/", addAppointment);

export default router;
