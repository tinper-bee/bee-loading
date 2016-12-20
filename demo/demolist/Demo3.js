/**
 *
 * @title 不同大小的加载
 * @description 通过`size`属性控制加载大小
 *
 */

class Demo3 extends Component {
    render() {
        return (
            <Row>
                <Col sm={2} xs={4}>
                    <Loading size="sm"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading />
                </Col>
                <Col sm={2} xs={4}>
                    <Loading size="lg"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading loadingType="line" size="sm"/>
                </Col>
                <Col sm={2} xs={4}>
                    <Loading loadingType="line" />
                </Col>
                <Col sm={2} xs={4}>
                    <Loading loadingType="line" size="lg"/>
                </Col>
            </Row>
        )
    }
}
