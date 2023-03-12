import React, { useEffect } from 'react'
import { Tabs } from "antd";
import TabOne from "./tab1/Index"
import TabTwo from "./tab2/Index"
import TabThree from "./tab3/Index"
import TabFour from "./tab4/map";
import { setcoordsu } from '../../../../../../Store/Features/mapslice';
import { useDispatch, useSelector } from 'react-redux';
function Index() {
  const API = `Bc1LQyg5QeaWzw9L8zfK~7O9Tke0QwMIEuXsVowuTlA~AkTXMYBKWN0El9GKnDwPxeiahMy747SLbW6_hcVXCn440xS4Z5Smw-nlS07Xro8e`
  // const API = `ApFKhFC93duxrb4IlnF3SYHJnIFkRI_3XquTu16ha9j16b_1Ina2YLFgvdh15_4v`

  const { coordu, coordv } = useSelector(state => state.map)

  const dispatch = useDispatch()
  useEffect(() => {
    if (coordu
      .length !== 2) return
    const intervalId = setInterval(() => {
      dispatch(setcoordsu([coordu[0] - 0.0001, coordu[1] + 0.0001]))
    }, 1000);
    return () => {
      clearInterval(intervalId)
    }
  }, [coordu, dispatch])

  return (
    <div className='section tabs-product'>
      <Tabs
        destroyInactiveTabPane
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
            children: <TabTwo />,
          },
          {
            label: "Reviews",
            key: "3",
            children: <TabThree />,
          },
          {
            label: "Map",
            key: "4",
            children: <TabFour apiKey={API} />,
          },
        ]}
      />
    </div>
  );
}

export default Index