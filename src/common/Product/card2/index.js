import { useNavigate } from 'react-router-dom';
import { Card, Row, Typography } from 'antd';
import ProductIcons from "../productIcons"
import RatingStars from '../rating';

const { Meta } = Card;
function ProductsCard2({ noicons }) {
    const navigate = useNavigate()
    const TitltComponent = () => {
        return (
            <Typography>
                <Typography.Title
                    onClick={() => noicons ? null : navigate(`/product/123`)}
                    level={5}
                    className="SearchProductTitle"
                    ellipsis={{ rows: 1 }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quos inventore. Reprehenderit amet impedit sunt, ratione non dolorum aspernatur odio. Rem natus sequi laborum error, totam numquam voluptatum omnis, eveniet quo voluptas laboriosam quasi alias doloribus perferendis velit aliquid illo similique ut voluptatibus quisquam minima sunt. Laboriosam nesciunt, architecto molestias eveniet dolores exercitationem repellendus eligendi totam facere quae doloremque!
                </Typography.Title>
                <Typography.Text className='SearchProductPrice flex vfcenter'>
                    Rs 26.00 <RatingStars />
                </Typography.Text>
            </Typography>
        )
    }
    const DescriptionComponent = () => {
        return (
            <Row>
                <Typography>
                    <Typography.Text
                        className="SearchProductDesc truncate2 textLighter"
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quos inventore. Reprehenderit amet impedit sunt, ratione non dolorum aspernatur odio. Rem natus
                    </Typography.Text>
                </Typography>
                {noicons ? null : <ProductIcons show />}
            </Row>
        )
    }
    return (
        <Card
            hoverable
            className='serachpageProductCard'
            cover={
                <img
                    loading="lazy"
                    className='productcardimg'
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <Meta
                title={<TitltComponent />}
                description={<DescriptionComponent />} />
        </Card>
    );

}

export default ProductsCard2