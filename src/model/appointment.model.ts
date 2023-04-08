import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";
import time from "../utils/time-formatter";
import { v4 as uuidv4 } from "uuid";

const currentTime = time();

const regex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

export interface AppointmentProps {
  id?: string;
  name: string;
  date: Date;
  startTime: string;
  endTime: string;
  duration: string;
  email: string;
  mobile: string;
  confirmed: boolean;
}

const AppointmentSchema = new mongoose.Schema<AppointmentProps>({
  id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  date: {
    type: Date,
    required: [true, "Please enter a date"],
  },
  startTime: {
    type: String,
    required: [true, "Please enter a time"],
    default: currentTime,
  },
  endTime: {
    type: String,
    required: [true, "Please enter a time"],
    default: currentTime,
  },
  duration: {
    type: String,
    required: [true, "Please enter a duration"],
    default: currentTime,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    validate: [isEmail, "Please enter a valid email"],
  },
  mobile: {
    type: String,
    required: [true, "Please enter a number"],
    match: [regex, "Phone number is not valid"],
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

const AppointmentModel = mongoose.model<AppointmentProps>(
  "Appointment",
  AppointmentSchema
);

export default AppointmentModel;
