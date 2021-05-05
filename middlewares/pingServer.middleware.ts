// Importing: Interfaces.
import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

// Declaring Ping Server middleware.
function pingServer() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).send("pong");
    } catch (error) {
      res.status(500).json({
        error: {
          message: error.message,
        },
      });
    }
  };
}

// Exporting middleware.
export default pingServer;
