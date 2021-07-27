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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMessage = exports.getMessages = void 0;
const Message_1 = __importDefault(require("../models/Message"));
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query: { from, to } } = req;
        const messages = yield Message_1.default.find({
            $or: [
                {
                    from: to,
                    to: from
                },
                {
                    from,
                    to
                }
            ]
        }).sort({
            createdAt: 'asc'
        });
        res.json({
            ok: true,
            messages
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Talk with an admin'
        });
    }
});
exports.getMessages = getMessages;
const saveMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMessage = new Message_1.default(message);
        yield newMessage.save();
        return {
            ok: true,
            message: newMessage
        };
    }
    catch (error) {
        console.log(error);
        return {
            ok: false,
        };
    }
});
exports.saveMessage = saveMessage;
//# sourceMappingURL=messages.js.map