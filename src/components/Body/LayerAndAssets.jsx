import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu , Breadcrumb} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Canvasbody from './Canvasbody';
const { Sider, Header, Content, Footer } = Layout;

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

const LayerAndAssets = () => {
    const [leftCollapse, setleftCollapse] = useState(false);
    const [rightCollapse, setRightCollapse] = useState(false);

    return (
        <Layout style={{
            marginTop: '-0.5px'
        }}>
            <Sider
                style={{
                    overflow: 'none',
                    height: '100vh',
                    left: 0,
                    position: 'relative',
                }}
                collapsible
                collapsed={leftCollapse}
                onCollapse={value => setleftCollapse(value)}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <Canvasbody/>
            </Layout>
            <Sider
                style={{
                    overflow: 'none',
                    height: '100vh',
                    right: 0,
                    position: 'relative',
                }}
                collapsible
                collapsed={rightCollapse}
                onCollapse={value => setRightCollapse(value)}
            >
                <div className="logo" />
                <Menu
                className='Sohaib'
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
            </Sider>
        </Layout>
    );
};

export default LayerAndAssets;
