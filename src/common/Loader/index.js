import { Grid, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'

function Loader() {
    const [loading, setloading] = useState(true)
    const breakpoints = Grid.useBreakpoint()


    useEffect(() => {
        var timeout;
        if (breakpoints['xs'])
            timeout = setTimeout(() => {
                setloading(false)
                window.removeEventListener("load")
            }, 3000);
        else {
            window.addEventListener("load", () => setloading(false))
        }
        return () => {
            window.removeEventListener("load")
            clearTimeout(timeout)
        }
    }, [breakpoints])
    if (!loading) return null
    document.body.style.height = undefined
    return (
        <Row className='loader'>
            <Spin size="large" />
        </Row>
    )
}

export default Loader