
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from 'antd';
import Home from './home';
import styles from './index.less';

const MenuItem = Menu.Item;

const RouterApp = () => (
  <Router>
    <div className={styles.container} >
      <Header />
      <section className={styles.page} >
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/commodity" component={Commodities} />
      </section>
    </div>
  </Router>
);

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
  <aside>
    <Menu>
      <MenuItem>
        <Link to="/">首页</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/order">订单管理</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/commodity">商品管理</Link>
      </MenuItem>
    </Menu>
  </aside>
);

export default RouterApp;
