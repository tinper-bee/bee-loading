/**
 *
 * @title 默认加载
 * @description 基础加载,两种形状，loadingType控制
 *
 */

import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import Button from 'bee-button'
import Loading from '../../src';


class Demo1 extends Component {
  constructor(props) {
      super(props);
      this.state = {
      }
  }
  createLoading = () => {
    Loading.create();
  }
  destoryLoading = () => {
    Loading.destroy();
  }

  render () {
        return (
          <Row>
            <Button
                colors="info"
                onClick={this.createLoading}>
                create loading
            </Button>
          </Row>
        )
    }
}

export default Demo1;
