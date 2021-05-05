// Importing: Dependencies.
import express from "express";

// Importing: Routers.
import v1 from "../src/v1/root.router";

// Declaring variables.
let router = express.Router();

//#region Declaring routes.
router.use("/v1", v1);
//#endregion

// Exporting Router.
export default router;
