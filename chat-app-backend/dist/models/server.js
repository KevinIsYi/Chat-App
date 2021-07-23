"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../database/config"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.server = http_1.default.createServer(this.app);
        config_1.default();
    }
    middlewares() {
        this.app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', '..', 'public')));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    listen() {
        this.middlewares();
        this.server.listen(this.port, () => {
            console.log(`Listening on Port: ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map