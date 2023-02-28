import { Grid, Row, Typography } from 'antd'
import React from 'react'

function CenterHeading({ heading, rows, small, className }) {
    const breakpoints = Grid.useBreakpoint()
    const condition = breakpoints['sm'] || breakpoints['xs']
    return (
        <Row justify={"center"}>
            <Typography>
                <Typography.Title
                    level={2}
                    ellipsis={{ rows: condition ? rows ? rows : 3 : 1 }}
                    className={`HeadingDark ${small && 'small'} ${className}`}>
                    {heading}
                </Typography.Title>
            </Typography>
        </Row>
    )
}

export default CenterHeading