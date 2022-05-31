import { Button, IconButton, Img, Stack } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assests/images/logo.png';
import { ImDownload2, ImUpload2 } from 'react-icons/im';
import { BsCardImage } from 'react-icons/bs';

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
