const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interestSchema = Schema(
  {
    name: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Interest = mongoose.model("Interest", interestSchema);
module.exports = Interest;
