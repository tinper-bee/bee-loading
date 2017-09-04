
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Modal from 'bee-modal';
import Loading from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 默认加载","code":"/**\n *\n * @title 默认加载\n * @description 基础加载,两种形状，loadingType控制\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Loading from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render () {\n        return (\n          <Row>\n              <Col md={2} xs={5}>\n                  <Loading />\n              </Col>\n              <Col md={2} xs={5}>\n                  <Loading loadingType=\"line\" />\n              </Col>\n          </Row>\n        )\n    }\n}\n\n\n","desc":" 基础加载,两种形状，loadingType控制"},{"example":<Demo2 />,"title":" 带有文字描述和带有背景色","code":"/**\n *\n * @title 带有文字描述和带有背景色\n * @description\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Loading from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render () {\n        return (\n            <Row>\n                <Col sm={2} xs={4}>\n                    <Loading colors=\"primary\" describe>加载中...</Loading>\n                </Col>\n                <Col sm={2} xs={4}>\n                    <Loading colors=\"warning\"  backColor=\"dark\" describe>加载中...</Loading>\n                </Col>\n                <Col sm={2} xs={4}>\n                    <Loading describe loadingType=\"line\">加载中...</Loading>\n                </Col>\n                <Col sm={2} xs={4}>\n                    <Loading  loadingType=\"line\"  backColor=\"dark\"></Loading>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n\n","desc":""},{"example":<Demo3 />,"title":" 模态加载","code":"/**\n *\n * @title 模态加载\n * @description 通过`useModal` `show`等属性显示模态加载\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport Modal from 'bee-modal';\nimport Loading from 'tinper-bee';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            showModal: false,\n        };\n        this.close = this.close.bind(this);\n        this.open = this.open.bind(this);\n\n    }\n    open() {\n        this.setState({\n            showModal: true\n        });\n    }\n    close() {\n        this.setState(\n            {\n                showModal: false\n            })\n        ;\n    }\n    render() {\n\n        let modalContentStyle = {\n            border: \"none\",\n            boxShadow: \"none\",\n            background: \"transparent\",\n            textAlign: \"center\"\n        };\n\n        let modalDialogStyle = ' u-modal-diaload ';\n\n        let open = this.state.open;\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"dispalyDiv\">\n                    <Button colors=\"primary\" size=\"lg\" onClick={ this.open }>带关闭按钮模态加载\n                    </Button>\n                    <Modal   backdrop=\"static\"  show={ this.state.showModal }  onHide={ this.close }\n                             contentStyle={ modalContentStyle } dialogClassName={modalDialogStyle}>\n                        <Modal.Header closeButton >\n                        </Modal.Header >\n                        <Modal.Body >\n                            <Loading loadingType=\"line\" ></Loading>\n                        </Modal.Body >\n                    </Modal>\n                </div>\n            </div>\n\n        )\n    }\n}\n\n\n","desc":" 通过`useModal` `show`等属性显示模态加载"}]


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
