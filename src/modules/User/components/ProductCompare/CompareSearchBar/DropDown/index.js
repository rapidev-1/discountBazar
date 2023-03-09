import { Col, List, Row } from 'antd'
import ProductsCard2 from '../../../../../../common/Product/card2'
import { useSelector, useDispatch } from "react-redux"
import {
    setp1,
    setp2,
    setLoading,
    setactive
} from "../../../../../../Store/Features/prodcutCompare"
function CompareProductDropDown() {
    const state = useSelector(state => state.compare)
    const { p1, p2, loading, active } = state;
    const dispatch = useDispatch()
    return (
        <Row style={{ width: "100%" }}>
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