// Importing: Dependencies.
import jwt from "jsonwebtoken";

// Importing: Configs.
import configs from "../.configs";

// Importing: Interfaces.
import { AuthRequest } from "../interfaces/global";
import { Response } from "express";
import { NextFunction } from "express";

// Declaring isAuthenticated middleware.
function isAuthenticated() {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      //#region Declaring variables.
      let token = req.headers["authorization"] || "";
      let hasToken = token ? true : false;

      // console.log(token);
      // console.log(hasToken);
      //#endregion

      // Checking if token has been submitted.
      if (!hasToken) {
        throw Error("Missing authorization token.");
      }

      //#region Validating token.
      jwt.verify(
        token,
        configs.application.token.secret as string,
        (error, user) => {
          // console.log(error);
          // console.log(user);

          if (error) {
            throw Error("You're not authorized to access the resource.");
          }

          req.user = user;
        }
      );
      //#endregion

      // Proceeding with the request.
      next();
    } catch (error) {
      res.status(401).json({
        error: {
          message: error.message,
        },
      });
    }
  };
}

// Exporting middleware.
export default isAuthenticated;
