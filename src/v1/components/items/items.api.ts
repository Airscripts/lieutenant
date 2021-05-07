// Importing: Dependencies.
import express from "express";

// Importing: Middlewares.
import isAuthenticated from "../../../../middlewares/isAuthenticated.middleware";

// Importing: Models.
import ItemModel from "../items/items.model";

// Importing: Interfaces.
import { AuthRequest } from "../../../../interfaces/global";
import { Response } from "express";
import { NextFunction } from "express";

// Declaring constants.
const HTTP_METHODS = ["GET"];

// Declaring variables.
let itemsRouter = express.Router();

// Declaring API.
itemsRouter
  .route("/")

  .get(
    isAuthenticated(),
    async (req: AuthRequest, res: Response, next: NextFunction) => {
      try {
        // Declaring variables.
        let itemModel = new ItemModel(req.user.database).getModel();
        let item = await itemModel.findOne({});

        // Returning data back to the client.
        res.status(200).json({
          data: {
            user: req.user,
            item: item,
          },
        });
      } catch (error) {
        res.status(500).json({
          error: {
            message: error.message,
          },
        });
      }
    }
  );

// Exporting API.
export default itemsRouter;
