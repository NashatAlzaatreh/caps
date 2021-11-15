"use strict";

const io = require("socket.io-client");
const { vendor, delivered } = require("./vendor-handler");

/* ------ CONNECT ---------- */
const host = "http://localhost:3000";
const capsConnection = io.connect(host);

/* ------ Listener ---------- */
capsConnection.on("pickup", vendor);
capsConnection.on("delivered", delivered);

/* ------ Event Handler ---------- */

// events lab 11

// const events = require("../../event-pool");
// const faker = require("faker");

// events.on("pickup", vendor);
// events.on("delivered", delivered);

// function vendor(payload) {
//   const event = "pickup";
//   console.log("EVENT", { event, time: new Date().toISOString(), payload });
//   console.log(`DRIVER: picked up ${payload.orderID}`);
// }

// function delivered(payload) {
//   const event = "delivered";
//   console.log("EVENT", { event, time: new Date().toISOString(), payload });
//   console.log(`Thank you, ${payload.customer}`);
// }
// let timer = 3000;
// setInterval(() => {
//   let store = faker.company.companyName();
//   let orderID = faker.datatype.uuid();
//   let customer = faker.name.findName();
//   let address = `${faker.address.city()} - ${faker.address.country()}`;
//   // we are calling, firing that event
//   console.log("----------------------1");
//   // .emit is a method used t o fire event
//   events.emit("caps", {
//     store,
//     orderID,
//     customer,
//     address,
//   });
//   console.log("----------------------");
// }, timer);
