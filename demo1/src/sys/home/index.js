import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import { sum } from 'utils';
import box from './img/box.gif';
import styles from './index.less';

class Home extends Component {
  hanldeClick = () => {
    Modal.info({
      title: '我是弹窗',
      content: <p>1 + 2 = <b>{sum(1, 2)}</b></p>,
    });
  }

  render() {
    return (
      <div className={styles.bg} >
        <h1>这里是首页</h1>
        <Button type="primary" onClick={this.hanldeClick} >点击弹窗</Button>
        <div>
          <img src={box} />
        </div>
      </div>
    );
  }
}

export default Home;
