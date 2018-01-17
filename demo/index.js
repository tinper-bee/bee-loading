
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基础Loading","code":"/**\n *\n * @title 基础Loading\n * @description 设置`loadingType`来修改Loading样式。默认是'rotate'。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading, Button } from 'tinper-bee';\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showRotate: false,\n        showLine: false\n    }\n  }\n\n  handleShow = () => {\n      this.setState({\n          showRotate: true\n      })\n      setTimeout(() => {\n          this.setState({\n              showRotate: false\n          })\n      }, 5000)\n\n  }\n\n    handleShowLine = () => {\n        this.setState({\n            showLine: true\n        })\n        setTimeout(() => {\n            this.setState({\n                showLine: false\n            })\n        }, 5000)\n\n    }\n\n  render() {\n    return (\n      <div>\n        <Button\n            colors=\"primary\"\n            onClick={this.handleShow}>\n          点击显示默认loading\n        </Button>\n        <Loading\n            fullScreen\n            showBackDrop={true}\n            show={this.state.showRotate}\n        />\n        <Button\n            colors=\"primary\"\n            style={{ marginLeft: 50 }}\n            onClick={this.handleShowLine}>\n          点击显示line loading\n        </Button>\n        <Loading\n            showBackDrop={true}\n            loadingType=\"line\"\n            show={this.state.showLine}\n        />\n      </div>\n    )\n  }\n}\n\n","desc":" 设置`loadingType`来修改Loading样式。默认是'rotate'。"},{"example":<Demo2 />,"title":" 将Loading渲染到容器中","code":"/**\n *\n * @title 将Loading渲染到容器中\n * @description 通过设置`container`属性，来控制loading渲染位置\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n\n\n    render() {\n        return (\n                <div className=\"demo2\">\n                    <p>\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <Loading container={this} show={this.state.show} />\n                </div>\n        )\n    }\n}\n\n\n","desc":" 通过设置`container`属性，来控制loading渲染位置","scss_code":".demo2{\r\n  position: relative;\r\n  height: 100px;\r\n  width: 500px;\r\n  border: 1px solid #0084ff;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}"},{"example":<Demo3 />,"title":" 添加描述","code":"/**\n *\n * @title 添加描述\n * @description 通过添加children，来添加Loading的文字描述\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n\n    render() {\n        return (\n            <div className=\"demo3\">\n                <p>\n                    曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                    如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                    如果非要在这份爱上加上一个期限，我希望是……\n                    一万年\n                </p>\n                <Loading\n                    describe={true}\n                    container={this}\n                    show={this.state.show} >\n                    加载中\n                </Loading>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 通过添加children，来添加Loading的文字描述","scss_code":".demo3{\r\n  position: relative;\r\n  height: 100px;\r\n  width: 500px;\r\n  border: 1px solid #0084ff;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}"},{"example":<Demo4 />,"title":" 将Loading渲染到容器中","code":"/**\n *\n * @title 将Loading渲染到容器中\n * @description 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n    getElement =()=>{\n        return document.getElementById('demo4')\n    }\n\n\n    render() {\n        return (\n                <div className=\"demo4\">\n                    <p>\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <p id=\"demo4\" style={{position: 'relative'}}>\n                    \n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <Loading container={this.getElement} show={this.state.show} />\n                </div>\n        )\n    }\n}\n\n\n","desc":" 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置","scss_code":".demo4{\r\n  position: relative;\r\n  height: 100px;\r\n  width: 500px;\r\n  border: 1px solid #0084ff;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                        <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
