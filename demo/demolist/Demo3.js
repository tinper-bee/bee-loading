/**
 *
 * @title 默认加载
 * @description 基础加载,两种形状，loadingType:rotate,圆形,添加背景，文字提示
 *
 */

import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import Button from 'bee-button'
import Loading from '../../src';

const defaultProps = {
  obj: {
    loadingType: "rotate",
    content: "loading...",
    backColor: "light"
  }
};

class Demo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  createLoading = () => {
    let obj = this.props.obj;
    Loading.create(obj);
  }
  destoryLoading = () => {
    Loading.destroy();
  }

  render() {
    let style = { "zIndex": 99999 };

    return (
      <Row>
        <Col md={2} sm={2}>
          <Button
            colors="info"
            onClick={this.createLoading}>
            create loading
          </Button>
        </Col>

        <Col md={2} sm={2} style={style}>
          <Button
            colors="info"
            onClick={this.destoryLoading}>
            delete loading
          </Button>
        </Col>

      </Row>
    )
  }
}

Demo3.defaultProps = defaultProps;

export default Demo3;