import { Rate } from 'antd';
import { useState } from 'react';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const RatingStars = ({ className }) => {
    const [value, setValue] = useState(3);
    return (
        <span
            className={`ratingstars ${className ? className : ""}`}>
            <Rate
                allowClear
                tooltips={desc}
                onChange={setValue}
                value={value} />
        </span>
    );
};
export default RatingStars;