"use strict";
const PORT = process.env.PORT || 3007;
const faker = require("faker");

// we created the "/" namespace or we can say the home route
const caps = require("socket.io")(PORT);

// keyed Q
const talabatQueue = {
  orders: {},
};
const widgetsQueue = {
  orders: {},
};
const flowersQueue = {
  orders: {},
};

// namespace
const talabat = caps.of("/talabat");

talabat.on("connection", (socket) => {
  console.log("CONNECTED to talabat-server", socket.id);

  socket.on("pickup", (payload) => {
    console.log("vendor is adding a new order ....", payload);

    let orderID = faker.datatype.uuid();

    // 2 add the order to the Msg Q
    talabatQueue.orders[orderID] = payload;

    if (payload.store === "acme-widgets") {
      widgetsQueue.orders[orderID] = payload;
    }
    if (payload.store === "1-800-flowers") {
      flowersQueue.orders[orderID] = payload;
    }
    // msgQueue.orders = payload;
    // console.log("This is a -acme-widgets- orders list >>", widgetsQueue.orders);
    // console.log("This is a -1-800-flowers- orders list>>", flowersQueue.orders);

    // 3 send to the vendor that the MsgQ added ur order to the Q
    socket.emit("confirm-pickup", payload);

    // 4 send the order to the driver
    talabat.emit("in-transit", { orderID: orderID, payload: talabatQueue.orders[orderID] });

    console.log("-----------------------------------------------------------");
  });

  // 6 >> delete the order from the Q
  socket.on("received", (payload) => {
    console.log("received from the driver and remove it from the Q ...");
    talabat.emit("delivered", payload);
    delete talabatQueue.orders[payload.orderID];
    console.log("after deleting the order from Msg Q >>", talabatQueue);
  });

  socket.on("get_all", () => {
    console.log("get all the orders for the driver");
    Object.keys(talabatQueue.orders).forEach((orderID) => {
      socket.emit("in-transit", {
        orderID: orderID,
        payload: talabatQueue.orders[orderID],
        clientId: socket.id,
      });
    });
  });

  // ---------------------------------------------flowers
  // 6 >> delete the order from the Q
  //   socket.on("received", (payload) => {
  //     console.log("received from the driver and remove it from the Q ...");
  //     talabat.emit("delivered", {
  //       orderID: payload.orderID,
  //       payload: flowersQueue.orders[payload.orderID],
  //       clientId: socket.id,
  //     });
  //     delete flowersQueue.orders[payload.orderID];
  //     console.log("after deleting the order from Msg Q >>", flowersQueue);
  //   });

  //   socket.on("get_all", () => {
  //     console.log("get all the orders for the driver");
  //     Object.keys(flowersQueue.orders).forEach((orderID) => {
  //       socket.emit("in-transit", {
  //         orderID: orderID,
  //         payload: flowersQueue.orders[orderID],
  //         clientId: socket.id,
  //       });
  //     });
  //   });
});

// lab 12
// Global Hub ('/') -- all connection and all events goes here and every other client
// caps.on("connection", (socket) => {
//   console.log("CONNECTED", socket.id);

//   socket.on("caps", (payload) => {
//     payload = {
//       store: payload.store,
//       orderID: payload.orderID,
//       customer: payload.customer,
//       address: payload.address,
//     };
//     let event;
//     event = "pickup";
//     console.log("EVENT", { event, time: new Date().toISOString(), payload });
//     caps.emit("pickup", payload);

//     event = "in-transit";
//     console.log("EVENT", { event, time: new Date().toISOString(), payload });
//     caps.emit("in-transit", payload);

//     event = "delivered";
//     console.log("EVENT", { event, time: new Date().toISOString(), payload });
//     caps.emit("delivered", payload);
//     console.log("---------------------------------------");
//   });
// });

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
