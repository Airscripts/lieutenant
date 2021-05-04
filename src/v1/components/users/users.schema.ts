// Importing: Dependencies.
import mongoose from "mongoose";

// Declaring User Schema.
const USER_SCHEMA = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },

  surname: {
    type: String,
    trim: true,
  },

  username: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
    trim: true,
  },

  database: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

// Exporting Schema.
export default USER_SCHEMA;
