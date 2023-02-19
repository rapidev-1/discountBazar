/* eslint-disable jsx-a11y/anchor-is-valid */
import { Input, Row, Col } from 'antd';
import DiscountBazarIcon from "../../../Icons"
import Logo from "../../../Logo"
import { Link } from "react-router-dom"

const Categories = {
    title: "Categories",
    array: [
        { title: "Games", url: "/categories/games" },
        { title: "Tablets", url: "/categories/tablets" },
        { title: "Cameras", url: "/categories/cameras" },
        { title: "Computers", url: "/categories/computers" },
        { title: "Waterproof", url: "/categories/waterproof" },
    ]
}

const CustomerCare = {
    title: "Customer Care",
    array: [
        { title: "FAQs", url: "/faqs" },
        { title: "MY Account", url: "/profile" },
        { title: "Privacy Policy", url: "/privacypoilicy" },
        { title: "Orders History", url: "/orderhistory" },
        { title: "Order Tracking", url: "/ordertracking" },
    ]
}

const Pages = {
    title: "Pages",
    array: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
        { title: "Products", url: "/products" },
        { title: "Login", url: "/login" },
    ]
}
const onSearch = () => { }
const UserFooter = () => (
    <Row gutter={[0, 20]} className="userFooter">
        <Col span={24} className="footerUpper">
            <Row gutter={[20, 20]}>
                <Col lg={7} md={24} sm={24} xs={24}>
                    <Logo />
                    <Input.Search
                        style={{ marginTop: "40px" }}
                        placeholder="Enter Your Email"
                        enterButton={
                            <DiscountBazarIcon
                                icon={"send"}
                            />
                        }
                        size="middle"
                        onSearch={onSearch}
                    />
                </Col>
                <Col md={0} lg={3} />
                <Col lg={4} md={24} sm={24} xs={24} className="footerCol">
                    <h2>{Categories.title}</h2>
                    <ul>
                        {
                            Categories.array.map((e, i) => {
                                return (
                                    <Link
                                        className='urlLinks'
                                        to={e.url}
                                        key={i}>
                                        {e.title}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col lg={5} md={24} sm={24} xs={24} className="footerCol">
                    <h2>{CustomerCare.title}</h2>
                    <ul>
                        {
                            CustomerCare.array.map((e, i) => {
                                return (
                                    <Link
                                        className='urlLinks'
                                        to={e.url}
                                        key={i}>
                                        {e.title}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col lg={4} md={24} sm={24} xs={24} className="footerCol">
                    <h2>{Pages.title}</h2>
                    <ul>
                        {
                            Pages.array.map((e, i) => {
                                return (
                                    <Link
                                        className='urlLinks'
                                        to={e.url}
                                        key={i}>
                                        {e.title}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </Col>
        <Col span={24} className="footerLower">
            <Row justify={"space-between"}>
                <Col md={12} sm={24} xs={24}>
                    ©Webecy - All Rights Reserved
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Row
                        justify={"end"}
                        style={{ width: "100%", gap: "20px" }}>
                        <DiscountBazarIcon
                            icon="facebook"
                            className={"footerIcon"} />
                        <DiscountBazarIcon
                            icon="twitter"
                            className={"footerIcon"} />
                        <DiscountBazarIcon
                            icon="instagram"
                            className={"footerIcon"} />
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default UserFooter