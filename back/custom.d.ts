import { Request } from "express";
import { UserRecord } from "firebase-admin";

declare module "express-serve-static-core" {
  interface Request {
    user?: UserRecord;
  }
}
