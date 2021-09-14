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
// import './index.scss'
var TestPageImg = /** @class */ (function (_super) {
    __extends(TestPageImg, _super);
    function TestPageImg() {
        return _super.call(this) || this;
    }
    TestPageImg.prototype.componentDidMount = function () {
    };
    TestPageImg.prototype.render = function () {
        return <div>TestPageImg<img src={require('@src/images/zxw.jpg')["default"]}/></div>;
    };
    return TestPageImg;
}(react_1.Component));
exports["default"] = TestPageImg;
//# sourceMappingURL=index.js.map