"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_routes_1 = __importDefault(require("./user.routes"));
const client_routes_1 = __importDefault(require("./client.routes"));
const acquisition_routes_1 = __importDefault(require("./acquisition.routes"));
const rent_routes_1 = __importDefault(require("./rent.routes"));
const estate_routes_1 = __importDefault(require("./estate.routes"));
router.use("/users", user_routes_1.default);
router.use("/clients", client_routes_1.default);
router.use("/acquisitions", acquisition_routes_1.default);
router.use("/rents", rent_routes_1.default);
router.use("/estates", estate_routes_1.default);
exports.default = router;
