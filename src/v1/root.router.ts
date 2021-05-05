// Importing: Dependencies.
import express from "express";

// Importing: Routers.
import loginRouter from "./components/login/login.router";

// Declaring variables.
let v1 = express.Router();

//#region Declaring routes.
v1.use("/login", loginRouter);
//#endregion

// Exporting Router.
export default v1;