import { Avatar, Col, Drawer, Row, Typography } from 'antd'
import { Link } from "react-router-dom"
import React from 'react'
import Logo from '../../../../common/Logo'
import SearchBar from '../../../../common/SearchBar'

const Links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Shop", url: "/Shop" },
    { title: "Contact", url: "/contact" },
    { title: "Products", url: "/product" },
    { title: "Wishlist", url: "/wishlist" },
    { title: "Cart", url: "/cart" },
    { title: "Login", url: "/login" },
]

function UserDrawer({ onClose, open }) {
    const DrawerHeader = () => {
        return (
            <Row justify={"space-between"}>
                <Logo />
                <Row align={"center"} gutter={[10, 10]}>
                    <Col className='flex vfcenter'>
                        <Avatar />
                    </Col>
                    <Col className='flex vfcenter'>
                        <Typography>
                            <Typography.Text
                                style={{ maxWidth: "90px" }}
                                ellipsis={{
                                    rows: 1
                                }} >
                                Aman Ullah
                            </Typography.Text>
                        </Typography>
                    </Col>
                </Row>
            </Row>
        )
    }
    const onSearch = (e) => { console.log(e); onClose() }
    return (
        <Drawer
            title={<DrawerHeader />}
            placement="right"
            onClose={onClose}
            closeIcon={null}
            className="userDrawer"
            open={open}>
            <Row className='drawerNav'>
                <SearchBar
                    onSearch={onSearch}
                    icon={'search'}
                />
                {
                    Links.map((e, i) =>
                        <Col
                            span={24}
                            key={i}>
                            <Link
                                onClick={onClose}
                                className='urlLinks'
                                to={e.url}>
                                {e.title}
                            </Link>
                        </Col>
                    )
                }
            </Row>
        </Drawer>)
}

export default UserDrawer