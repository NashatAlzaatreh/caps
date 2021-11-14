"use strict";

const events = require("../../event-pool");

events.on("in-transit", pickupOrder);

function pickupOrder(payload) {
  const event = "in-transit";
  console.log("EVENT", { event, time: new Date().toISOString(), payload });
  console.log(`DRIVER: delivered up ${payload.orderID} `);
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
}
