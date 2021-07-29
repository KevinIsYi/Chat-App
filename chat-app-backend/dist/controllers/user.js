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
exports.toggleOnlineStatus = exports.loginWithToken = exports.getUserById = exports.getUsers = exports.changeUserStatus = void 0;
const mongoose_1 = require("mongoose");
const jwt_1 = require("../helpers/jwt");
const User_1 = __importDefault(require("../models/User"));
const changeUserStatus = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uid, newStatus } = payload;
        yield User_1.default.findByIdAndUpdate(uid, {
            userStatus: newStatus
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.changeUserStatus = changeUserStatus;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        return res.json({
            ok: true,
            message: 'Success',
            users
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Failed at fetching users. Contact an admin',
        });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { uid } } = req;
        const user = yield User_1.default.findById(uid);
        return res.json({
            ok: true,
            user
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Talk with an admin'
        });
    }
});
exports.getUserById = getUserById;
const loginWithToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { token } } = req;
        const { ok, uid } = jwt_1.getUIDFromToken(token);
        if (!ok || !mongoose_1.isValidObjectId(uid)) {
            return res.status(400).json({
                ok: false,
                message: 'Token is not valid'
            });
        }
        const user = yield User_1.default.findById(uid);
        if (user) {
            return res.json({
                ok: true,
                user
            });
        }
        return res.status(400).json({
            ok: false,
            message: 'Token is not valid'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Talk with an admin'
        });
    }
});
exports.loginWithToken = loginWithToken;
const toggleOnlineStatus = (uid, newStatus) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_1.default.findByIdAndUpdate(uid, {
            online: newStatus
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.toggleOnlineStatus = toggleOnlineStatus;
//# sourceMappingURL=user.js.map