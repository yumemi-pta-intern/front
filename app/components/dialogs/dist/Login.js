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
var react_1 = require("react");
var Signup_1 = require("./Signup");
var Login = function (_a) {
    var open = _a.open, handleClose = _a.handleClose, cookieCheck = _a.cookieCheck;
    var _b = react_1.useState(false), isSignupOpen = _b[0], setIsSignupOpen = _b[1];
    var nameRef = react_1.useRef(null);
    var passwordRef = react_1.useRef(null);
    var handleSignupOpen = function () {
        setIsSignupOpen(true);
    };
    var handleCloseIsSignupOpen = function () {
        setIsSignupOpen(false);
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    e.preventDefault();
                    console.log((_a = nameRef.current) === null || _a === void 0 ? void 0 : _a.value);
                    return [4 /*yield*/, axios_1["default"]
                            .post("login", {
                            name: (_b = nameRef.current) === null || _b === void 0 ? void 0 : _b.value,
                            password: (_c = passwordRef.current) === null || _c === void 0 ? void 0 : _c.value
                        }, { withCredentials: true })
                            .then(function (res) {
                            if (res.data.status == "OK.") {
                                cookieCheck();
                            }
                            handleClose();
                        })];
                case 1:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Dialog, { open: open },
            React.createElement(material_1.DialogTitle, null, "\u30ED\u30B0\u30A4\u30F3"),
            React.createElement(material_1.DialogContent, null,
                React.createElement(material_1.DialogContentText, null),
                React.createElement(material_1.TextField, { autoFocus: true, margin: "dense", id: "name", label: "Name", type: "email", fullWidth: true, variant: "standard", inputRef: nameRef }),
                React.createElement(material_1.TextField, { autoFocus: true, margin: "dense", id: "password", label: "Password", type: "password", fullWidth: true, variant: "standard", inputRef: passwordRef })),
            React.createElement(material_1.DialogActions, null,
                React.createElement(material_1.Button, { onClick: handleSignupOpen }, "\u4F1A\u54E1\u767B\u9332"),
                React.createElement(material_1.Button, { onClick: handleSubmit, variant: "contained" }, "\u30ED\u30B0\u30A4\u30F3"))),
        React.createElement(Signup_1["default"], { open: isSignupOpen, handleClose: handleCloseIsSignupOpen })));
};
exports["default"] = Login;
