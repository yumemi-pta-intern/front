"use strict";
exports.__esModule = true;
var Menu_1 = require("../Menu");
var ProfilePart_1 = require("../ProfilePart");
var Profile = function () {
    return (React.createElement("div", { style: { display: "grid", gridTemplateColumns: "15% 15% 1fr 30%" } },
        React.createElement("div", null),
        React.createElement(Menu_1["default"], null),
        React.createElement(ProfilePart_1["default"], null),
        React.createElement("div", null)));
};
exports["default"] = Profile;
