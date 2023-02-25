import React, { useEffect, useState } from "react";
import Card from "../Cards";
import { cardsData } from "../../utility/galleryProduct/index";
import { Select, Grid, Input, Col, Row } from "antd";

function Index({ vendorValue }) {
  const breakpoints = Grid.useBreakpoint();
  const [value, setvalue] = useState()
  useEffect(() => {
    if (breakpoints['xs'])
      setvalue("Sort By")
    else setvalue("") 
  }, [breakpoints])
  const handleChange = (value) => {
    setvalue(value)
  };
  return (
    <div className="gallery-container">
      <div className="gallery-container-up SectionPadding">
        <div className="gallery-container-up-left">
          <h1> A World of Independent Shops at Your Fingertips.</h1>
        </div>
        <div className="gallery-container-up-right">
          <div className="gallery-container-up-right-items">
            <p>Sort By:</p>
            {/* <Space wrap> */}
            <Select
              className="gallery-container-up-right-items-select"
              // defaultValue={condition ? "Sort By" : undefined}
              value={value}
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
            {/* </Space> */}
          </div>
          <div className="gallery-container-up-right-items">
            <p>View:</p>
            <Input placeholder={value ? "View" : ""} />
          </div>
        </div>
      </div>
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
