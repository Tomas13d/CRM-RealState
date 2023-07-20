"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRouter = express_1.default.Router();
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const middleware_1 = __importDefault(require("../middleware"));
usersRouter.post("/login", user_controller_1.default.loginUser);
usersRouter.post("/register", user_controller_1.default.registerUser);
usersRouter.get("/me", middleware_1.default, user_controller_1.default.persistence);
exports.default = usersRouter;
