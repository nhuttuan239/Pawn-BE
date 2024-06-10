const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ptypeSchema = Schema(
  {
    name: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Ptype = mongoose.model("Ptype", ptypeSchema);
module.exports = Ptype;
