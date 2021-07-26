"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../database/config"));
const Sockets_1 = require("./Sockets");
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.server = http_1.createServer(this.app);
        config_1.default();
        new Sockets_1.Sockets(this.server);
    }
    middlewares() {
        this.app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', '..', 'public')));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use('/auth', require('../router/auth'));
        this.app.use('/user', require('../router/user'));
        this.app.use('/messages', require('../router/messages'));
    }
    configureSockets() {
    }
    listen() {
        this.middlewares();
        this.server.listen(this.port, () => {
            console.log(`Listening on Port: ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map