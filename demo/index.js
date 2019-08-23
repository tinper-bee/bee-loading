import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo0 = require("./demolist/Demo0");var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo0 />,"title":" 页面级加载提示","code":"/**\n * @title 页面级加载提示\n * @description 页面级加载提示推荐使用进度条组件\n */\n\nimport React, { Component } from 'react';\nimport { Button, ProgressBar } from 'tinper-bee';\n\n\n\nclass Demo0 extends Component {\n    start = () => {\n        ProgressBar.start();\n    }\n    set = () => {\n        ProgressBar.set(0.4);\n    }\n    inc = () => {\n        ProgressBar.inc();\n    }\n    done = () => {\n        ProgressBar.done();\n    }\n\trender(){\n        const style = {marginRight:\"10px\"};\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Button style={style} onClick={this.start}>点我开始</Button>\n\t\t\t\t<Button style={style} onClick={this.set}>设置固定位置</Button>\n\t\t\t\t<Button style={style} onClick={this.inc}>点我加快</Button>\n\t\t\t\t<Button onClick={this.done}>点我结束</Button>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\nexport default Demo0;","desc":" 页面级加载提示推荐使用进度条组件"},{"example":<Demo1 />,"title":" 基础Loading","code":"/**\n *\n * @title 基础Loading\n * @description 设置`loadingType`来修改Loading样式。默认是'rotate'。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Button, Loading } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showRotate: false,\n        showLine: false\n    }\n  }\n\n  handleShow = () => {\n      this.setState({\n          showRotate: true\n      })\n      setTimeout(() => {\n          this.setState({\n              showRotate: false\n          })\n      }, 3000)\n\n  }\n\n    handleShowLine = () => {\n        this.setState({\n            showLine: true\n        })\n        setTimeout(() => {\n            this.setState({\n                showLine: false\n            })\n        }, 3000)\n\n    }\n\n  render() {\n    return (\n      <div>\n        <Button\n            colors=\"primary\"\n            onClick={this.handleShow}>\n          点击显示默认loading\n        </Button>\n        <Loading\n            fullScreen\n            showBackDrop={true}\n            show={this.state.showRotate}\n        />\n        <Button\n            colors=\"primary\"\n            style={{ marginLeft: 50 }}\n            onClick={this.handleShowLine}>\n          点击显示line loading\n        </Button>\n        <Loading\n            fullScreen\n            showBackDrop={true}\n            loadingType=\"line\"\n            show={this.state.showLine}\n        />\n      </div>\n    )\n  }\n}\n\nexport default Demo1;","desc":" 设置`loadingType`来修改Loading样式。默认是'rotate'。"},{"example":<Demo2 />,"title":" 将Loading渲染到容器中","code":"/**\n *\n * @title 将Loading渲染到容器中\n * @description 通过设置`container`属性，来控制loading渲染位置\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n\n\n    render() {\n        return (\n                <div className=\"demo2\">\n                    <p>\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <Loading container={this} show={this.state.show} />\n                </div>\n        )\n    }\n}\n\n\nexport default Demo2;","desc":" 通过设置`container`属性，来控制loading渲染位置","scss_code":".demo2{\n  position: relative;\n  height: 100px;\n  width: 500px;\n  border: 1px solid #c1c7d0;\n  overflow: hidden;\n  font-size: 14px;\n  .u-loading-backdrop{\n    z-index:1029;\n  }\n}"},{"example":<Demo3 />,"title":" 添加描述","code":"/**\n *\n * @title 添加描述\n * @description 通过添加children，来添加Loading的文字描述。size 属性设置加载图标的大小。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n\n    render() {\n        return (\n            <div className=\"demo3\">\n                <p>\n                    曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                    如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                    如果非要在这份爱上加上一个期限，我希望是……\n                    一万年\n                </p>\n                <Loading\n                    describe={true}\n                    container={this}\n                    show={this.state.show} >\n                    加载中\n                </Loading>\n            </div>\n        )\n    }\n}\n\n\nexport default Demo3;","desc":" 通过添加children，来添加Loading的文字描述。size 属性设置加载图标的大小。","scss_code":".demo3{\n  position: relative;\n  height: 100px;\n  width: 500px;\n  border: 1px solid #c1c7d0;\n  overflow: hidden;\n  font-size: 14px;\n  .u-loading-backdrop{\n    z-index:1029;\n  }\n}"},{"example":<Demo4 />,"title":" 将Loading渲染到容器中","code":"/**\n *\n * @title 将Loading渲染到容器中\n * @description 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n    getElement =()=>{\n        return document.getElementById('demo4')\n    }\n\n\n    render() {\n        return (\n                <div className=\"demo4\">\n                    <p>\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <p id=\"demo4\">\n                    \n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <Loading container={this.getElement} show={this.state.show} />\n                </div>\n        )\n    }\n}\n\n\nexport default Demo4;\n","desc":" 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置","scss_code":".demo4{\n  position: relative;\n  height: 100px;\n  width: 500px;\n  border: 1px solid #c1c7d0;\n  overflow: hidden;\n  font-size: 14px;\n  .u-loading-backdrop{\n    z-index:1029;\n  }\n}"},{"example":<Demo5 />,"title":" 不同尺寸的Loading","code":"/**\n *\n * @title 不同尺寸的Loading\n * @description 通过设置`size`属性，来控制loading图标的大小\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\n\nclass Demo5 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n\n\n    render() {\n        return (\n                <div className=\"demo5\">\n                    <Loading size=\"sm\" container={this} show={this.state.show} />\n                    <Loading container={this} show={this.state.show} />\n                    <Loading size=\"lg\" container={this} show={this.state.show} />\n                </div>\n        )\n    }\n}\n\n\nexport default Demo5;","desc":" 通过设置`size`属性，来控制loading图标的大小","scss_code":".demo5{\n    position: relative;\n    height: 100px;\n    width: 500px;\n    overflow: hidden;\n    font-size: 14px;\n    .u-loading-backdrop{\n      z-index:1029;\n      background: rgba(255,255,255,0);\n    }\n    .u-loading.u-loading-rotate.u-loading-rotate-sm>div{\n        left: 20%;\n    }\n    .u-loading.u-loading-rotate>div{\n        left: 40%;\n    }\n    .u-loading.u-loading-rotate.u-loading-rotate-lg>div{\n        left: 65%;\n    }\n}"},{"example":<Demo6 />,"title":" 自定义加载图标","code":"/**\r\n *\r\n * @title 自定义加载图标\r\n * @description 如需自定义加载图标，需要同时设置 `loadingType` 属性和 `indicator` 属性。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\r\n\r\n\r\nlet imgsrc = \"http://design.yonyoucloud.com/static/bee.tinper.org-demo/loading.gif\";\r\n\r\nclass Demo6 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            show: true\r\n        }\r\n        this.a = null;\r\n    }\r\n\r\n\r\n    render() {\r\n        const beeIcon = <img src={imgsrc} style={{width:'50px'}}/>;\r\n        return (\r\n            <div className=\"demo5\">\r\n                <Loading \r\n                    container={this} \r\n                    show={this.state.show} \r\n                    loadingType=\"custom\"  //启用自定义图标\r\n                    indicator={beeIcon}  //自定义图标的内容\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\nexport default Demo6;","desc":" 如需自定义加载图标，需要同时设置 `loadingType` 属性和 `indicator` 属性。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
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
