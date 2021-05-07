// Importing: Dependencies.
import mongoose from "mongoose";

// Importing: Loaders.
import { connectTo } from "../../../../loaders/database.loader";

// Importing: Schemas.
import ITEM_SCHEMA from "./items.schema";

// Declaring Item Model.
class ItemModel {
  private _itemModel: mongoose.Model<any>;

  constructor(database: string) {
    console.log("Instance")
    this._setModel(database);
    this._itemModel = this.getModel();
  }

  public getModel(): mongoose.Model<any> {
    return this._itemModel;
  }

  private _setModel(database: string) {
    this._itemModel = connectTo(database).model("Item", ITEM_SCHEMA);
  }
}

// Exporting Model.
export default ItemModel;
