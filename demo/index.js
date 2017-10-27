
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Modal from 'bee-modal';
import Loading from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 默认加载","code":"/**\n *\n * @title 默认加载\n * @description 基础加载,两种形状，loadingType:rotate,圆形\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button'\nimport Loading from 'bee-loading';\n\nconst defaultProps = {\n  obj: {\n    loadingType: \"rotate\"\n  }\n};\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n    }\n  }\n  createLoading = () => {\n    let obj = this.props.obj;\n    Loading.create(obj);\n  }\n  destoryLoading = () => {\n    Loading.destroy();\n  }\n\n  render() {\n    let style = { \"zIndex\": 99999 };\n\n    return (\n      <Row>\n        <Col md={2} sm={2}>\n          <Button\n            colors=\"info\"\n            onClick={this.createLoading}>\n            create loading\n          </Button>\n        </Col>\n\n        <Col md={2} sm={2} style={style}>\n          <Button\n            colors=\"info\"\n            onClick={this.destoryLoading}>\n            delete loading\n          </Button>\n        </Col>\n\n      </Row>\n    )\n  }\n}\n\nDemo1.defaultProps = defaultProps;\n\n","desc":" 基础加载,两种形状，loadingType:rotate,圆形"},{"example":<Demo2 />,"title":" 默认加载","code":"/**\n *\n * @title 默认加载\n * @description 基础加载,两种形状，loadingType:line,条形\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button'\nimport Loading from 'bee-loading';\n\nconst defaultProps = {\n  obj: {\n    loadingType: \"line\"\n  }\n};\n\nclass Demo2 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n    }\n  }\n  createLoading = () => {\n    let obj = this.props.obj;\n    Loading.create(obj);\n  }\n  destoryLoading = () => {\n    Loading.destroy();\n  }\n\n  render() {\n    let style = { \"zIndex\": 99999 };\n\n    return (\n      <Row>\n        <Col md={2} sm={2}>\n          <Button\n            colors=\"info\"\n            onClick={this.createLoading}>\n            create loading\n          </Button>\n        </Col>\n\n        <Col md={2} sm={2} style={style}>\n          <Button\n            colors=\"info\"\n            onClick={this.destoryLoading}>\n            delete loading\n          </Button>\n        </Col>\n\n      </Row>\n    )\n  }\n}\n\nDemo2.defaultProps = defaultProps;\n\n","desc":" 基础加载,两种形状，loadingType:line,条形"},{"example":<Demo3 />,"title":" 默认加载","code":"/**\n *\n * @title 默认加载\n * @description 基础加载,两种形状，loadingType:rotate,圆形,添加背景，文字提示\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button'\nimport Loading from 'bee-loading';\n\nconst defaultProps = {\n  obj: {\n    loadingType: \"rotate\",\n    content: \"loading...\",\n    backColor: \"light\"\n  }\n};\n\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n    }\n  }\n  createLoading = () => {\n    let obj = this.props.obj;\n    Loading.create(obj);\n  }\n  destoryLoading = () => {\n    Loading.destroy();\n  }\n\n  render() {\n    let style = { \"zIndex\": 99999 };\n\n    return (\n      <Row>\n        <Col md={2} sm={2}>\n          <Button\n            colors=\"info\"\n            onClick={this.createLoading}>\n            create loading\n          </Button>\n        </Col>\n\n        <Col md={2} sm={2} style={style}>\n          <Button\n            colors=\"info\"\n            onClick={this.destoryLoading}>\n            delete loading\n          </Button>\n        </Col>\n\n      </Row>\n    )\n  }\n}\n\nDemo3.defaultProps = defaultProps;\n\n","desc":" 基础加载,两种形状，loadingType:rotate,圆形,添加背景，文字提示"},{"example":<Demo4 />,"title":" 默认加载","code":"/**\n *\n * @title 默认加载\n * @description 基础加载,两种形状，loadingType:line,条形,添加背景,文字提示\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button'\nimport Loading from 'bee-loading';\n\nconst defaultProps = {\n  obj: {\n    loadingType: \"line\",\n    content: \"loading...\",\n    backColor: \"light\"\n  }\n};\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n    }\n  }\n  createLoading = () => {\n    let obj = this.props.obj;\n    Loading.create(obj);\n  }\n  destoryLoading = () => {\n    Loading.destroy();\n  }\n\n  render() {\n    let style = { \"zIndex\": 99999 };\n\n    return (\n      <Row>\n        <Col md={2} sm={2}>\n          <Button\n            colors=\"info\"\n            onClick={this.createLoading}>\n            create loading\n          </Button>\n        </Col>\n\n        <Col md={2} sm={2} style={style}>\n          <Button\n            colors=\"info\"\n            onClick={this.destoryLoading}>\n            delete loading\n          </Button>\n        </Col>\n\n      </Row>\n    )\n  }\n}\n\nDemo4.defaultProps = defaultProps;\n\n","desc":" 基础加载,两种形状，loadingType:line,条形,添加背景,文字提示"},{"example":<Demo5 />,"title":" 默认加载","code":"/**\n *\n * @title 默认加载\n * @description 基础加载,两种形状，loadingType:line,条形.\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport Table from 'bee-table';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport Loading from 'bee-loading';\n\nconst defaultProps = {\n  obj: {\n    loadingType: \"line\",\n    loading_show: true\n  }\n};\n\nconst columns = [\n  { title: '用户名', dataIndex: 'a', key: 'a', width: 100 },\n  { id: '123', title: '性别', dataIndex: 'b', key: 'b', width: 100 },\n  { title: '年龄', dataIndex: 'c', key: 'c', width: 200 },\n  {\n    title: '操作', dataIndex: '', key: 'd', render() {\n      return <a href=\"#\">一些操作</a>;\n    },\n  },\n];\n\nconst data = [\n  { a: '令狐冲', b: '男', c: 41, key: '1' },\n  { a: '杨过', b: '男', c: 67, key: '2' },\n  { a: '郭靖', b: '男', c: 25, key: '3' },\n];\n\nclass Demo5 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n\n    }\n\n\n  }\n  /**\n   * 创建loading\n   */\n  createLoading = () => {\n    let obj = this.props.obj;\n    let loading_show = document.getElementsByClassName(\"loading_show\");\n    if (loading_show && loading_show.length == 0) {\n      Loading.create(obj);\n    }\n  }\n  /**\n   * 销毁loading\n   */\n  destoryLoading = (loading_flag) => (e) => {\n    let loading_show = document.getElementsByClassName(\"loading_show\");\n    if (loading_show.length > 0) {\n      Loading.destroy(loading_flag);\n    }\n\n  }\n\n  render() {\n    let style = { \"zIndex\": 99999 };\n    let { data_service_list } = this.state;\n    return (\n      <Row>\n        <Col md={2} sm={2}>\n          <Button\n            colors=\"info\"\n            onClick={this.createLoading}>\n            create loading\n          </Button>\n        </Col>\n\n        <Col md={2} sm={2} style={style}>\n          <Button\n            colors=\"info\"\n            onClick={() => {\n              this.destoryLoading(\"loading_flag1\")()\n            }} >\n\n            delete loading 1\n          </Button>\n        </Col>\n        {/*\n          删除loading_flag2标记的loading\n        <Col md={2} sm={2} style={style}>\n          <Button\n            colors=\"info\"\n            onClick={() => {\n              this.destoryLoading(\"loading_flag2\")()\n            }} >\n            delete loading 2\n          </Button>\n        </Col>\n        */}\n        <Col md={12} sm={12}>\n          <div className=\"margin-top-20\">\n            <Col md={6} sm={6} >\n            {/* 给需要局部刷新的区域添加样式:position:retative,同时给个字符串,比如:loading_flag1用来指定是那个loading*/}\n              <div className=\"addLoading loading_flag1\">\n                <Table\n                  columns={columns}\n                  data={data}\n                />\n              </div>\n            </Col>\n\n            <Col md={6} sm={6}>\n              {/* \n               可以同时显示多个区域进行局部刷新。需要按照下面样式指定\n              <div className=\"addLoading loading_flag2\" style={{ \"left\": \"10px\", \"position\": \"relative\" }}> \n             */}\n              <div className=\"\" style={{ \"left\": \"10px\" }}>\n                <Table\n                  columns={columns}\n                  data={data}\n                />\n              </div>\n            </Col>\n          </div>\n\n        </Col>\n\n      </Row >\n    )\n  }\n}\n\nDemo5.defaultProps = defaultProps;\n\n","desc":" 基础加载,两种形状，loadingType:line,条形."}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );


        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0, borderColor: "transparent"}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
