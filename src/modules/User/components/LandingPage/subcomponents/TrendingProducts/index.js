import { Col, Row, } from 'antd'
import { CenterHeading } from "../../../../../../common/Text"
import LatestProductContent from './content';

const TrendingProducts = () => {
    return (
        <Row className='SectionPadding TreningProducts'>
            <Col span={24}>
                <CenterHeading heading={"Trending Products"} />
            </Col>
            <Col span={24} className="flex hfcenter">
                <LatestProductContent />
            </Col>

        </Row>
    )
};
export default TrendingProducts; 