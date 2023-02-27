import { cardsData } from "../../utility/galleryProduct/index.js"
import FilterBar from "../../common/FilterBar"
import Card from "../Product/cards";
import { Col, Row } from "antd";

function Index({ vendorValue }) {
  return (
    <div className="gallery-container">
      <FilterBar />
      <div className="gallery-container-down SectionPadding">
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          {cardsData.map((e, i) => {
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

export default Index;
