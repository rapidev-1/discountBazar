import { Grid, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'

function Loader() {
    const [loading, setloading] = useState(true)
    const breakpoints = Grid.useBreakpoint()


    useEffect(() => {
        var timeout;
        var func = () => setloading(false)
        if (breakpoints['xs'])
            timeout = setTimeout(() => {
                setloading(false)
                window.removeEventListener("load", func)
            }, 3000);
        else {
            window.addEventListener("load", () => func)
        }
        return () => {
            window.removeEventListener("load", func)
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