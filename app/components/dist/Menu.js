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
var MenuList_1 = require("@mui/material/MenuList");
var material_1 = require("@mui/material");
var Home_1 = require("@mui/icons-material/Home");
var Person_1 = require("@mui/icons-material/Person");
var link_1 = require("next/link");
var react_1 = require("react");
var axios_1 = require("axios");
var MessageCreate_1 = require("./MessageCreate");
var Menu = function () {
    var userId = "";
    var getUserId = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("/user/me").then(function (res) {
                        userId = res.data.data.uuid;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [userId]);
    react_1.useEffect(function () {
        getUserId();
    }, [getUserId]);
    return (React.createElement("div", { style: { position: "relative", marginTop: 50 } },
        React.createElement(MenuList_1["default"], { sx: { fontSize: "2rem" } },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(material_1.MenuItem, null,
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(Home_1["default"], null)),
                    React.createElement(material_1.ListItemText, null, "\u30DB\u30FC\u30E0"))),
            React.createElement(link_1["default"], { href: "" + (userId != "" ? "/profile/" + userId : "/") },
                React.createElement(material_1.MenuItem, null,
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(Person_1["default"], null)),
                    React.createElement(material_1.ListItemText, null, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB")))),
        React.createElement("div", { style: {
                position: "absolute",
                bottom: 50,
                width: "100%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center"
            } },
            React.createElement(MessageCreate_1["default"], null))));
};
exports["default"] = Menu;
