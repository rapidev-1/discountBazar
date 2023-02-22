import { Button, Col, Row, } from 'antd'
import { CenterHeading } from "../../../../../../common/Text"

const DiscountItem = () => {
    return (
        <Row className='DiscountItem SectionPadding'>
            <Col span={24} className="">
                <CenterHeading heading={"Discount Item"} />
            </Col>
            <Col span={24} className='flex hfcenter'>
                <small className='colorPink'>
                    Eams Biliard Cue Stick
                </small>
                <span className='dot'></span>
                <small className='colorHeading'>
                    Cue Stick
                </small>
                <span className='dot'>.</span>
                <small className='colorHeading'>
                    Best Stick
                </small>
                <span className='dot'></span>
            </Col>
            <Col span={24} className="flex hfcenter">
                <div className="Banner BannerProduct ">
                    <div className="Banner-slider">
                        <div className="Banner-left">
                            <div className="Banner-items">
                                <h1 style={{ fontSize: "1.8rem" }}>
                                    20% Discount Of All Products
                                </h1>
                                <p className='colorPink'>
                                    <small>
                                        Eams Biliard Cue Stick
                                    </small>
                                </p>
                                <ul>
                                    <li>
                                        All frames constructed with hardwood solids and laminates
                                    </li>
                                    <li>
                                        Reinforced with double wood dowels, glue, screw - nails corner
                                        blocks and machine nails
                                    </li>
                                    <li>
                                        Arms, backs and seats are structurally reinforced
                                    </li>
                                </ul>
                                <Button type="primary" className="btn">
                                    Add To Cart
                                </Button>
                            </div>
                        </div>
                        <div className="Banner-right">
                            <div className="banner-gradient-one">
                                <div className="banner-gradient-two">
                                </div>
                                <div className="banner-gradient-three">
                                </div>
                            </div>
                            <img src={'/assets/images/cue.png'} alt="loading.." />
                        </div>
                    </div>
                </div>
            </Col>

        </Row>
    )
};
export default DiscountItem; 