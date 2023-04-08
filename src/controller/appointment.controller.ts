import { NextFunction, Request, Response } from "express";
import AppointmentModel from "../model/appointment.model";
import { createAppointmentService } from "../service/appointment.service";

const getAllAppointments = (req: Request, res: Response) => {
  const date = new Date();
  console.log(typeof date);
  res.json({
    name: "Hi",
  });
};

const addAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, date, mobile } = req.body;

  if (!name || !email || !date || !mobile) {
    res.status(400);
    next(new Error("Please add all the fields"));
  }

  try {
    const appointment = await createAppointmentService(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400);
    next(err);
  }
};

export { addAppointment };
