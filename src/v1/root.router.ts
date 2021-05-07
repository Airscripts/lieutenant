// Importing: Dependencies.
import express from "express";

// Importing: Routers.
import loginRouter from "./components/login/login.router";
import itemsRouter from "./components/items/items.router";

// Declaring variables.
let v1 = express.Router();

//#region Declaring routes.
v1.use("/login", loginRouter);
v1.use("/items", itemsRouter);
//#endregion

// Exporting Router.
export default v1;