import "firebase/compat/auth";
import { auth, db } from "../firebase";
import { Request, Response, NextFunction } from "express";

const validateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send(console.error("Token does not validate "));
    }

    const decodeToken = await auth.verifyIdToken(token);
    const uid: string = decodeToken.uid;

    const userDocument = db.collection("Users").doc(`${uid}`);
    const loginUser = await userDocument.get();

    const userRecord = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      id: "",
    };

    if (loginUser.exists) {
      const data = loginUser.data();
      if (data) {
        userRecord.firstname = data.firstname;
        userRecord.lastname = data.lastname;
        userRecord.email = data.email;
        userRecord.password = data["password "];
        userRecord.id = uid;
      }
    }

    req.user = userRecord;
    next();
  } catch (error) {
    console.error("Error in the validation token", error);
    res.status(401).send("Error in the validation token");
  }
};

export default validateUserMiddleware;
