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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var material_1 = require("@mui/material");
var axios_1 = require("axios");
var link_1 = require("next/link");
var react_1 = require("react");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var Favorite_1 = require("@mui/icons-material/Favorite");
var ProfilePart = function (_a) {
    var id = _a.id;
    var _b = react_1.useState(), profile = _b[0], setProfile = _b[1];
    var _c = react_1.useState([]), messages = _c[0], setMessages = _c[1];
    var getProfile = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("user/" + id).then(function (res) {
                        setProfile(res.data.data);
                        // if (res.data.data?.messages != undefined)
                        // setMessages(res.data.data);
                        console.log(res.data.data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var like = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("message/" + id + "/like").then(function (res) {
                        setMessages(function (prev) {
                            return prev === null || prev === void 0 ? void 0 : prev.map(function (el) {
                                return el.uuid == id
                                    ? Object.assign(el, {
                                        like_conunt: el.like_count++,
                                        like_status: true
                                    })
                                    : el;
                            });
                        });
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var deleteLike = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"]["delete"]("message/" + id + "/like").then(function (res) {
                        setMessages(function (prev) {
                            return prev.map(function (el) {
                                return el.uuid == id
                                    ? Object.assign(el, {
                                        like_conunt: el.like_count--,
                                        like_status: false
                                    })
                                    : el;
                            });
                        });
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (id != null && profile == null) {
            getProfile();
        }
    }, [getProfile, id, profile]);
    return (React.createElement("div", { style: {
            width: "100%",
            minHeight: "100vh",
            borderLeft: "1px solid #ccc",
            borderRight: "1px solid #ccc"
        } },
        React.createElement("div", { style: { margin: 20, borderBottom: "1px solid #ccc", minHeight: "25%" } },
            React.createElement("div", null, profile === null || profile === void 0 ? void 0 : profile.name),
            React.createElement("div", null, profile === null || profile === void 0 ? void 0 : profile.prifile_message)),
        React.createElement("div", null, profile === null || profile === void 0 ? void 0 : profile.messages.map(function (message) { return (React.createElement("div", { key: message.uuid, style: {
                margin: 20,
                padding: "0 0 60px 0",
                minHeight: "10%",
                borderBottom: "1px #ccc solid",
                position: "relative"
            } },
            React.createElement(link_1["default"], { href: "/profile/" + message.user_uuid },
                React.createElement("div", { style: { padding: 10 } }, profile.name)),
            React.createElement("div", { style: { wordBreak: "break-all" } }, message.message),
            React.createElement("div", { style: { position: "absolute", bottom: 10, right: 20 } },
                message.like_status ? (React.createElement(material_1.IconButton, { onClick: function () { return deleteLike(message.uuid); } },
                    React.createElement(Favorite_1["default"], null))) : (React.createElement(material_1.IconButton, { onClick: function () { return like(message.uuid); } },
                    React.createElement(FavoriteBorder_1["default"], null))),
                message.like_count))); }))));
};
exports["default"] = ProfilePart;
