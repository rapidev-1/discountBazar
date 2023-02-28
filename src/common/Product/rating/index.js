import { Rate } from 'antd';
import { useState } from 'react';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const RatingStars = () => {
    const [value, setValue] = useState(3);
    return (
        <span className='ratingstars'>
            <Rate allowClear tooltips={desc} onChange={setValue} value={value} />
        </span>
    );
};
export default RatingStars;