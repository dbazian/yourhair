const clientList = [
  {
    firstName: "Darrell",
    lastName: "Bazian",
    lastAppointment: "1/1/2019",
    products: "none",
    address: "1234",
    phoneNumber: "31343434534",
    emailAddress: "darrellbazianjr@gmail.com",
    formula: "sdfsdkjsdf",
    yearlySpent: "199",
    totalSpent: "4888",
  },
  {
    firstName: "Cathy",
    lastName: "Bazian",
    lastAppointment: "6/6/2020",
    products: "none",
    address: "1234",
    phoneNumber: "31343434534",
    emailAddress: "darrellbazianjr@gmail.com",
    formula: "sdfsdkjsdf",
    yearlySpent: "199",
    totalSpent: "4888",
  },
  {
    firstName: "Brocolli",
    lastName: "Rob",
    lastAppointment: "9/1/2019",
    products: "none",
    address: "1234",
    phoneNumber: "31343434534",
    emailAddress: "darrellbazianjr@gmail.com",
    formula: "sdfsdkjsdf",
    yearlySpent: "199",
    totalSpent: "4888",
  },
];

const sortDescending = (list) => {
  const dates = list.sort((a, b) => {
    a = new Date(a.lastAppointment);
    b = new Date(b.lastAppointment);
    return a + b;
  });
  return dates;
};

sortDescending(clientList);

const sortAscending = (list) => {
  const dates = list.sort((a, b) => {
    a = new Date(a.lastAppointment);
    b = new Date(b.lastAppointment);
    return a - b;
  });
  return dates;
};

sortAscending(clientList);
