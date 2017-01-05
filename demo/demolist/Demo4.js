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
