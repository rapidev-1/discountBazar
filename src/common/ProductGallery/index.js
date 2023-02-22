import React from 'react'
import Card from "./Cards"
import {cardsData} from '../../utility/galleryProduct/index';
import { Select, Space, Input,Col, Row } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
function index({vendorValue}) {
  return (
    <div className="gallery-container">
      <div className="gallery-container-up SectionPadding">
        <div className="gallery-container-up-left">
          <h1> A World of Independent Shops at Your Fingertips.</h1>
        </div>
        <div className="gallery-container-up-right">
          <div className="gallery-container-up-right-items">
            <p>Sort By:</p>
            <Space wrap>
              <Select
                defaultValue="lucy"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </Space>
          </div>
          <div className="gallery-container-up-right-items">
            <p>View:</p>
            <Input />
          </div>
        </div>
      </div>
      <div className="gallery-container-down SectionPadding">
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {cardsData.map((e,i)=>{
              return (
                <Col lg={6} md={12} sm={12} xs={24}>
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

export default index