// Importing: Modules.
import express from "express";

// Importing: Routers.

// Importing: Middlewares.
import pingServer from "../middlewares/pingServer.middleware";

// Importing: Configs.

// Declaring Application Loader.
class Application {
  private _application: express.Application;

  constructor() {
    const application = express();
    this._application = this._setApplication(application);
  }

  public getApplication() {
    return this._application;
  }

  private _setApplication(
    application: express.Application
  ): express.Application {
    application.get("/ping", pingServer());
    application.listen(8080);
    return application;
  }
}

// Exporting Loader.
export default Application;
