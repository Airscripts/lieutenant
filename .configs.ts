// Importing: Dependencies.
import dotenv from "dotenv";

// Parsing .env content to process.env.
dotenv.config();

// Declaring global configs.
export default {
  application: {
    port: process.env.PORT || process.env.SERVER_PORT || 5000,
    environment: process.env.NODE_ENV || "development",
  },

  database: {
    url: "mongodb://mongo_black:27017,mongo_grey:27018,mongo_white:27019/"
  },
};
