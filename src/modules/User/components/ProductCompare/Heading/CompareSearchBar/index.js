import { Col, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import CompareProductDropDown from './DropDown'

function CompareSearchBar() {
    const [p1, setp1] = useState()
    const [p2, setp2] = useState()
    const [active, setative] = useState()
    const [typed, settyped] = useState(false)
    useEffect(() => {
        let id = setTimeout(() => {
            if ((active === 1 && p1) || (active === 2 && p2))
                settyped(true)
        }, 1500);
        return () => {
            clearTimeout(id)
        }
    }, [p1, p2, active])
    const handleinput = (active, e) => {
        settyped(false)
        setative(active)
        if (active === 1) {
            setp1(e)
        }
        else {
            setp2(e)
        }
    }
    return (
        <Row className='SectionPadding CompareSearchBar'>
            <Col className='CompareSearchBarCol' span={24}>
                <Row gutter={[20, 10]} align="middle" justify={"space-between"}>
                    <Col md={10} sm={24} xs={24}>
                        <Row
                            align={"middle"}
                            gutter={[
                                { lg: 20, md: 10, sm: 10, xs: 10 },
                                { lg: 20, md: 10, sm: 10, xs: 10 }]}>
                            <Col sm={12} xs={24}>
                                <Input
                                    onChange={e => handleinput(1, e.currentTarget.value)}
                                    placeholder='search product...'
                                    type='text' />
                            </Col>
                            <Col sm={12} xs={24}>
                                <Input
                                    onChange={e => handleinput(2, e.currentTarget.value)}
                                    placeholder='search product...'
                                    type='text' />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={8} md={10} sm={24} xs={24}>
                        <Row align={"middle"} gutter={[10, 10]}>
                            <Col sm={8} xs={24}>
                                <Select
                                    style={{ width: "100%" }}
                                    options={
                                        Array(20).fill(null).map((e, i) => {
                                            return {
                                                label: 'less than ' + (i + 1) * 100,
                                                value: (i + 1) * 100
                                            }
                                        })

                                    }
                                    placeholder='Price'
                                    type='text' />
                            </Col>
                            <Col sm={8} xs={24}>
                                <Select
                                    style={{ width: "100%" }}
                                    options={[
                                        { label: "Online", value: "online" },
                                        { label: "Local", value: "local" }]}
                                    placeholder='Vendor Type'
                                    type='text' />
                            </Col>
                            <Col sm={8} xs={24}>
                                <Input
                                    placeholder='Region'
                                    type='text' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {typed ? <CompareProductDropDown value={p1 || p2} /> : null}

            </Col>
        </Row>
    )
}

export default CompareSearchBar