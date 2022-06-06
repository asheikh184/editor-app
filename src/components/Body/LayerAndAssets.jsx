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
} from 'react-icons/all';
import Icon from '@ant-design/icons';
import FabricCanvas from './FabricCanvas';
import FabricRectangle from '../objects/FabricRectangle';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Button, Stack } from '@chakra-ui/react';
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
  const [collapsed, setcollapsed] = useState(false)
  const onCollapse = (collapsed) => {
    setcollapsed(collapsed)
  }

  return (
    <Layout
      style={{
        marginTop: '-0.5px',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <SubMenu key="sub1"
            title={<span><Icon component={SiIconify} /><span>Stickers</span></span>}

          >
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}><FabricRectangle />  </Button>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2"
            title={<span><Icon component={BiText} /><span>Text</span></span>}
          >
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Input Field </Button>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3"
            title={<span><Icon component={BsCardImage} /><span>Image</span></span>}
          >
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Images  </Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Gifs</Button>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub4"
            title={<span><Icon component={FaShapes} /><span>Shapes</span></span>}
          >
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Circle </Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Rectangle </Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Triangle </Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Cube </Button>
            </Menu.Item>
          </SubMenu>


          <SubMenu key="sub5"
            title={<span><Icon component={FaDrawPolygon} /><span>Drawing</span></span>}

          >
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Polygon</Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Line</Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Arrow</Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Pen</Button>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub6"
            title={<span><Icon component={BsCodeSlash} /><span>Element</span></span>}
          >
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Chart</Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Code</Button>
            </Menu.Item>
            <Menu.Item key="1" >
              <Icon component={SiIconify} />
              <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>iFrame</Button>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="1" >
            <Icon component={GrYoutube} />
            <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>Video</Button>
          </Menu.Item>
          <Menu.Item key="1" >
            <Icon component={CgGhostCharacter} />
            <Button variant={'ghost'} _hover={{}} _focus={{}} _active={{}}>SVG</Button>
          </Menu.Item>
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
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
    </Layout>
  );
};

export default LayerAndAssets;
