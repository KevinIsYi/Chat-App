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
class Sockets {
    constructor(server) {
        this.io = new socket_io_1.Server(server);
        this.socketEvents();
    }
    socketEvents() {
        console.log('Sockets are live');
        this.io.on('connection', (socket) => __awaiter(this, void 0, void 0, function* () {
            const { ok, uid } = jwt_1.getUIDFromToken(socket.handshake.query['x-token']);
            console.log("Se conecto el: ", uid);
            if (!ok) {
                return socket.disconnect();
            }
            socket.on('one-to-one-message', (payload) => __awaiter(this, void 0, void 0, function* () {
                console.log(payload);
                // const newMessage = await saveMessage(payload);
                // if (newMessage) {
                //     this.io.to(payload.to).emit('one-to-one-message', newMessage);
                //     this.io.to(payload.from).emit('one-to-one-message', newMessage);
                // }
            }));
            socket.on('disconnect', () => __awaiter(this, void 0, void 0, function* () {
                console.log("Se ha desconectado");
                // await disconnectUser(uid);
                // this.io.emit('list-users', await getUsers());
            }));
        }));
    }
}
exports.Sockets = Sockets;
//# sourceMappingURL=Sockets.js.map