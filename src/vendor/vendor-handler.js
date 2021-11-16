"use strict";

// function vendor(payload) {
//   console.log(`Thank you for delivering ${payload.orderID}`);
// }
// function delivered(payload) {
//   console.log(`Thank you for delivering ${payload.orderID}`);
// }

const faker = require("faker");
let orderID = faker.datatype.uuid();
let customer = faker.name.findName();

const talabat = [
  {
    store: "acme-widgets",
    order: "pizza1",
    orderId: orderID,
    time: new Date(),
    customerName: customer,
  },
  {
    store: "1-800-flowers",
    order: "Shawerma",
    orderId: orderID,
    time: new Date(),
    customerName: customer,
  },
  {
    store: "acme-widgets",
    order: "pizza2",
    orderId: orderID,
    time: new Date(),
    customerName: customer,
  },
  {
    store: "1-800-flowers",
    order: "Burger",
    orderId: orderID,
    time: new Date(),
    customerName: customer,
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
