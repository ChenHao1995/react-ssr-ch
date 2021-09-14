"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AsyncComponent_1 = require("./components/AsyncComponent");
function StrongRoute(_a) {
    var isSsr = _a.isSsr, componentServe = _a.componentServe, path = _a.path, childrens = _a.childrens, component = _a.component;
    console.log('isSsr', isSsr);
    if (isSsr) {
        var Com_1 = componentServe;
        // const Com = require(routerConfig.componentPath).default
        console.log(Com_1);
        return <react_router_dom_1.Route path={path} render={function () { return <Com_1 routers={childrens} isSsr={isSsr}/>; }}>
    </react_router_dom_1.Route>;
    }
    var Com = (0, AsyncComponent_1["default"])(component);
    return <react_router_dom_1.Route path={path} render={function () { return <Com routers={childrens}/>; }}>
  </react_router_dom_1.Route>;
}
exports["default"] = StrongRoute;
//# sourceMappingURL=strongRouter.js.map