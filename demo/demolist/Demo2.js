/**
 *
 * @title 带有文字描述和带有背景色
 * @description
 *
 */

import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import Loading from '../../src';

class Demo2 extends Component {
    render () {
        return (
            <Row>
                <Col sm={2} xs={4}>
                    <Loading colors="primary" describe>加载中...</Loading>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading colors="warning"  backColor="dark" describe>加载中...</Loading>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading describe loadingType="line">加载中...</Loading>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  loadingType="line"  backColor="dark"></Loading>
                </Col>
            </Row>
        )
    }
}

export default Demo2;
