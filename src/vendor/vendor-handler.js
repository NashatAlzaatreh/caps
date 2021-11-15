"use strict";

function vendor(payload) {
  console.log(`Thank you for delivering ${payload.orderID}`);
}
function delivered(payload) {
  console.log(`Thank you for delivering ${payload.orderID}`);
}

module.exports = { vendor, delivered };
