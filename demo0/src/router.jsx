
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const RouterApp = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/order" component={Order} />
      <Route path="/commodity" component={Commodities} />
    </div>
  </Router>
);

const Home = () => <h2>这里是Home页</h2>;
const Order = () => <h2>这里是订单管理页</h2>;
const Commodity = ({ match }) => <h3>已选商品: {match.params.id}</h3>;
const Commodities = ({ match }) => (
  <div>
    <h2>商品</h2>
    <ul>
      <li>
        <Link to={`${match.url}/corn`}>大豆</Link>
      </li>
      <li>
        <Link to={`${match.url}/soybean`}>玉米</Link>
      </li>
    </ul>
    <Route path={`${match.path}/:id`} component={Commodity} />
    <Route
      exact
      path={match.path}
      render={() => <h3>请选择商品</h3>}
    />
  </div>
);
const Header = () => (
  <ul>
    <li>
      <Link to="/">首页</Link>
    </li>
    <li>
      <Link to="/order">订单管理</Link>
    </li>
    <li>
      <Link to="/commodity">商品管理</Link>
    </li>
  </ul>
);

export default RouterApp;