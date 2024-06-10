const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contractSchema = Schema(
  {
    name: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Contract = mongoose.model("Contract", contractSchema);
module.exports = Contract;
