import React from "react";
import { Image, Row, Col, Button } from "antd";
import img1 from "../../../../../../common/Images/bag1.png";
import img2 from "../../../../../../common/Images/bag2.png";
import img3 from "../../../../../../common/Images/bag3.png";
import img4 from "../../../../../../common/Images/bag4.png";
import DiscountBazarIcon from "../../../../../../common/Icons";
import Rating from "../../../../../../common/Product/rating"
import HeadingCustom from "../../../../../../common/Text/HeadingCustom"
import { useNavigate } from "react-router-dom";
function ProductInfo() {
  const navigate = useNavigate()
  return (
    <div className="section">
      <Row
        justify={"space-between"}
        gutter={[10, 10]}
        className="product-info">
        <Col lg={10} md={10} sm={24} xs={24}>
          <Image.PreviewGroup>
            <Row gutter={[5, 5]} className="imgcol">
              <Col
                className="smallerimages"
                lg={{ span: 7, order: 0 }}
                md={{ span: 24, order: 1 }}
                sm={{ span: 24, order: 2 }}
                xs={{ span: 24, order: 2 }}
              >
                <Row gutter={[5, 10]}>
                  <Col lg={24} md={{ span: 8 }}>
                    <Image src={img2} alt="Slow Internet :( " />
                  </Col>
                  <Col lg={24} md={{ span: 8 }}>
                    <Image src={img3} alt="Slow Internet :( " />
                  </Col>
                  <Col lg={24} md={{ span: 8 }}>
                    <Image src={img4} alt="Slow Internet :( " />
                  </Col>
                </Row>
              </Col>
              <Col
                sm={{ span: 24, order: -1 }}
                xs={{ span: 24, order: -1 }}
                lg={17}
                md={{ span: 24, order: 0 }} >
                <Image src={img1} className="imageBig" alt="Slow Internet :( " />
              </Col>
            </Row>
          </Image.PreviewGroup>
        </Col>
        <Col lg={14} md={14} sm={24} xs={24} className="textCol">
          <div className="SectionPadding" style={{ height: "100%" }}>
            <Row>
              <Col span={24}>
                <HeadingCustom
                  className="producttitle"
                  heading={"Playwood arm chair"} />
              </Col>
              <Col span={24} className="flex vfcenter">
                <Rating className="resetmargin" />
                <HeadingCustom
                  small
                  heading={'(22)'} />
              </Col>
              <Col span={24} style={{ paddingBlock: "1rem" }}>
                <HeadingCustom
                  small
                  heading={'pkr32.00'} />
              </Col>
              <Col span={24} >
                <p className="textLighter truncate4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita officiis, blanditiis consectetur numquam fuga sapiente iure? Non rerum eum nisi voluptatem nulla, adipisci consequuntur aspernatur iste quas, sunt saepe.
                </p>
              </Col>
              <Col span={24} >
                <span>
                  <HeadingCustom
                    small
                    heading={'Categories'} />
                </span>
                <p className="textLighter truncate4">
                  Cricket, FootBall, Hocky
                </p>
              </Col>
              <Col span={24} >
                <Button className="btn">
                  <DiscountBazarIcon icon={"wishlist"} text="add to wishlist" />
                </Button>

              </Col>
              <Col
                span={24}
                className="flex vfcenter"
                style={{ gap: "5px", marginTop: "10px" }} >
                <Button className="btn">
                  <DiscountBazarIcon text={"add to cart"} icon={"cart"} />
                </Button>
                <Button className="btn" onClick={() => navigate('/productcompare')}>
                  <DiscountBazarIcon text={"Compare Product"} icon={""} />
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row >
    </div>
  );
}

export default ProductInfo;
