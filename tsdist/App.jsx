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
        return <div>
        <a onClick={this.go}>跳转</a>
        <h1> <button onClick={this.click}>点击</button>{this.state.show}</h1>
      </div>;
    };
    return App;
}(react_1.Component));
exports["default"] = (0, react_router_1.withRouter)(App);
//# sourceMappingURL=App.jsx.map