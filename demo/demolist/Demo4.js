/**
 *
 * @title 不同颜色的加载
 * @description 通过`colors`属性控制加载颜色
 *
 */

class Demo4 extends Component {

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
