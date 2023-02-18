import { Grid, Row, Typography } from 'antd'
import React from 'react'

function HeadingCustom({ heading, level }) {
    const breakpoints = Grid.useBreakpoint()
    const condition = breakpoints['sm'] || breakpoints['xs']
    return (
        <Row>
            <Typography>
                <Typography.Title
                    level={level ? level : 2}
                    ellipsis={{ rows: condition ? 2 : 1 }}
                    className="HeadingDark HeadingCustom">
                    {heading}
                </Typography.Title>
            </Typography>
        </Row>
    )
}

export default HeadingCustom