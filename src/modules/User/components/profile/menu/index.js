import { SettingOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type };
}
const items = [
    getItem('User', 'user', <UserOutlined />),
    getItem('History', 'history', <AppstoreOutlined />),
    getItem('Settings', 'setting', <SettingOutlined />),
];

const ProfileMenu = ({ active, setactive }) => {
    const onClick = (e) => {
        setactive(`${e.key}`)
    };
    return (
        <Menu
            className='profilemenu'
            onClick={onClick}
            mode="vertical"
            activeKey={active}
            items={items}
        />
    );
}
export default ProfileMenu;