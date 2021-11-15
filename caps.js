"use strict";

const PORT = process.env.PORT || 3000;

// we created the "/" namespace or we can say the home route
const caps = require("socket.io")(PORT);

// Global Hub ('/') -- all connection and all events goes here and every other client
caps.on("connection", (socket) => {
  console.log("CONNECTED", socket.id);

  socket.on("caps", (payload) => {
    payload = {
      store: payload.store,
      orderID: payload.orderID,
      customer: payload.customer,
      address: payload.address,
    };
    let event;
    event = "pickup";
    console.log("EVENT", { event, time: new Date().toISOString(), payload });
    caps.emit("pickup", payload);

    event = "in-transit";
    console.log("EVENT", { event, time: new Date().toISOString(), payload });
    caps.emit("in-transit", payload);

    event = "delivered";
    console.log("EVENT", { event, time: new Date().toISOString(), payload });
    caps.emit("delivered", payload);
    console.log("---------------------------------------");
  });
});

// --------------------------------------
// using events lab11

// const events = require("./event-pool");

// require("./src/vendor/vendor");
// require("./src/driver/driver");

// events.on("caps", (payload) => {
//   payload = {
//     store: payload.store,
//     orderID: payload.orderID,
//     customer: payload.customer,
//     address: payload.address,
//   };
//   events.emit("pickup", payload);

//   events.emit("in-transit", payload);

//   events.emit("delivered", payload);
// });
