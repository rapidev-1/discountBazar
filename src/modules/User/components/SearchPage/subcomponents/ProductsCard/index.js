import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
function SearchPageProductsCard() {
    return (
        <Card
            className='serachpageProductCard'
            hoverable
            cover={<img className='productcardimg' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    );

}

export default SearchPageProductsCard