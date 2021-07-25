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
exports.changeUserStatus = void 0;
const User_1 = __importDefault(require("../models/User"));
const changeUserStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body: { data: { uid, userStatus } } } = req;
        if (!userStatus) {
            return res.status(400).json({
                ok: false,
                message: 'New User Status was not provided as needed'
            });
        }
        const userDB = yield User_1.default.findByIdAndUpdate(uid, { userStatus }, { useFindAndModify: false });
        if (userDB) {
            return res.json({
                ok: true,
                message: 'User status has beed updated'
            });
        }
        return res.status(404).json({
            ok: false,
            message: 'User ID not found'
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Contact an admin'
        });
    }
});
exports.changeUserStatus = changeUserStatus;
//# sourceMappingURL=user.js.map