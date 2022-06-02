import React, { useState , useRef } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Canvasbody from './Canvasbody';
import {
  SiIconify,
  BiText,
  BsCardImage,
  FaShapes,
  FaDrawPolygon,
  BsCodeSlash,
  GrYoutube,
  CgGhostCharacter,
} from 'react-icons/all';

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
  getItem('Stickers', 'sub1', <SiIconify />, [getItem('Markers', '1')]),
  // getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Text', 'sub2', <BiText />, [getItem('Input Field', '2')]),
  getItem('Image', 'sub3', <BsCardImage />, [
    getItem('Images', '3'),
    getItem('GIFS', '4'),
  ]),
  getItem('Shapes', 'sub4', <FaShapes />, [
    getItem('Circle', '5'),
    getItem('Rectangle', '6'),
    getItem('Triangle', '7'),
    getItem('Cube', '8'),
  ]),
  getItem('Drawing', 'sub5', <FaDrawPolygon />, [
    getItem('Poligon', '9'),
    getItem('Line', '10'),
    getItem('Arrow', '11'),
    getItem('Pen', '12'),
  ]),
  getItem('Element', 'sub6', <BsCodeSlash />, [
    getItem('Chart', '13'),
    getItem('Code', '14'),
    getItem('iframe', '15'),
  ]),
  getItem('Video', '1', <GrYoutube />),
  getItem('SVG', '2', <CgGhostCharacter />),
];

const LayerAndAssets = () => {
  const [leftCollapse, setleftCollapse] = useState(false);
  const [rightCollapse, setRightCollapse] = useState(false);


  return (
    <Layout
      style={{
        marginTop: '-0.5px',
      }}
    >
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
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Canvasbody />
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
          className="Sohaib"
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
