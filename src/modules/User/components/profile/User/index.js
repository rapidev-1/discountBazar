import { Col, Image, Row, Typography } from 'antd'
import { Fragment } from 'react';
import useGeolocation from '../../../../../common/hooks/useGeoLocation';
import Map from '../../../../../common/map'

function User() {
    const src = false;
    const { coordinates, address, loading } = useGeolocation()

    return (
        <Row justify={"space-between"} className="profileSub User">
            <Col md={24} sm={24} className="nameimage">
                <Image src={src ? src : "/assets/images/user.jpeg"} className="profile" />
                <Typography>
                    <Typography.Title level={3}>
                        Aman Ullah
                    </Typography.Title>
                </Typography>
            </Col>
            <Col span={24} className="address">

                {
                    loading ? "loading...." :
                        <Fragment>
                            <h3><span>{address}</span></h3>
                            {
                                (coordinates.length !== 0) ?
                                    <Map
                                        height={300}
                                        routing={false}
                                        la1={coordinates[0]}
                                        ln1={coordinates[1]} />
                                    : null
                            }
                        </Fragment>
                }
            </Col>
        </Row>
    )
}

export default User