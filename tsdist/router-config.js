"use strict";
exports.__esModule = true;
var iosKeyboard_1 = require("@src/pages/iosKeyboard");
var testPageImg_1 = require("@src/pages/testPageImg");
var demo_1 = require("@src/pages/demo");
var routerConfig = [
    {
        path: '/ios-keyboard',
        componentServe: iosKeyboard_1["default"],
        component: function () { return Promise.resolve().then(function () { return require('./pages/iosKeyboard'); }); },
        childrens: [{
                path: '/ios-keyboard/test-page-img',
                componentServe: testPageImg_1["default"],
                component: function () { return Promise.resolve().then(function () { return require('./pages/testPageImg'); }); }
            }]
    },
    {
        path: '/demo',
        componentServe: demo_1["default"],
        component: function () { return Promise.resolve().then(function () { return require('@src/pages/demo'); }); }
    }
];
exports["default"] = routerConfig;
//# sourceMappingURL=router-config.js.map