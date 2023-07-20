import "firebase/compat/auth";
import { auth } from "../firebase";
import { Request, Response, NextFunction } from "express";
const { getUserByUID } = require("../services/user.services");

const validateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.TOKEN;
    if (!token) {
      return res.status(401).send(console.error("Token does not validate "));
    }

    const decodeToken = await auth.verifyIdToken(token);
    const uid: string = decodeToken.uid;
    const userRecord = await getUserByUID(uid);

    req.user = userRecord;

    next();
  } catch (error) {
    console.error("Error in the validation token", error);
    res.status(401).send("Error in the validation token");
  }
};

export default validateUserMiddleware;
