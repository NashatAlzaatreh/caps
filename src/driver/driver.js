"use strict";

const io = require("socket.io-client");

const driver = require("./driverHandler");
/* ------ CONNECT ---------- */
const host = "http://localhost:3000";
const capsConnection = io.connect(host);

/* ------ Listener ---------- */
capsConnection.on("in-transit", driver);

/* ------ Event Handler ---------- */
// function pickupOrder(payload) {
//   console.log(`pickup ${payload.orderID}`);
//   console.log(`delivered ${payload.orderID} `);
// }

// events lab 11
// const events = require("../../event-pool");

// events.on("in-transit", pickupOrder);

// function pickupOrder(payload) {
//   const event = "in-transit";
//   console.log("EVENT", { event, time: new Date().toISOString(), payload });
//   console.log(`DRIVER: delivered up ${payload.orderID} `);
//   console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
// }
