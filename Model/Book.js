const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Book = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    donatedbyName: {
      type: String,
    },
    note: {
      type: String,
    },
    borrowedStatus: {
      type: Number,
    },
    borrowedbyName: {
      type: String,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", Book);
