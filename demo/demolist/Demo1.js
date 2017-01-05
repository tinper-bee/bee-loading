/**
 *
 * @title 默认加载
 * @description 基础加载,两种形状，loadingType控制
 *
 */

class Demo1 extends Component {
    render () {
        return (
          <Row>
              <Col md={2} xs={5}>
                  <Loading />
              </Col>
              <Col md={2} xs={5}>
                  <Loading loadingType="line" />
              </Col>
          </Row>
        )
    }
}
