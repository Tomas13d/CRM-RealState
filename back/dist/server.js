"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const routes_1 = __importDefault(require("./api/routes"));
const PORT = process.env.port || 3001;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
}));
app.use("/api", routes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
