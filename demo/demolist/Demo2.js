/**
 *
 * @title 不同形状加载
 * @description 通过`loadingType`属性控制加载形状
 *
 */

class Demo2 extends Component {
    render () {
        return (
            <Row>
                <Col md={2} xs={6}>
                    <Loading />
                </Col>
                <Col md={2} xs={6}>
                    <Loading loadingType="line"/>
                </Col>
            </Row>
        )
    }
}
