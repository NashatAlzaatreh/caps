"use strict";

function driver(payload) {
  console.log(`pickup ${payload.orderID}`);
  console.log(`delivered ${payload.orderID} `);
}

module.exports = driver;
