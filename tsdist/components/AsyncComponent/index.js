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
var ansycComponent = function (getcomponent) {
    return /** @class */ (function (_super) {
        __extends(AnsycComponent, _super);
        function AnsycComponent(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                component: null
            };
            return _this;
        }
        AnsycComponent.prototype.componentDidMount = function () {
            var _this = this;
            getcomponent().then(function (component) {
                console.log(component["default"]);
                _this.setState({
                    component: component["default"]
                });
            });
        };
        AnsycComponent.prototype.render = function () {
            var ANSYC = this.state.component;
            return this.state.component ? <ANSYC {...this.props}/> : null;
        };
        return AnsycComponent;
    }(react_1.Component));
};
exports["default"] = ansycComponent;
//# sourceMappingURL=index.js.map