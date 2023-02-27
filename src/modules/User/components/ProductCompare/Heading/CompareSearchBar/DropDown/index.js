import { Col, List, Row } from 'antd'
import ProductsCard2 from '../../../../../../../common/Product/card2'

function CompareProductDropDown({ value }) {


    return (
        <Row style={{ width: "100%", opacity: value ? 1 : 0 }}>
            <Col span={24} className="CompareProductDropDownCol">
                <List
                    className='CompareProductDropDownList'
                    bordered
                    dataSource={[1, 2]}
                    renderItem={(item) => (
                        <List.Item>
                            <ProductsCard2 noicons />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}

export default CompareProductDropDown