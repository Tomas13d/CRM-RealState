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
exports.register = exports.createToken = exports.login = void 0;
require("firebase/compat/auth");
const firebase_1 = require("../firebase");
const login = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = user;
    const userCredential = yield firebase_1.auth.getUserByEmail(email);
    const userId = userCredential.uid;
    const userDocument = firebase_1.db.collection("Users").doc(`${userId}`);
    const loginUser = yield userDocument.get();
    const userData = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        id: "",
    };
    if (loginUser.exists) {
        const data = loginUser.data();
        if (data) {
            userData.firstname = data.firstname;
            userData.lastname = data.lastname;
            userData.email = data.email;
            userData.password = data["password "];
            userData.id = userId;
        }
    }
    return userData;
});
exports.login = login;
const createToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield firebase_1.auth.createCustomToken(user.id, user);
    return token;
});
exports.createToken = createToken;
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, firstname, lastname, type } = user;
    const regiterUser = yield firebase_1.auth.createUser({
        email,
        password,
    });
    const userRef = firebase_1.db.collection("Users");
    const newUserDoc = userRef.doc(regiterUser.uid);
    const newUser = yield newUserDoc.set({
        firstname,
        lastname,
        email,
        type,
    });
    return newUser;
});
exports.register = register;
