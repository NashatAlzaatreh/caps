"use strict";

const io = require("socket.io-client");
const host = "http://localhost:3000";
const capsConnection = io.connect(host);
const faker = require("faker");

setInterval(() => {
  let store = faker.company.companyName();
  let orderID = faker.datatype.uuid();
  let customer = faker.name.findName();
  let address = `${faker.address.city()} - ${faker.address.country()}`;
  // we are calling, firing that event
  // .emit is a method used t o fire event
  capsConnection.emit("caps", {
    store,
    orderID,
    customer,
    address,
  });
  console.log("firing");
}, 3000);
