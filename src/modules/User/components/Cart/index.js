import React from 'react'
import Banner from '../../../../common/Banner'
import Main from './subcomponent/main/Main';

function index() {
  return (
    <div>
      <Banner title={"Cart"} />
      <Main/>
    </div>
  );
}

export default index