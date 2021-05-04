// Importing: Dependencies.
import mongoose from "mongoose";

// Declaring Item Schema.
const ITEM_SCHEMA = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  quantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
  },
});

// Exporting Schema.
export default ITEM_SCHEMA;
