import { Col, Row, Tabs } from 'antd';
import { CenterHeading } from "../../../../common/Text"
import LatestProductContent from './content';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: 'New Arrival',
        label: `New Arrival`,
        children: <LatestProductContent value={"newarrival"} />,
    },
    {
        key: 'Best Seller',
        label: `Best Seller`,
        children: <LatestProductContent value={"bestseller"} />,
    },
    {
        key: 'Featured',
        label: `Featured`,
        children: <LatestProductContent value={"featured"} />,
    },
    {
        key: 'Special Offer',
        label: `Special Offer`,
        children: <LatestProductContent value={"specialoffer"} />,
    },
];
const LatestProducts = () => {
    return (
        <Row className='SectionPadding'>
            <Col span={24}>
                <CenterHeading heading={"Latest Products"} />
            </Col>
            <Col span={24} className="flex hfcenter">
                <Tabs
                    className='LatestTabs Tabs'
                    items={items}
                    defaultActiveKey="1"
                    onChange={onChange} />
            </Col>
        </Row>
    )
};
export default LatestProducts;