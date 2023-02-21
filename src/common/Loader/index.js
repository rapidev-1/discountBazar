import { Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'

function Loader() {
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            document.body.style.height = "0"
            setloading(false)
        }, 5000);
    }, [])

    if (!loading) return null
    document.body.style.height = undefined
    return (
        <Row className='loader'>
            <Spin size="large" />
        </Row>
    )
}

export default Loader