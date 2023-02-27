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
                <Link to={`/${String(value).toLowerCase().replace(/\s/g, "")}`}>{value}</Link>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadCrumbs