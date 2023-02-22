import { Row, Spin } from 'antd'
import React, { useState } from 'react'

function Loader() {
    const [loading, setloading] = useState(true)
    window.addEventListener("load", () => setloading(false))
    if (!loading) return null
    document.body.style.height = undefined
    return (
        <Row className='loader'>
            <Spin size="large" />
        </Row>
    )
}

export default Loader