import { Grid, Row, Typography } from 'antd'
import React from 'react'

function CenterHeading({ heading }) {
    const breakpoints = Grid.useBreakpoint()
    const condition = breakpoints['sm'] || breakpoints['xs']
    return (
        <Row justify={"center"}>
            <Typography>
                <Typography.Title
                    level={2}
                    ellipsis={{ rows: condition ? 2 : 1 }}
                    className="HeadingDark">
                    {heading}
                </Typography.Title>
            </Typography>
        </Row>
    )
}

export default CenterHeading