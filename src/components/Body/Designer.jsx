import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Canvasbody from './Canvasbody';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
        getItem('Team 1', '6'),
        getItem('Team 2', '8'),
    ]),
    getItem('Files', '9', <FileOutlined />),
];

const Designer = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{
            marginTop: '-0.5px'
        }}>
            <Sider
                style={{
                    overflow: 'none',
                    height: '100vh',
                    right: 0,
                    position: 'fixed',
                }}
                collapsible
                collapsed={collapsed}
                onCollapse={value => setCollapsed(value)}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
            </Sider>
        </Layout>
    );
};

export default Designer;
