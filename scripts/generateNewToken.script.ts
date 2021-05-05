// Importing: Dependencies.
import jwt from "jsonwebtoken";

// Importing: Configs.
import configs from "../.configs";

// Declaring token generation function.
function generateNewToken(identifier: string): string {
  return jwt.sign({ identifier: identifier }, configs.application.token.secret, {
    expiresIn: configs.application.token.expirationTime,
  });
}

// Exporting Script.
export default generateNewToken;
