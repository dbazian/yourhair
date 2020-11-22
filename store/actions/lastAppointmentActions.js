export const FILTER_LAST_APPOINTMENT = "FILTER_LAST_APPOINTMENT";

export const filterAppointmentAscending = (ascending, month, year) => {
  return {
    type: FILTER_LAST_APPOINTMENT,
    ascending,
    month,
    year,
  };
};
