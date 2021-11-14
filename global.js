"use strict";

const events = require("./event-pool");

require("./src/vendor/vendor");
require("./src/driver/driver");

events.on("global", (payload) => {
  payload = {
    store: payload.store,
    orderID: payload.orderID,
    customer: payload.customer,
    address: payload.address,
  };
  events.emit("pickup", payload);

  events.emit("in-transit", payload);

  events.emit("delivered", payload);
});
