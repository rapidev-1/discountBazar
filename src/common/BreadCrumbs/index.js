import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumbs({ value }) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to={"/"}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to={`/${value}`}>{value}</Link>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadCrumbs