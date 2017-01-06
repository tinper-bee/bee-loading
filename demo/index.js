
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Modal from 'bee-modal';
import Loading from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 默认加载
 * @description 基础加载,两种形状，loadingType控制
 *
 */

class Demo1 extends Component {
    render () {
        return (
          <Row>
              <Col md={2} xs={5}>
                  <Loading />
              </Col>
              <Col md={2} xs={5}>
                  <Loading loadingType="line" />
              </Col>
          </Row>
        )
    }
}

/**
 *
 * @title 不同大小的加载
 * @description 通过`size`属性控制加载大小
 *
 */

class Demo2 extends Component {
    render() {
        return (
            <Row>
                <Col sm={2} xs={4}>
                    <Loading   size="sm"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading   />
                </Col>
                <Col sm={2} xs={4}>
                    <Loading   size="lg"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  loadingType="line" size="sm"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading   loadingType="line" />
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  loadingType="line" size="lg"/>
                </Col>
            </Row>
        )
    }
}

/**
 *
 * @title 不同颜色的加载
 * @description 通过`colors`属性控制加载颜色
 *
 */

class Demo3 extends Component {

    render () {
        return (
            <Row>
                <Col sm={2} xs={4}>
                    <Loading  colors="primary"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  colors="success"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  colors="warning"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  loadingType="line" colors="primary"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  loadingType="line" colors="success"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  loadingType="line" colors="warning"/>
                </Col>
            </Row>
        )
    }
}

/**
 *
 * @title 带有文字描述和带有背景色
 * @description
 *
 */

class Demo4 extends Component {
    render () {
        return (
            <Row>
                <Col sm={2} xs={4}>
                    <Loading describe>加载中...</Loading>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading  backColor="dark" describe>加载中...</Loading>
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
/**
 *
 * @title 模态加载
 * @description 通过`useModal` `show`等属性显示模态加载
 *
 */

class Demo5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            modalDropup: true
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.changeDropup = this.changeDropup.bind(this);

    }
    open() {
        this.setState({
            showModal: true
        });
    }
    close() {
        this.setState(
            {  showModal: false

            })
        ;
    }
    changeDropup(state) {
        this.setState({
            modalDropup: state
        });
    }
    render() {

        let modalContentStyle = {
            border: "none",
            boxShadow: "none",
            background: "transparent",
            textAlign: "center"
        };

        let modalDialogStyle = ' u-modal-diaload ';

        let open = this.state.open;
        return (
            <div className="demoPadding">
                <div className="dispalyDiv">
                    <Button colors="primary" size="lg" onClick={ ()=>{this.changeDropup("static");this.open();} }>带关闭按钮模态加载
                    </Button>
                    <Modal   backdrop={ this.state.modalDropup } show={ this.state.showModal }  onHide={ this.close }
                             contentStyle={ modalContentStyle } dialogClassName={modalDialogStyle}>
                        <Modal.Header closeButton >
                        </Modal.Header >
                        <Modal.Body >
                            <Loading loadingType="line" >eeeee</Loading>

                        </Modal.Body >
                    </Modal>
                </div>
            </div>

        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认加载","code":"/**\r\n *\r\n * @title 默认加载\r\n * @description 基础加载,两种形状，loadingType控制\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n          <Row>\r\n              <Col md={2} xs={5}>\r\n                  <Loading />\r\n              </Col>\r\n              <Col md={2} xs={5}>\r\n                  <Loading loadingType=\"line\" />\r\n              </Col>\r\n          </Row>\r\n        )\r\n    }\r\n}\r\n","desc":" 基础加载,两种形状，loadingType控制"},{"example":<Demo2 />,"title":" 不同大小的加载","code":"\r\n/**\r\n *\r\n * @title 不同大小的加载\r\n * @description 通过`size`属性控制加载大小\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    render() {\r\n        return (\r\n            <Row>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading   size=\"sm\"/>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading   />\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading   size=\"lg\"/>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  loadingType=\"line\" size=\"sm\"/>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading   loadingType=\"line\" />\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  loadingType=\"line\" size=\"lg\"/>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`size`属性控制加载大小"},{"example":<Demo3 />,"title":" 不同颜色的加载","code":"\r\n/**\r\n *\r\n * @title 不同颜色的加载\r\n * @description 通过`colors`属性控制加载颜色\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <Row>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  colors=\"primary\"/>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  colors=\"success\"/>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  colors=\"warning\"/>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  loadingType=\"line\" colors=\"primary\"/>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  loadingType=\"line\" colors=\"success\"/>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  loadingType=\"line\" colors=\"warning\"/>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过`colors`属性控制加载颜色"},{"example":<Demo4 />,"title":" 带有文字描述和带有背景色","code":"/**\r\n *\r\n * @title 带有文字描述和带有背景色\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo4 extends Component {\r\n    render () {\r\n        return (\r\n            <Row>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading describe>加载中...</Loading>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  backColor=\"dark\" describe>加载中...</Loading>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading describe loadingType=\"line\">加载中...</Loading>\r\n                </Col>\r\n                <Col sm={2} xs={4}>\r\n                    <Loading  loadingType=\"line\"  backColor=\"dark\"></Loading>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo5 />,"title":" 模态加载","code":"/**\r\n *\r\n * @title 模态加载\r\n * @description 通过`useModal` `show`等属性显示模态加载\r\n *\r\n */\r\n\r\nclass Demo5 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state = {\r\n            showModal: false,\r\n            modalDropup: true\r\n        };\r\n        this.close = this.close.bind(this);\r\n        this.open = this.open.bind(this);\r\n        this.changeDropup = this.changeDropup.bind(this);\r\n\r\n    }\r\n    open() {\r\n        this.setState({\r\n            showModal: true\r\n        });\r\n    }\r\n    close() {\r\n        this.setState(\r\n            {  showModal: false\r\n\r\n            })\r\n        ;\r\n    }\r\n    changeDropup(state) {\r\n        this.setState({\r\n            modalDropup: state\r\n        });\r\n    }\r\n    render() {\r\n\r\n        let modalContentStyle = {\r\n            border: \"none\",\r\n            boxShadow: \"none\",\r\n            background: \"transparent\",\r\n            textAlign: \"center\"\r\n        };\r\n\r\n        let modalDialogStyle = ' u-modal-diaload ';\r\n\r\n        let open = this.state.open;\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"dispalyDiv\">\r\n                    <Button colors=\"primary\" size=\"lg\" onClick={ ()=>{this.changeDropup(\"static\");this.open();} }>带关闭按钮模态加载\r\n                    </Button>\r\n                    <Modal   backdrop={ this.state.modalDropup } show={ this.state.showModal }  onHide={ this.close }\r\n                             contentStyle={ modalContentStyle } dialogClassName={modalDialogStyle}>\r\n                        <Modal.Header closeButton >\r\n                        </Modal.Header >\r\n                        <Modal.Body >\r\n                            <Loading loadingType=\"line\" >eeeee</Loading>\r\n\r\n                        </Modal.Body >\r\n                    </Modal>\r\n                </div>\r\n            </div>\r\n\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`useModal` `show`等属性显示模态加载"}]


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
