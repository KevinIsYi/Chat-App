"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
const config_1 = __importDefault(require("./database/config"));
dotenv_1.default.config();
const server = new server_1.default();
server.listen();
config_1.default();
//# sourceMappingURL=app.js.map