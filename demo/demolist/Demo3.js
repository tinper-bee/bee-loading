/**
 *
 * @title 模态加载
 * @description 通过`useModal` `show`等属性显示模态加载
 *
 */

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }
    open() {
        this.setState({
            showModal: true
        });
    }
    close() {
        this.setState(
            {
                showModal: false
            })
        ;
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
                    <Button colors="primary" size="lg" onClick={ this.open }>带关闭按钮模态加载
                    </Button>
                    <Modal   backdrop="static"  show={ this.state.showModal }  onHide={ this.close }
                             contentStyle={ modalContentStyle } dialogClassName={modalDialogStyle}>
                        <Modal.Header closeButton >
                        </Modal.Header >
                        <Modal.Body >
                            <Loading loadingType="line" ></Loading>
                        </Modal.Body >
                    </Modal>
                </div>
            </div>

        )
    }
}
