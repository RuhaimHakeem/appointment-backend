import AppointmentModel, { AppointmentProps } from "../model/appointment.model";

const createAppointmentService = async ({
  name,
  email,
  date,
  mobile,
}: AppointmentProps) => {
  const result = await AppointmentModel.create({
    name: name,
    email: email,
    date: date,
    mobile: mobile,
  });
  return result;
};

export { createAppointmentService };
