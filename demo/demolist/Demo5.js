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
