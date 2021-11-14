"use strict";

const faker = require("faker");
const events = require("../event-pool");
require("../src/vendor/vendor");
require("../src/driver/driver");
require("../global");

describe("events tests", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterAll(() => setTimeout(() => process.exit(), 1000));

  let payload = {
    store: faker.company.companyName(),
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()} - ${faker.address.country()}`,
  };

  test("pick up test", () => {
    events.emit("pickup", payload);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(
      `DRIVER: picked up ${payload.orderID}`
    );
  });

  test("delivered test", () => {
    events.emit("delivered", payload);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(`Thank you, ${payload.customer}`);
  });

  test("in-transit test", () => {
    events.emit("in-transit", payload);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(
      `DRIVER: delivered up ${payload.orderID} `
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      `VENDOR: Thank you for delivering ${payload.orderID}`
    );
  });
});
