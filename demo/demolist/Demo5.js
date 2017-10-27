/**
 *
 * @title 默认加载
 * @description 基础加载,两种形状，loadingType:line,条形.
 *
 */

import { Con, Row, Col } from 'bee-layout';
import Table from 'bee-table';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import Button from 'bee-button';
import Loading from '../../src';

const defaultProps = {
  obj: {
    loadingType: "line",
    loading_show: true
  }
};

const columns = [
  { title: '用户名', dataIndex: 'a', key: 'a', width: 100 },
  { id: '123', title: '性别', dataIndex: 'b', key: 'b', width: 100 },
  { title: '年龄', dataIndex: 'c', key: 'c', width: 200 },
  {
    title: '操作', dataIndex: '', key: 'd', render() {
      return <a href="#">一些操作</a>;
    },
  },
];

const data = [
  { a: '令狐冲', b: '男', c: 41, key: '1' },
  { a: '杨过', b: '男', c: 67, key: '2' },
  { a: '郭靖', b: '男', c: 25, key: '3' },
];

class Demo5 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }


  }
  /**
   * 创建loading
   */
  createLoading = () => {
    let obj = this.props.obj;
    let loading_show = document.getElementsByClassName("loading_show");
    if (loading_show && loading_show.length == 0) {
      Loading.create(obj);
    }
  }
  /**
   * 销毁loading
   */
  destoryLoading = (loading_flag) => (e) => {
    let loading_show = document.getElementsByClassName("loading_show");
    if (loading_show.length > 0) {
      Loading.destroy(loading_flag);
    }

  }

  render() {
    let style = { "zIndex": 99999 };
    let { data_service_list } = this.state;
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
            onClick={() => {
              this.destoryLoading("loading_flag1")()
            }} >

            delete loading 1
          </Button>
        </Col>
        {/*
          删除loading_flag2标记的loading
        <Col md={2} sm={2} style={style}>
          <Button
            colors="info"
            onClick={() => {
              this.destoryLoading("loading_flag2")()
            }} >
            delete loading 2
          </Button>
        </Col>
        */}
        <Col md={12} sm={12}>
          <div className="margin-top-20">
            <Col md={6} sm={6} >
            {/* 给需要局部刷新的区域添加样式:position:retative,同时给个字符串,比如:loading_flag1用来指定是那个loading*/}
              <div className="addLoading loading_flag1">
                <Table
                  columns={columns}
                  data={data}
                />
              </div>
            </Col>

            <Col md={6} sm={6}>
              {/* 
               可以同时显示多个区域进行局部刷新。需要按照下面样式指定
              <div className="addLoading loading_flag2" style={{ "left": "10px", "position": "relative" }}> 
             */}
              <div className="" style={{ "left": "10px" }}>
                <Table
                  columns={columns}
                  data={data}
                />
              </div>
            </Col>
          </div>

        </Col>

      </Row >
    )
  }
}

Demo5.defaultProps = defaultProps;

export default Demo5;