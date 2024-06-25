import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { HOME_PATH, TEST_PATH } from '../routes/constant';


const getItem = (
    label,
    key,
    icon,
    children,
) => {
    return {
        key,
        icon,
        children,
        label,
    } ;
};


export const getMenus = () => {
    return [
        getItem('菜单1', HOME_PATH, <PieChartOutlined />),
        getItem('菜单2', TEST_PATH, <DesktopOutlined />),
    ];
};
