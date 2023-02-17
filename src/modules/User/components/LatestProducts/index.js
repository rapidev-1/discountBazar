import { Col, Row, Tabs } from 'antd';
import { CenterHeading } from "../../../../common/Text"
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: `Tab 3`,
        children: `Content of Tab Pane 3`,
    },
];
const LatestProducts = () => {
    return (
        <Row>
            <Col span={24}>
                <CenterHeading heading={"Latest Products"} />
            </Col>
            <Col span={24} className="flex hfcenter">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </Col>
        </Row>
    )
};
export default LatestProducts;