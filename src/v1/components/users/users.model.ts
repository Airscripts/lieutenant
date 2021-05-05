// Importing: Dependencies.
import mongoose from "mongoose";

// Importing: Loaders.
import { catalog } from "../../../../loaders/database.loader";

// Importing: Schemas.
import USER_SCHEMA from "./users.schema";

// Declaring User Model.
class UserModel {
  private _userModel: mongoose.Model<any>;

  constructor() {
    this._setModel();
    this._userModel = this.getModel();
  }

  public getModel(): mongoose.Model<any> {
    return this._userModel;
  }

  private _setModel() {
    this._userModel = catalog.model("User", USER_SCHEMA);
  }
}

// Exporting Model.
export default UserModel;
