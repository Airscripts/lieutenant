// Importing: Dependencies.
import jwt from "jsonwebtoken";

// Importing: Configs.
import configs from "../.configs";

// Declaring token payload interface.
interface TokenPayload {
  identifier: string;
  database: string;
  username: string;
  email: string;
}

// Declaring token generation function.
function generateNewToken(payload: TokenPayload): string {
  return jwt.sign(payload, configs.application.token.secret, {
    expiresIn: configs.application.token.expirationTime,
  });
}

// Exporting Script.
export default generateNewToken;
