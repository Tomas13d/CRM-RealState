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
const { getUserID } = require("../services/user.services");
const validateUserMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.TOKEN;
        if (!token) {
            return res.status(401).send(console.error("Token does not validate "));
        }
        const decodeToken = yield firebase_1.auth.verifyIdToken(token);
        const uid = decodeToken.uid;
        const userRecord = yield getUserID(uid);
        req.user = Object.assign(Object.assign({}, userRecord), { id: uid });
        next();
    }
    catch (error) {
        console.error("Error in the validation token", error);
        res.status(401).send("Error in the validation token");
    }
});
exports.default = validateUserMiddleware;
