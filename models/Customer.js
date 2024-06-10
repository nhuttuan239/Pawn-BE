const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = Schema(
  {
    name: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
