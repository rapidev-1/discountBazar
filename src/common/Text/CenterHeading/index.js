import { Row, Typography } from 'antd'
import React from 'react'

function CenterHeading({ heading }) {
    return (
        <Row justify={"center"} className="CenterHeading">
            <Typography>
                <Typography.Title level={2} ellipsis={{ rows: 1 }}>
                    {heading}
                </Typography.Title>
            </Typography>
        </Row>
    )
}

export default CenterHeading