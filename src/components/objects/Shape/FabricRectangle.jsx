import React, { useContext } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../../context/ContextCanvas';
import { Button } from '@chakra-ui/react';

const FabricRectangle = () => {
  const [canvas] = useContext(ContextCanvas);
  function addRectangle() {
    var rect = new fabric.Rect({
      top: 80,
      left: 300,
      fill: 'blue',
      width: 100,
      height: 100,
      stroke: 'green',
      cornerColor: 'blue',
     
    });
    canvas.add(rect);
    canvas.requestRenderAll();
  }
  return (
    <>
      <Button
        type="button"
        colorScheme="blue"
        onClick={addRectangle}
        variant={'ghost'}
        _hover={{}}
        _focus={{}}
        _active={{}}
        textColor={'white'}
        fontWeight={'light'}
      >
        Rectangle
      </Button>
    </>
  );
};

export default FabricRectangle;
