import { Row, Typography } from 'antd'
import React from 'react'

function CenterHeading({ heading }) {
    return (
        <Row justify={"center"}>
            <Typography>
                <Typography.Title
                    level={2}
                    ellipsis={{ rows: 1 }}
                    className="HeadingDark">
                    {heading}
                </Typography.Title>
            </Typography>
        </Row>
    )
}

export default CenterHeading