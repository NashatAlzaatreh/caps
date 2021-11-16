// "use strict";
// // we are exporting ONE instance of events
// // this instance will be shared by all of our modules
// // this is called Singleton (design pattern)
// // if were to think of how the singleton works, think of it as a global instance that all the modules can see and use.

// const Events = require("events");
// const events = new Events();

// module.exports = events;
// -----------------------
// payload.forEach((store) => {
//   if (store.store === "acme-widgets") {
//     return (msgQueue.orders = store);
//   }
//   if (store.store === "1-800-flowers") {
//     return (msgQueue2.orders = store);
//   }
// });

// if (payload.store === "acme-widgets") {
//   return (msgQueue.orders = payload);
// }
// if (payload.store === "1-800-flowers") {
//   return (msgQueue2.orders = payload);
// }

// const msgQueue = {
//   orders: {},
// };

// const msgQueue2 = {
//   orders: {},
// };
