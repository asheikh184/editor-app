import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  SiIconify,
  BiText,
  BsCardImage,
  FaShapes,
  FaDrawPolygon,
  BsCodeSlash,
  GrYoutube,
  CgGhostCharacter,
  BiRectangle,
  CgShapeCircle,
} from 'react-icons/all';

import Icon from '@ant-design/icons';
import FabricCanvas from './FabricCanvas';
import FabricRectangle from '../objects/Shapes/FabricRectangle';
import FabricTextBox from '../objects/Shapes/FabricTextBox';
import FabricCircle from '../objects/Shapes/FabricCircle';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const MenuItemGroup = Menu.ItemGroup;

const LayerAndAssets = () => {
  const [leftCollapse, setleftCollapse] = useState(true);
  const [rightCollapse, setRightCollapse] = useState(true);
  const [collapsed, setcollapsed] = useState(false);
  const onCollapse = collapsed => {
    setcollapsed(collapsed);
  };

  return (
    <Layout
      style={{
        marginTop: '-0.5px',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon component={SiIconify} />
                <span>Stickers</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                {' '}
              </button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon component={BiText} />
                <span>Text</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Icon component={BiText} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                <FabricTextBox />
              </button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon component={BsCardImage} />
                <span>Image</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Images{' '}
              </button>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Gifs
              </button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon component={FaShapes} />
                <span>Shapes</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <button>
                <Icon component={CgShapeCircle} />
                <FabricCircle />
              </button>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon component={BiRectangle} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                <FabricRectangle />
              </button>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Triangle{' '}
              </button>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Cube{' '}
              </button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon component={FaDrawPolygon} />
                <span>Drawing</span>
              </span>
            }
          >
            <Menu.Item key="9">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Polygon
              </button>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Line
              </button>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Arrow
              </button>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Pen
              </button>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                <Icon component={BsCodeSlash} />
                <span>Element</span>
              </span>
            }
          >
            <Menu.Item key="13">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Chart
              </button>
            </Menu.Item>
            <Menu.Item key="14">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Code
              </button>
            </Menu.Item>
            <Menu.Item key="15">
              <Icon component={SiIconify} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                iFrame
              </button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub7"
            title={
              <span>
                <Icon component={GrYoutube} />
                <span>Video</span>
              </span>
            }
          >
            <Menu.Item key="16">
              <Icon component={GrYoutube} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Video
              </button>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub8"
            title={
              <span>
                <Icon component={CgGhostCharacter} />
                <span>SVG</span>
              </span>
            }
          >
            <Menu.Item key="17">
              <Icon component={CgGhostCharacter} />
              <button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                SVG
              </button>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout
        style={{
          overflow: 'auto',
        }}
        className="site-layout"
      >
        <FabricCanvas />
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
        <Menu theme="dark" mode="inline" />
      </Sider>
    </Layout>
  );
};

export default LayerAndAssets;
