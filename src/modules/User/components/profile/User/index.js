import { Col, Image, Row, Typography } from 'antd'
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGeolocation from '../../../../../common/hooks/useGeoLocation';
import Map from '../../../../../common/map'
import { setdefault } from '../../../../../Store/Features/mapslice';

function User() {
    const src = false;
    useGeolocation()
    const dispatch = useDispatch()
    const { address, coordu, loading } = useSelector(state => state.map)

    useEffect(() => {
        const lat1 = 33.683739
        const lng1 = 73.011259
        dispatch(setdefault([lat1, lng1]))
    }, [])



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
                                (coordu.length !== 0) ?
                                    <Map
                                        zoom={14}
                                        height={300}
                                        routing={false}
                                    />
                                    : null
                            }
                        </Fragment>
                }
            </Col>
        </Row>
    )
}

export default User