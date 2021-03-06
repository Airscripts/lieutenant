// Importing: Dependencies.
import mongoose from "mongoose";

// Importing: Configs.
import configs from "../.configs";

// Declaring Database Loader.
class Database {
  private _firstLane: mongoose.Connection;

  constructor() {
    this._setFirstLane();
    this._firstLane = this.getFirstLane();
  }

  public getFirstLane(): mongoose.Connection {
    return this._firstLane;
  }

  private _setFirstLane() {
    this._firstLane = mongoose.createConnection(configs.database.url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      poolSize: 250,
    });
  }
}

// Declaring Database Object.
let database = new Database();

// Declaring Catalog Connection.
let catalog = database
  .getFirstLane()
  .useDb(configs.database.catalog, { useCache: true });

// Declaring Tenant Connection Function.
function connectTo(tenant: string) {
  return database.getFirstLane().useDb(tenant, { useCache: true });
}

// Exporting Loader.
export default Database;
export { database, catalog, connectTo };
