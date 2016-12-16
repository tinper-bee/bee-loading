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
