import { Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'

function Loader() {
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 4000);
    }, [])

    if (!loading) return null
    return (
        <Row style={{
            position: "fixed",
            display: "grid",
            placeContent: "center",
            background: "white",
            width: "100vw",
            height: "100vh",
            zIndex: "10000"
        }}>
            <Spin size="large" />
        </Row>
    )
}

export default Loader