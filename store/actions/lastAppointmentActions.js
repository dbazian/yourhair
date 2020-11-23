export const FILTER_LAST_APPOINTMENT = "FILTER_LAST_APPOINTMENT";

export const filterLastAppointment = (order, month, year) => {
  console.log("action");
  console.log(order, month, year);
  return {
    type: FILTER_LAST_APPOINTMENT,
    order,
    month,
    year,
  };
};
