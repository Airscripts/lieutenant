// Importing: Dependencies.
import express from "express";

// Importing: APIs.
import loginApi from "./login.api";

// Declaring variables.
let loginRouter = express.Router();

//#region Declaring routes.
loginRouter.use("/", loginApi);

// Exporting Router.
export default loginRouter;
