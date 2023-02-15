import Logo from '../../../Logo'
import { Row, Col, Input } from "antd"
import DiscountBazarIcon from '../../../Icons';
import { Link } from "react-router-dom"
const { Search } = Input

function Lowernavbar() {
  const onSearch = (value) => console.log(value);

  const Links = [
    { title: "Home", url: "/" },
    { title: "Shop", url: "/shop" },
    { title: "Contact", url: "/contact" },
    { title: "Products", url: "/products" },

  ]
  return (
    <Row className='lowernav' justify={"space-between"}>
      <Col md={12} sm={24} xs={24}>
        <Row style={{ width: "100%" }} align="middle">
          <Col xl={6} lg={4}>
            <Logo />
          </Col>
          <Row gutter={[30, 30]}>
            {
              Links.map((e) => {
                return (
                  <Col>
                    <Link to={e.url} key={e.title} className="urlLinks">
                      {e.title}
                    </Link>
                  </Col>
                )
              })
            }
          </Row>
        </Row>
      </Col>
      <Col md={12} sm={24} xs={24}>
        <Col xl={11} lg={10}>
          <Search
            placeholder="input search text"
            enterButton={
              <DiscountBazarIcon
                icon={"search"}
              />
            }
            size="middle"
            onSearch={onSearch}
          />
        </Col>
      </Col>
    </Row>
  )
}

export default Lowernavbar