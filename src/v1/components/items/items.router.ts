// Importing: Dependencies.
import express from "express";

// Importing: APIs.
import itemsApi from "./items.api";

// Declaring variables.
let itemsRouter = express.Router();

//#region Declaring routes.
itemsRouter.use("/", itemsApi);
//#endregion

// Exporting Router.
export default itemsRouter;
