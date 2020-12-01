export const LAST_APPOINTMENT_ASCENDING = "LAST_APPOINTMENT_ASCENDING";
export const LAST_APPOINTMENT_DESCENDING = "LAST_APPOINTMENT_DESCENDING";
export const LAST_NAME_ASCENDING = "LAST_NAME_ASCENDING";
export const LAST_NAME_DESCENDING = "LAST_NAME_DESCENDING";
export const CITY_ASCENDING = "CITY_ASCENDING";
export const CITY_DESCENDING = "CITY_DESCENDING";

export const lastNameAscending = () => {
  return {
    type: LAST_NAME_ASCENDING,
  };
};

export const lastNameDescending = () => {
  return {
    type: LAST_NAME_DESCENDING,
  };
};
