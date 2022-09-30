"use strict";
exports.__esModule = true;
var MenuList_1 = require("@mui/material/MenuList");
var material_1 = require("@mui/material");
var Home_1 = require("@mui/icons-material/Home");
var Person_1 = require("@mui/icons-material/Person");
var link_1 = require("next/link");
var react_1 = require("react");
var MessageCreate_1 = require("./MessageCreate");
var Menu = function () {
    var userId = "";
    var getUserId = react_1.useCallback(function () {
        userId = localStorage.getItem("id");
    }, [userId]);
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
            React.createElement(link_1["default"], { href: "" + (userId != "" ? "/profile/" + userId : "/profile") },
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
