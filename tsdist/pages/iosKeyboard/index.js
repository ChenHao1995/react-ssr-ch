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
var strongRouter_1 = require("@src/strongRouter");
// import './index.scss'
var IOSKeyboard = /** @class */ (function (_super) {
    __extends(IOSKeyboard, _super);
    function IOSKeyboard() {
        var _this = _super.call(this) || this;
        _this.state = {
            height: 100
        };
        _this.inputFocus = function () {
            _this.setState({
                height: 100
            });
        };
        return _this;
    }
    IOSKeyboard.prototype.componentDidMount = function () {
        console.log(this.props);
    };
    IOSKeyboard.prototype.render = function () {
        var _this = this;
        return <div>
        <input onFocus={this.inputFocus}/> <span>{this.state.height}</span><div className="bottom-fixed">底部</div>
        {this.props.routers.map(function (r) { return <strongRouter_1.default {...r} isSsr={!!_this.props.isSsr}/>; })}
      </div>;
    };
    return IOSKeyboard;
}(react_1.Component));
exports["default"] = IOSKeyboard;
//# sourceMappingURL=index.js.map