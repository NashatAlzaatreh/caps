"use strict";

const faker = require("faker");
const PORT = process.env.PORT || 3004;
const caps = require("socket.io")(PORT);
const driver = require("../src/driver/driverHandler");
const { vendor, delivered } = require("../src/vendor/vendor-handler");

require("../src/fire-event/fire-event");
require("../src/vendor/vendor");
require("../src/driver/driver");
require("../caps");

describe("socket events tests", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = null;
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterAll(() => setTimeout(() => process.exit(), 0));

  let payload = {
    store: faker.company.companyName(),
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()} - ${faker.address.country()}`,
  };

  test("pick up test", () => {
    expect(caps.emit("pickup", payload)).toEqual(true);
  });
  test("in-transit test", () => {
    expect(caps.emit("in-transit", payload)).toEqual(true);
  });

  test("delivered test", () => {
    expect(caps.emit("delivered", payload)).toEqual(true);
  });

  test("driver logger", () => {
    driver(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("vendor logger", () => {
    vendor(payload);
    delivered(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
});

// lab 11 tests

// const faker = require("faker");
// const events = require("../event-pool");
// require("../src/vendor/vendor");
// require("../src/driver/driver");
// require("../caps");

// describe("events tests", () => {
//   let consoleSpy;
//   beforeEach(() => {
//     consoleSpy = jest.spyOn(console, "log").mockImplementation();
//   });

//   afterAll(() => setTimeout(() => process.exit(), 1000));

//   let payload = {
//     store: faker.company.companyName(),
//     orderID: faker.datatype.uuid(),
//     customer: faker.name.findName(),
//     address: `${faker.address.city()} - ${faker.address.country()}`,
//   };

//   test("pick up test", () => {
//     events.emit("pickup", payload);
//     expect(consoleSpy).toHaveBeenCalled();
//     expect(consoleSpy).toHaveBeenCalledWith(
//       `DRIVER: picked up ${payload.orderID}`
//     );
//   });

//   test("delivered test", () => {
//     events.emit("delivered", payload);
//     expect(consoleSpy).toHaveBeenCalled();
//     expect(consoleSpy).toHaveBeenCalledWith(`Thank you, ${payload.customer}`);
//   });

//   test("in-transit test", () => {
//     events.emit("in-transit", payload);
//     expect(consoleSpy).toHaveBeenCalled();
//     expect(consoleSpy).toHaveBeenCalledWith(
//       `DRIVER: delivered up ${payload.orderID} `
//     );
//     expect(consoleSpy).toHaveBeenCalledWith(
//       `VENDOR: Thank you for delivering ${payload.orderID}`
//     );
//   });
// });
