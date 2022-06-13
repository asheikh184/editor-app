import { Button, Icon, IconButton, Img, Stack } from '@chakra-ui/react';
import logo from '../../assests/images/logo.png';
import SaveFile from '../objects/SaveFile'
import { AiFillDelete } from 'react-icons/all'
import ContextCanvas from '../../context/ContextCanvas';
import { useContext } from 'react';
import { fabric } from 'fabric';
import {
  FaAngleDoubleUp,
  FaAngleDoubleDown,
  FaRegClone
} from 'react-icons/all'


const Header = () => {
  const [canvas] = useContext(ContextCanvas)

  const deleteObject = () => {

    canvas.getActiveObjects().forEach(obj => {
      canvas.remove(obj);
    });
    canvas.discardActiveObject().renderAll();
  }


  const bringToTop = () => {
    var canvasTop = canvas;
    var activeObj = canvasTop.getActiveObject();
    activeObj &&
      canvasTop.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
  }

  const sendToBack = () => {
    var canvasBack = canvas;
    var activeObj = canvasBack.getActiveObject();
    activeObj &&
      canvasBack.sendToBack(activeObj).discardActiveObject(activeObj).renderAll();


  }


  const cloneMultipleObject = () => {

    var activeObjects = canvas.getActiveObjects();

    if (activeObjects) {
      activeObjects.forEach(function (object) {

        object.clone(function (clone) {
          canvas.add(clone.set({
            left: object.left + 100,
            top: object.top + 200
          }));
        })

      });

    }
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
            bgColor={'#1890ff'}
            color={'white'}
            _hover={{ bgColor: '', color: 'white' }}
          >
            Image Mapping
          </Button>
          <Button
            bgColor={'#1890ff'}
            color={'white'}
            _hover={{ bgColor: '', color: 'white' }}
          >
            Work flow
          </Button>
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
        <IconButton onClick={cloneMultipleObject} variant={'ghost'} icon={<FaRegClone />} />
        <IconButton onClick={bringToTop} variant={'ghost'} icon={< FaAngleDoubleUp />} />
        <IconButton onClick={sendToBack} variant={'ghost'} icon={< FaAngleDoubleDown />} />
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
