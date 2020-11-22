const clientList = [
  {
    firstName: "Darrell",
    lastName: "Bazian",
    lastAppointment: "6/6/83",
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
    lastAppointment: "6/6/83",
    products: "none",
    address: "1234",
    phoneNumber: "31343434534",
    emailAddress: "darrellbazianjr@gmail.com",
    formula: "sdfsdkjsdf",
    yearlySpent: "199",
    totalSpent: "4888",
  },
];

const tryToMap = () => {
  console.log(clientList.map((x) => x.firstName));
  //console.log(clients.map((x) => ({ label: x, value: x })));
};

tryToMap();
