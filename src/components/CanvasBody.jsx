import {
  Button,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import canvasbg from '../assests/images/canvasbg.png';
import { ImDownload2, ImUpload2 } from 'react-icons/im';
import { BsCardImage } from 'react-icons/bs';
import { BiText } from 'react-icons/bi';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { SiIconify } from 'react-icons/si';
import { FaDrawPolygon, FaShapes } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { CgGhostCharacter } from 'react-icons/cg';

const CanvasBody = () => {
  return (
    <Stack margin={'0px !important'} direction={'row'} height={'full'}>
      {/* Layers and Assest */}
      <Stack  justify={'center'} pl={'2'}>
        <Menu placement="right">
          <MenuButton
            bgColor={'#CD7077'}
            _hover={{ bgColor: '#205375', color: 'white' }}
            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
            _focus={{}}
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineDoubleRight />}
            variant="outline"
          />
        </Menu>
        <Menu placement="right">
          <MenuButton
            bgColor={'#CD7077'}
            _hover={{ bgColor: '#205375', color: 'white' }}
            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
            _focus={{}}
            as={IconButton}
            aria-label="Options"
            icon={<SiIconify />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<BiText size={'2em'} />}>Add Text</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right">
          <MenuButton
            bgColor={'#CD7077'}
            _hover={{ bgColor: '#205375', color: 'white' }}
            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
            _focus={{}}
            as={IconButton}
            aria-label="Options"
            icon={<BiText />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<BiText size={'2em'} />}>Add Text</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right">
          <MenuButton
            bgColor={'#CD7077'}
            _hover={{ bgColor: '#205375', color: 'white' }}
            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
            _focus={{}}
            as={IconButton}
            aria-label="Options"
            icon={<BsCardImage />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<BiText size={'2em'} />}>Add Text</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right">
          <MenuButton
            bgColor={'#CD7077'}
            _hover={{ bgColor: '#205375', color: 'white' }}
            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
            _focus={{}}
            as={IconButton}
            aria-label="Options"
            icon={<FaShapes />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<BiText size={'2em'} />}>Add Text</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right">
          <MenuButton
            bgColor={'#CD7077'}
            _hover={{ bgColor: '#205375', color: 'white' }}
            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
            _focus={{}}
            as={IconButton}
            aria-label="Options"
            icon={<FaDrawPolygon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<BiText size={'2em'} />}>Add Text</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right">
          <MenuButton
            bgColor={'#CD7077'}
            _hover={{ bgColor: '#205375', color: 'white' }}
            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
            _focus={{}}
            as={IconButton}
            aria-label="Options"
            icon={<VscCode />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<BiText size={'2em'} />}>Add Text</MenuItem>
          </MenuList>
        </Menu>
        <Menu placement="right">
          <MenuButton
            bgColor={'#CD7077'}
            _hover={{ bgColor: '#205375', color: 'white' }}
            _active={{ bgColor: '#205375', color: 'white', border: 'none' }}
            _focus={{}}
            as={IconButton}
            aria-label="Options"
            icon={<CgGhostCharacter />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<BiText size={'2em'} />}>Add Text</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
      {/* Canvas */}
      <Stack
        flex={'3'}
        bgColor={'#F3F3F3'}
        bgImage={canvasbg}
        boxShadow={'inset 0px -5px 10px 2px rgba(0,0,0,0.75)'}
      >
        <Text>Canvas</Text>
      </Stack>
      {/* Designer */}
      <Stack margin={'0px !important'}>
        <Menu placement="left">
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} variant="ghost">
                {isOpen ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
              </MenuButton>
              <MenuList orientation="horizontal">
                <MenuItem>Map</MenuItem>
                <MenuItem>Image</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Stack>
    </Stack>
  );
};

export default CanvasBody;
