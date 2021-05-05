// Importing: Dependencies.
import dotenv from "dotenv";

// Parsing .env content to process.env.
dotenv.config();

// Declaring global configs.
export default {
  application: {
    port: process.env.PORT || process.env.SERVER_PORT || 5000,
    environment: process.env.NODE_ENV || "development",
    token: {
      secret: process.env.TOKEN_SECRET || "lieutenant",
      expirationTime: "3600000",
    },
  },

  database: {
    url: "mongodb://mongo_black:27017,mongo_grey:27018,mongo_white:27019/",
    catalog: "catalog",
  },
};
