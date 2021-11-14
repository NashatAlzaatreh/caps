"use strict";
// we are exporting ONE instance of events
// this instance will be shared by all of our modules
// this is called Singleton (design pattern)
// if were to think of how the singleton works, think of it as a global instance that all the modules can see and use.

const Events = require("events");
const events = new Events();

module.exports = events;
