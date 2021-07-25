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
exports.logIn = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const jwt_1 = require("../helpers/jwt");
const removeSpaces_1 = require("../helpers/removeSpaces");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body: { userName, password } } = req;
        const userExist = yield User_1.default.findOne({ userName });
        if (userExist) {
            return res.status(400).json({
                ok: false,
                message: 'User already exist'
            });
        }
        const user = new User_1.default({ userName, password });
        const salt = bcryptjs_1.default.genSaltSync();
        user.password = bcryptjs_1.default.hashSync(password, salt);
        const token = yield jwt_1.generateJWT(user.uid);
        yield user.save();
        return res.status(201).json({
            ok: true,
            message: 'User has been created',
            data: {
                user,
                token
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred. Talk with the Admin',
            data: {}
        });
    }
});
exports.createUser = createUser;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body: { userName: user, password } } = req;
        const userName = removeSpaces_1.removeSpaces(user);
        const userDB = yield User_1.default.findOne({ userName });
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                message: 'Email or User Name is not correct',
                data: {}
            });
        }
        const isValidPassword = bcryptjs_1.default.compareSync(password, userDB.password);
        if (!isValidPassword) {
            return res.status(404).json({
                ok: false,
                message: 'Email or User Name is not correct',
                data: {}
            });
        }
        const token = yield jwt_1.generateJWT(userDB.id);
        return res.json({
            ok: true,
            message: 'Ok',
            data: {
                user: userDB,
                token
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'An error has occurred, talk with the admin',
            data: {}
        });
    }
});
exports.logIn = logIn;
//# sourceMappingURL=auth.js.map