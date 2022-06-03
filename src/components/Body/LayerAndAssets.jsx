import React, { useState, useRef } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
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
  getItem('Stickers', 'sub1', <SiIconify />, [getItem('Markers', '1')]),
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
  getItem('Video', '16', <GrYoutube />),
  getItem('SVG', '17', <CgGhostCharacter />),
];

const LayerAndAssets = () => {
  const [leftCollapse, setleftCollapse] = useState(true);
  const [rightCollapse, setRightCollapse] = useState(true);

  return (
    <Layout
      style={{
        marginTop: '-0.5px',
      }}
    >
      <Sider
        style={{
          overflowY: 'auto',
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
      <Layout
        style={{
          overflow: 'auto',
        }}
        className="site-layout"
      >
        <Canvasbody />
      </Layout>
      <Sider
        style={{
          overflowY: 'auto',
          right: 0,
          position: 'relative',
        }}
        collapsible
        collapsed={rightCollapse}
        onCollapse={value => setRightCollapse(value)}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
    </Layout>
  );
};

export default LayerAndAssets;
