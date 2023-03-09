import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type };
}
const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />),
    getItem('Order History', 'sub2', <AppstoreOutlined />),
    getItem('Navigation Three', 'sub4', <SettingOutlined />),
];
const onClick = (e) => {
    console.log('click', e);
};
const ProfileMenu = () => (
    <Menu
        className='profilemenu'
        onClick={onClick}
        mode="vertical"
        items={items}
    />
);
export default ProfileMenu;