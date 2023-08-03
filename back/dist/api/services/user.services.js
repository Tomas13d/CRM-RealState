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
exports.increaseAgentAcquisitionNum = exports.getAllUsers = exports.getUserID = exports.register = exports.login = void 0;
require("firebase/compat/auth");
const firebase_1 = require("../firebase");
const login = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, idToken } = user;
    const userCredential = yield firebase_1.auth.getUserByEmail(email);
    const userId = userCredential.uid;
    const data = yield (0, exports.getUserID)(userId);
    return { idToken, data, userId };
});
exports.login = login;
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
const getUserID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRef = firebase_1.db.collection("Users").doc(id);
    const userSnapshot = yield userRef.get();
    let userData;
    userSnapshot.exists
        ? (userData = userSnapshot.data())
        : console.error("El usuario con el id proporcionado no existe.");
    return userData;
});
exports.getUserID = getUserID;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const usersSnapshot = yield firebase_1.db.collection("Users").get();
    const users = usersSnapshot.docs.map((doc) => {
        return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
    });
    return users;
});
exports.getAllUsers = getAllUsers;
const increaseAgentAcquisitionNum = (agent_id) => __awaiter(void 0, void 0, void 0, function* () {
    const agentReference = firebase_1.db.collection("Users").doc(agent_id);
    const agent = yield agentReference.get();
    const { acquisition_number } = agent.data();
    const response = yield agentReference.update({
        acquisition_number: acquisition_number + 1,
    });
    return response;
});
exports.increaseAgentAcquisitionNum = increaseAgentAcquisitionNum;
