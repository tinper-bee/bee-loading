
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Modal from 'bee-modal';
import Loading from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 默认加载","code":"/**\n *\n * @title 默认加载\n * @description 基础加载,两种形状，loadingType控制\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button'\nimport Loading from 'bee-loading';\n\n\nclass Demo1 extends Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n      }\n  }\n  createLoading = () => {\n    Loading.create();\n  }\n  destoryLoading = () => {\n    Loading.destroy();\n  }\n\n  render () {\n        return (\n          <Row>\n            <Button\n                colors=\"info\"\n                onClick={this.createLoading}>\n                create loading\n            </Button>\n          </Row>\n        )\n    }\n}\n\n\n","desc":" 基础加载,两种形状，loadingType控制"},{"example":<Demo2 />,"title":" 默认加载","code":"/**\n *\n * @title 默认加载\n * @description 基础加载,两种形状，loadingType控制\n *\n */\n\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel } from 'bee-panel';\nimport React, { Component } from 'react';\nimport Button from 'bee-button'\nimport Loading from 'bee-loading';\n\n\nclass Demo1 extends Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n      }\n  }\n  createLoading = () => {\n    Loading.create({loadingType:\"line\",content: 'loading',duration: 100});\n  }\n  destoryLoading = () => {\n    Loading.destroy();\n  }\n\n  render () {\n        return (\n          <Row>\n              <Button\n                colors=\"info\"\n                onClick={this.createLoading}>\n                create loading\n            </Button>\n\n          </Row>\n        )\n    }\n}\n\n\n","desc":" 基础加载,两种形状，loadingType控制"}]


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
