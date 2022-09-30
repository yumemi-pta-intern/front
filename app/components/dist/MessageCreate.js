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
var Add_1 = require("@mui/icons-material/Add");
var react_1 = require("react");
var axios_1 = require("axios");
var MessageCreate = function () {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var messageRef = react_1.useRef(null);
    var handleClick = function () {
        setIsOpen(true);
    };
    var handleClose = function () {
        setIsOpen(false);
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, axios_1["default"].post("message", {
                            message: (_a = messageRef.current) === null || _a === void 0 ? void 0 : _a.value
                        })];
                case 1:
                    _b.sent();
                    handleClose();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.IconButton, { size: "large", onClick: handleClick },
            React.createElement(Add_1["default"], null)),
        React.createElement(material_1.Dialog, { open: isOpen, onClose: handleClose },
            React.createElement(material_1.DialogTitle, null, "\u65B0\u898F\u6295\u7A3F"),
            React.createElement(material_1.DialogContent, null,
                React.createElement(material_1.DialogContentText, null),
                React.createElement(material_1.TextField, { autoFocus: true, margin: "dense", id: "text", label: "message", type: "text", fullWidth: true, variant: "outlined", multiline: true, rows: 4, inputRef: messageRef })),
            React.createElement(material_1.DialogActions, null,
                React.createElement(material_1.Button, { onClick: handleSubmit, variant: "contained" }, "\u6295\u7A3F")))));
};
exports["default"] = MessageCreate;
