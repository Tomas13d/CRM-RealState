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
const { login, register, getUserID } = require("../services/user.services");
const utils_1 = require("../utils/utils");
const user_services_1 = require("../services/user.services");
class UserController {
    //login modificado
    static loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, idToken, userId } = yield login(req.body);
                const payload = {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    password: data.password,
                    type: data.type,
                    id: userId,
                };
                res.cookie("TOKEN", idToken);
                return res.status(200).send(payload);
            }
            catch (error) {
                res.status(500).json({ message: "Error en el inicio de sesión", error });
            }
        });
    }
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if ((0, utils_1.isValidEmail)(email) && (0, utils_1.isValidPassword)(password)) {
                    const user = yield register(req.body);
                    return res.status(201).send(user);
                }
                else {
                    throw new Error("Invalid email or password");
                }
            }
            catch (error) {
                return res.status(400).json({ error });
            }
        });
    }
    static persistence(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.send(req.user);
            }
            catch (error) {
                return res.status(404).send(error);
            }
        });
    }
    static getUserForID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield getUserID(id);
                return res.status(201).send(response);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    static getAllUsers(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield (0, user_services_1.getAllUsers)();
                return res.status(200).send(users);
            }
            catch (error) {
                res.status(400).json({ msg: "Error retrieving users", error });
            }
        });
    }
}
exports.default = UserController;
