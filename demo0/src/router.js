import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var RouterApp = function RouterApp() {
  return React.createElement(Router, null, React.createElement("div", null, React.createElement(Header, null), React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), React.createElement(Route, {
    path: "/order",
    component: Order
  }), React.createElement(Route, {
    path: "/commodity",
    component: Commodities
  })));
};

var Home = function Home() {
  return React.createElement("h2", null, "\u8FD9\u91CC\u662FHome\u9875");
};

var Order = function Order() {
  return React.createElement("h2", null, "\u8FD9\u91CC\u662F\u8BA2\u5355\u7BA1\u7406\u9875");
};

var Commodity = function Commodity(_ref) {
  var match = _ref.match;
  return React.createElement("h3", null, "\u5DF2\u9009\u5546\u54C1id: ", match.params.id);
};

var Commodities = function Commodities(_ref2) {
  var match = _ref2.match;
  return React.createElement("div", null, React.createElement("h2", null, "\u5546\u54C1"), React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    to: "".concat(match.url, "/corn")
  }, "\u5927\u8C46")), React.createElement("li", null, React.createElement(Link, {
    to: "".concat(match.url, "/soybean")
  }, "\u7389\u7C73"))), React.createElement(Route, {
    path: "".concat(match.path, "/:id"),
    component: Commodity
  }), React.createElement(Route, {
    exact: true,
    path: match.path,
    render: function render() {
      return React.createElement("h3", null, "\u8BF7\u9009\u62E9\u5546\u54C1");
    }
  }));
};

var Header = function Header() {
  return React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    to: "/"
  }, "\u9996\u9875")), React.createElement("li", null, React.createElement(Link, {
    to: "/order"
  }, "\u8BA2\u5355\u7BA1\u7406")), React.createElement("li", null, React.createElement(Link, {
    to: "/commodity"
  }, "\u5546\u54C1\u7BA1\u7406")));
};

export default RouterApp;
