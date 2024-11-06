const { model } = require('mongoose');
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingModel = model("holding", HoldingsSchema);

module.exports = HoldingModel; 
