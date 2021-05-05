// Importing: Interfaces.
import { Request } from "express";

interface AuthRequest extends Request {
  user?: any;
}
