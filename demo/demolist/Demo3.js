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
