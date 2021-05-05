// Importing: Dependencies.
import express from "express";
import bcrypt from "bcrypt";

// Importing: Middlewares.
import isAuthenticated from "../../../../middlewares/isAuthenticated.middleware";

// Importing: Scripts.
import generateNewToken from "../../../../scripts/generateNewToken.script";

// Importing: Models.
import UserModel from "../users/users.model";

// Importing: Interfaces.
import { Request } from "express";
import { AuthRequest } from "../../../../interfaces/global";
import { Response } from "express";
import { NextFunction } from "express";

// Declaring constants.
const HTTP_METHODS = ["GET", "POST"];

// Declaring variables.
let loginRouter: express.Router = express.Router();
let userModel = new UserModel();

// Declaring API.
loginRouter
  .route("/")

  .all()

  .get(
    isAuthenticated(),
    async (req: AuthRequest, res: Response, next: NextFunction) => {
      try {
        res.status(200).json({
          data: req.user,
        });
      } catch (error) {
        res.status(500).json({
          error: {
            message: error.message,
          },
        });
      }
    }
  )

  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      //#region Declaring variables.
      let email: string = req.body.email;
      let password: string = req.body.password;

      let hasEmail = email ? true : false;
      let hasPassword = password ? true : false;

      // console.log(email);
      // console.log(password);
      // console.log(hasEmail);
      // console.log(hasPassword);
      //#endregion

      //#region Validating data.
      // Checking if email has been submitted.
      if (!hasEmail) {
        throw Error("Missing email field.");
      }

      // Checking if password has been submitted.
      if (!hasPassword) {
        throw Error("Missing password field.");
      }
      //#endregion

      //#region Logging in user.
      let user = await userModel
        .getModel()
        .findOne({ email: email })
        .select("+password");

      let isPasswordMatching = false;
      // console.log(user);

      if (!user) {
        throw Error("User not found.");
      }

      // Checking if submitted password is matching with the one on db.
      isPasswordMatching = await bcrypt.compare(password, user.password);
      // console.log(isPasswordMatching);

      if (!isPasswordMatching) {
        throw Error("Wrong password.");
      }
      //#endregion

      //#region Generating authentication token.
      let token = generateNewToken(user._id);
      // console.log(token);
      //#endregion

      // Returning response back to the client.
      res.status(200).json({
        data: {
          token: token,
        },
      });
    } catch (error) {
      res.status(400).json({
        error: {
          message: error.message,
        },
      });
    }
  });

// Exporting API.
export default loginRouter;
