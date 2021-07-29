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
exports.Sockets = void 0;
const socket_io_1 = require("socket.io");
const jwt_1 = require("../helpers/jwt");
const messages_1 = require("../controllers/messages");
const mongoose_1 = require("mongoose");
const user_1 = require("../controllers/user");
class Sockets {
    constructor(server) {
        this.io = new socket_io_1.Server(server);
        this.socketEvents();
    }
    socketEvents() {
        this.io.on('connection', (socket) => __awaiter(this, void 0, void 0, function* () {
            const { ok, uid } = jwt_1.getUIDFromToken(socket.handshake.query['x-token']);
            if (!ok || !mongoose_1.isValidObjectId(uid)) {
                return socket.disconnect();
            }
            socket.join(uid);
            yield user_1.toggleOnlineStatus(uid, true);
            this.io.emit('user-change-online', {
                uid,
                online: true
            });
            socket.on('one-to-one-message', (payload) => __awaiter(this, void 0, void 0, function* () {
                const { ok, message } = yield messages_1.saveMessage(payload);
                if (ok) {
                    this.io.to(payload.to).emit('one-to-one-message', message);
                    this.io.to(payload.from).emit('one-to-one-message', message);
                }
            }));
            socket.on('disconnect', () => __awaiter(this, void 0, void 0, function* () {
                user_1.toggleOnlineStatus(uid, false);
                this.io.emit('user-change-online', {
                    uid,
                    online: false
                });
            }));
        }));
    }
}
exports.Sockets = Sockets;
//# sourceMappingURL=Sockets.js.map