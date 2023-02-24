import React from 'react'
import { Tabs } from "antd";
import TabOne from "./tab1/Index"
import TabTwo from "./tab2/Index"
import TabThree from "./tab3/Index"
import TabFour from "./tab4/map";
function Index() {
  return (
    <div className='SectionPadding tabs-product'>
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          label: "Description",
          key: "1",
          children: <TabOne />,
        },
        {
          label: "Additional Info",
          key: "2",
          children: <TabTwo/>,
        },
        {
          label: "Reviews",
          key: "3",
          children: <TabThree/>,
        },
        {
          label: "Map",
          key: "4",
          children: <TabFour/>,
        },
      ]}
    />
    </div>
  );
}

export default Index