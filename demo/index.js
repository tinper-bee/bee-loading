
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Loading from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 默认加载
 * @description 基础加载
 *
 */

class Demo1 extends Component {
    render () {
        return (
        <div className="demoPadding">
            <Loading />
        </div>

        )
    }
}
/**
 *
 * @title 不同形状加载
 * @description 通过`loadingType`属性控制加载形状
 *
 */

class Demo2 extends Component {
    render () {
        return (
        <div className="demoPadding">
            <Loading />
            <Loading loadingType="line"/>
        </div>

        )
    }
}
/**
 *
 * @title 不同大小的加载
 * @description 通过`size`属性控制加载大小
 *
 */

class Demo3 extends Component {
    render() {
        return (
            <div className="demoPadding">
                <div className="dispalyDiv">
                    <Loading size="sm"/>
                </div>
                <div className="dispalyDiv">
                    <Loading />
                </div>
                <div className="dispalyDiv">
                    <Loading size="lg"/>
                </div>
                <div className="dispalyDiv">
                    <Loading loadingType="line" size="sm"/>
                </div>
                <div className="dispalyDiv">
                    <Loading loadingType="line" />
                </div>
                <div className="dispalyDiv">
                    <Loading loadingType="line" size="lg"/>
                </div>
            </div>
        )
    }
}
/**
 *
 * @title 不同颜色的加载
 * @description 通过`colors`属性控制加载颜色
 *
 */

class Demo4 extends Component {

    render () {
        return (
            <div className="demoPadding">
                <div className="dispalyDiv">
                    <Loading  colors="primary"/>
                </div>
                <div className="dispalyDiv">
                    <Loading  colors="success"/>
                </div>
                <div className="dispalyDiv">
                    <Loading  colors="warning"/>
                </div>
                <div className="dispalyDiv">
                    <Loading  loadingType="line" colors="primary"/>
                </div>
                <div className="dispalyDiv">
                    <Loading  loadingType="line" colors="success"/>
                </div>
                <div className="dispalyDiv">
                    <Loading  loadingType="line" colors="warning"/>
                </div>
            </div>
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
            open: false
        };
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick () {
        this.setState(
            { open : true}
        );

        setTimeout(() => {
            this.setState(
                { open : false }
            );
        },3000)
    }



    render() {
        let open = this.state.open;
        return (
            <div className="demoPadding">
                <div className="dispalyDiv">
                    <Button colors="primary" size="lg" onClick={this.handleClick
             }>点我点我
                    </Button>
                    <Loading loadingType="line" size="lg" colors="primary" useModal
                             show={open}>加载中......</Loading>
                </div>
            </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认加载","code":"/**\r\n *\r\n * @title 默认加载\r\n * @description 基础加载\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n        <div className=\"demoPadding\">\r\n            <Loading />\r\n        </div>\r\n\r\n        )\r\n    }\r\n}\r\n","desc":" 基础加载"},{"example":<Demo2 />,"title":" 不同形状加载","code":"/**\r\n *\r\n * @title 不同形状加载\r\n * @description 通过`loadingType`属性控制加载形状\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n        <div className=\"demoPadding\">\r\n            <Loading />\r\n            <Loading loadingType=\"line\"/>\r\n        </div>\r\n\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`loadingType`属性控制加载形状"},{"example":<Demo3 />,"title":" 不同大小的加载","code":"/**\r\n *\r\n * @title 不同大小的加载\r\n * @description 通过`size`属性控制加载大小\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n    render() {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading size=\"sm\"/>\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading />\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading size=\"lg\"/>\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading loadingType=\"line\" size=\"sm\"/>\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading loadingType=\"line\" />\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading loadingType=\"line\" size=\"lg\"/>\r\n                </div>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`size`属性控制加载大小"},{"example":<Demo4 />,"title":" 不同颜色的加载","code":"/**\r\n *\r\n * @title 不同颜色的加载\r\n * @description 通过`colors`属性控制加载颜色\r\n *\r\n */\r\n\r\nclass Demo4 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading  colors=\"primary\"/>\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading  colors=\"success\"/>\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading  colors=\"warning\"/>\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading  loadingType=\"line\" colors=\"primary\"/>\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading  loadingType=\"line\" colors=\"success\"/>\r\n                </div>\r\n                <div className=\"dispalyDiv\">\r\n                    <Loading  loadingType=\"line\" colors=\"warning\"/>\r\n                </div>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`colors`属性控制加载颜色"},{"example":<Demo5 />,"title":" 模态加载","code":"/**\r\n *\r\n * @title 模态加载\r\n * @description 通过`useModal` `show`等属性显示模态加载\r\n *\r\n */\r\n\r\nclass Demo5 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state = {\r\n            open: false\r\n        };\r\n        this.handleClick = this.handleClick.bind(this);\r\n\r\n    }\r\n    handleClick () {\r\n        this.setState(\r\n            { open : true}\r\n        );\r\n\r\n        setTimeout(() => {\r\n            this.setState(\r\n                { open : false }\r\n            );\r\n        },3000)\r\n    }\r\n\r\n\r\n\r\n    render() {\r\n        let open = this.state.open;\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"dispalyDiv\">\r\n                    <Button colors=\"primary\" size=\"lg\" onClick={this.handleClick\r\n             }>点我点我\r\n                    </Button>\r\n                    <Loading loadingType=\"line\" size=\"lg\" colors=\"primary\" useModal\r\n                             show={open}>加载中......</Loading>\r\n                </div>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`useModal` `show`等属性显示模态加载"}]


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

        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
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
