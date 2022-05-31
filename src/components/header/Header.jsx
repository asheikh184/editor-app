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
import React from 'react';
import logo from '../../assests/images/logo.png';
import canvasbg from '../../assests/images/canvasbg.png';
import { ImDownload2, ImUpload2 } from 'react-icons/im';
import { BsCardImage } from 'react-icons/bs';
import { BiText } from 'react-icons/bi';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { SiIconify } from 'react-icons/si';
import { FaDrawPolygon, FaShapes } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { CgGhostCharacter } from 'react-icons/cg';

const Header = () => {
  return (
    <>
      {/* Header */}
      <Stack
        minH={'16'}
        bgColor={'#0E2634'}
        align={'center'}
        px={'3'}
        direction={'row'}
        justify={'end'}
      >
        <Img src={logo} position={'absolute'} left={'1'} boxSize={'36'} />
        <Stack direction={'row'}>
          <Button
            bgColor={'#CD6F71'}
            color={'white'}
            _hover={{ bgColor: '#91979E', color: '#CD6F71' }}
          >
            Image Mapping
          </Button>
          <Button
            bgColor={'#CD6F71'}
            color={'white'}
            _hover={{ bgColor: '#91979E', color: '#CD6F71' }}
          >
            Work flow
          </Button>
        </Stack>
      </Stack>
      {/* Save and upload file  */}
      <Stack
        margin={'0px !important'}
        color={'black'}
        bgColor={'#205375'}
        direction={'row'}
        justify={'flex-end'}
        pr={'2'}
      >
        <IconButton
          _hover={{ color: '#cd6f71' }}
          _focus={{}}
          _active={{}}
          variant={'ghost'}
          icon={<ImDownload2 />}
        />
        <IconButton
          _hover={{ color: '#cd6f71' }}
          _focus={{}}
          _active={{}}
          variant={'ghost'}
          icon={<ImUpload2 />}
        />
        <IconButton
          _hover={{ color: '#cd6f71' }}
          _focus={{}}
          _active={{}}
          variant={'ghost'}
          icon={<BsCardImage />}
        />
      </Stack>
    </>
  );
};

export default Header;
