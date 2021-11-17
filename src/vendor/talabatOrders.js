const faker = require("faker");
// let orderID = faker.datatype.uuid();

const talabat = [
  {
    store: "acme-widgets",
    order: "pizza1",
    time: new Date(),
    customerName: faker.name.findName(),
  },
  {
    store: "1-800-flowers",
    order: "Shawerma",
    time: new Date(),
    customerName: faker.name.findName(),
  },
  {
    store: "acme-widgets",
    order: "pizza2",
    time: new Date(),
    customerName: faker.name.findName(),
  },
  {
    store: "1-800-flowers",
    order: "Burger",
    time: new Date(),
    customerName: faker.name.findName(),
  },
  // {
  //   store: "acme-widgets",
  //   order: "Burger3",
  //   orderId: orderID,
  //   time: new Date(),
  //   customerName: customer,
  // },
  // {
  //   store: "1-800-flowers",
  //   order: "pizza",
  //   orderId: orderID,
  //   time: new Date(),
  //   customerName: customer,
  // },
];

module.exports = talabat;
