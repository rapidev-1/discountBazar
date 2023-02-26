import React from 'react';
import { Col, Row } from "antd";
import { cards } from "../../../../../../utility/galleryProduct/index";
import Card from "../../../../../common/Cards/index"
 
function Index({ vendorValue }) {
  return (
    <div className="SectionPadding related-container">
      <h1>Related Products</h1>
      <div className="related-box">
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          {cards.map((e, i) => {
            return (
              <Col xl={6} lg={8} md={12} sm={12} xs={24}>
                <Card
                  key={i}
                  price={e.desc}
                  img={e.img}
                  vendorValue={vendorValue}
                  title={e.title}
                  vendor={e.vender}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Index
