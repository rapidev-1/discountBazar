import { notification } from "antd";

const useNotifications = () => {
    const placement = 'topRight'
    const openNotification = (message) => {
        notification.info({
            message: `Notification`,
            description: message,
            placement,
            duration: 10
        });
    };
    return { openNotification };
};
export default useNotifications;