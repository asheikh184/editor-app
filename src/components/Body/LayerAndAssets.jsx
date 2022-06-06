import React, { useState, useRef } from 'react';
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
  BiRectangle
} from 'react-icons/all';
import Icon from '@ant-design/icons';
import FabricCanvas from './FabricCanvas';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Button, Stack } from '@chakra-ui/react';
import FabricRectangle from '../objects/Shapes/FabricRectangle';
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
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>

              </Button>
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
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Input Field
              </Button>
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
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Images
              </Button>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Gifs
              </Button>
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
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Circle
              </Button>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon component={BiRectangle} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}} paddingEnd={'0 !important'}>
                <FabricRectangle/>
              </Button>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Triangle
              </Button>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Cube
              </Button>
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
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Polygon
              </Button>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Line
              </Button>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Arrow
              </Button>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Pen
              </Button>
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
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Chart
              </Button>
            </Menu.Item>
            <Menu.Item key="14">
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Code
              </Button>
            </Menu.Item>
            <Menu.Item key="15">
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                iFrame
              </Button>
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
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                Video
              </Button>
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
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>
                SVG
              </Button>
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
