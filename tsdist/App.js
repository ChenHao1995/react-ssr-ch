"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.state = {
            show: 1
        };
        _this.click = function () {
            console.log('--');
            _this.setState(function (preState) {
                return {
                    show: preState.show + 1
                };
            });
        };
        _this.go = function () {
            console.log(_this.props);
            _this.props.history.push('/ios-keyboard');
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
    };
    App.prototype.render = function () {
        return react_1["default"].createElement("div", null,
            react_1["default"].createElement("a", { onClick: this.go }, "\u8DF3\u8F6C"),
            react_1["default"].createElement("h1", null,
                " ",
                react_1["default"].createElement("button", { onClick: this.click }, "\u70B9\u51FB"),
                this.state.show));
    };
    return App;
}(react_1.Component));
exports["default"] = (0, react_router_1.withRouter)(App);
//# sourceMappingURL=App.js.map