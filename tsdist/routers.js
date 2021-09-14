"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var history_1 = require("history");
var App_1 = require("./App");
var router_config_1 = require("./router-config");
var strongRouter_1 = require("./strongRouter");
var history = (0, history_1.createBrowserHistory)();
function Routers() {
    return (<react_router_dom_1.BrowserRouter history={history}>
    <App_1.default />
    <react_router_dom_1.Switch>
      {router_config_1["default"].map(function (r) { return <strongRouter_1.default {...r}/>; })}
    </react_router_dom_1.Switch>
  </react_router_dom_1.BrowserRouter>);
}
exports["default"] = Routers;
//# sourceMappingURL=routers.js.map