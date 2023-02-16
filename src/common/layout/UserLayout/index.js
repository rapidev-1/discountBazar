import { Outlet } from 'react-router-dom'
import UserFooter from './Footer'
import { Layout } from 'antd';
import UserNav from './Nav'

const { Header, Footer, Content } = Layout;


function UserLayout() {
    return (
        <Layout className='layout userlayout'>
            {/* <Header style={{ background: 'unset', color: "unset" }}> */}
            {/* <UserNav /> */}
            {/* </Header> */}
            <Content className='contentOutlet'>
                <Outlet />
            </Content>
            {/* <Footer> */}
            {/* <UserFooter /> */}
            {/* </Footer> */}
        </Layout>
    )
}

export default UserLayout