"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("firebase/compat/auth");
const firebase_1 = require("../firebase");
const validateUserMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send(console.error("Token does not validate "));
        }
        const decodeToken = yield firebase_1.auth.verifyIdToken(token);
        const uid = decodeToken.uid;
        const userDocument = firebase_1.db.collection("Users").doc(`${uid}`);
        const loginUser = yield userDocument.get();
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
    }
    catch (error) {
        console.error("Error in the validation token", error);
        res.status(401).send("Error in the validation token");
    }
});
exports.default = validateUserMiddleware;
