// Importing: Dependencies.
import express from "express";

// Importing: Loaders.
import router from "./router.loader";

// Importing: Middlewares.
import pingServer from "../middlewares/pingServer.middleware";

// Importing: Configs.
import configs from "../.configs";

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
    application.use(express.json());

    application.get("/ping", pingServer());
    application.use("/api", router);

    application.listen(configs.application.port);

    console.info(
      `Lieutenant is up and running on port: ${configs.application.port}`
    );

    return application;
  }
}

// Exporting Loader.
export default Application;
