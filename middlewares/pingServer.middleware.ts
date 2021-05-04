// Importing: Interfaces.
import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

// Declaring Ping Server middleware.
function pingServer() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({
        data: {
          response: "Pong",
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({  
        errors: [
          {
            error: error,
            status: 500,
            description: "Internal Server Error.",
          },
        ],
      });
    }
  };
}

// Exporting middleware.
export default pingServer;
