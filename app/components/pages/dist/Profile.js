"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Menu_1 = require("../Menu");
var ProfilePart_1 = require("../ProfilePart");
var Profile = function (_a) {
    var id = _a.id;
    react_1.useEffect(function () {
        console.log(id);
    }, []);
    return (React.createElement("div", { style: { display: "grid", gridTemplateColumns: "15% 15% 1fr 30%" } },
        React.createElement("div", null),
        React.createElement(Menu_1["default"], null),
        React.createElement(ProfilePart_1["default"], { id: id }),
        React.createElement("div", null)));
};
exports["default"] = Profile;
