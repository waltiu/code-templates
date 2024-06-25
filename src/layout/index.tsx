import { Layout, Menu } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getUrlPath } from '../utils/url';
import { MenuItem, getMenus } from './menu';
import styles from './index.module.less';

const { Header, Content, Sider } = Layout;

const LayoutContainer: React.FC = () => {
    const navigate = useNavigate();
    const menusItems = getMenus();
    const [selectedKeys, setSelectKeys] = useState<string[]>([])


    const onMenuItemClick = (menu: MenuItem) => {
        navigate(menu?.key as string);
        setSelectKeys([menu?.key as string])
    };

    useEffect(() => {
        setSelectKeys([getUrlPath()])
    }, [])

    return (
        <Layout className={styles.layout}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo">
                </div>
            </Header>
            <Layout className={styles.container}>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        selectedKeys={selectedKeys}
                        style={{ height: '100%', borderRight: 0 }}
                        items={menusItems}
                        onClick={onMenuItemClick}
                    />
                </Sider>
                <Layout>
                    <Content className={styles["outlet-container"]}>
                        <Suspense fallback={<div>loading...</div>}>
                            <Outlet />
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default LayoutContainer;
