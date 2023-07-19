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
const { login, register, createToken } = require("../services/user.services");
const utils_1 = require("../utils/utils");
class UserController {
    static loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield login(req.body);
                const payload = {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    password: user.password,
                };
                const token = yield createToken(user);
                res.cookie("TOKEN", token);
                return res.status(200).send(payload);
            }
            catch (error) {
                console.log(error);
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
                return res.status(400).send(error);
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
}
exports.default = UserController;
