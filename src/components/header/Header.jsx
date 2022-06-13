import { Button, Icon, IconButton, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import logo from '../../assests/images/logo.png';
import SaveFile from '../objects/SaveFile'
import { AiFillDelete } from 'react-icons/all'
import ContextCanvas from '../../context/ContextCanvas';
import { useContext, useEffect } from 'react';
import meta from '../../assests/images/metamask.svg'
import coinbase from '../../assests/images/coinbase.svg'


const Header = () => {
  const [canvas] = useContext(ContextCanvas)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const deleteObject = () => {

    canvas.getActiveObjects().forEach(obj => {
      canvas.remove(obj);
    });
    canvas.discardActiveObject().renderAll();
  }


  return (
    <>
      {/* Header */}
      <Stack
        className="Header-Stack"
        minH={'16'}
        bgColor={'#001529'}
        align={'center'}
        px={'3'}
        direction={'row'}
        justify={'end'}
      >
        <Img src={logo} position={'absolute'} left={'1'} boxSize={'36'} />
        <Stack direction={'row'} className="Header-Buttons-Stack">
          <Button
            onClick={onOpen}
            bgColor={'#1890ff'}
            color={'white'}
            _hover={{ bgColor: '', color: 'white' }}
          >
            Open Modal
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent bgColor={'#001529'} textColor={'white'}>
              <ModalHeader>Connect a Wallet</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack align={'center'} justify={'center'}>
                  <Button w={'full'} bgColor={'#205375'} transition={'all .3s'} _after={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100 %',
                    height: '100 %',
                    bgColor: '#001529',
                    borderRadius: '10rem',
                    zIndex: '-2',
                  }}
                    _before={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '0%',
                      height: '100%',
                      bgColor: '#121549',
                      transition: 'all .35s',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '10rem',
                      zIndex: '-1',
                    }}
                    _hover={{color:"#001529", _before:{width: '100%'} }}
                  >
                    <Stack direction={'row'} align={'center'}>
                      <Text>Connect MetaMask</Text>
                      <Img src={meta} boxSize={'6'} />
                    </Stack>
                  </Button>
                  <Button w={'full'} bgColor={'#205375'} >
                    <Stack direction={'row'} align={'center'}>
                      <Text>Connect Coinbase</Text>
                      <Img src={coinbase} boxSize={'6'} />
                    </Stack>
                  </Button>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Stack>
      </Stack>
      {/* Save and upload file  */}
      <Stack
        className="Save-and-upload-Stack"
        margin={'0px !important'}
        color={'black'}
        bgColor={'#205375'}
        direction={'row'}
        justify={'flex-end'}
        pr={'2'}
      >

        <IconButton onClick={deleteObject} variant={'ghost'} icon={<AiFillDelete />} />

        <button
          variant={'ghost'}
        >
          <SaveFile />
        </button>
      </Stack>
    </>
  )
}

export default Header;
