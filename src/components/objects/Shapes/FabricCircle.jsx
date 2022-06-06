import React, { useContext } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../../context/ContextCanvas';
import { Button } from '@chakra-ui/react';

const FabricCircle = () => {
  const [canvas] = useContext(ContextCanvas);
  function addCircle() {
    var circ = new fabric.Circle({
      left: 50,
      top: 50,
      fill: 'yellow',
      radius: 60,
    });
    canvas.add(circ);
    canvas.requestRenderAll();
  }
  return (
    <>
      <Button
        type="button"
        colorScheme="blue"
        onClick={addCircle}
        variant={'ghost'}
        _hover={{}}
        _focus={{}}
        _active={{}}
        textColor={'white'}
        fontWeight={'light'}
      >
        Add Circle
      </Button>
    </>
  );
};

export default FabricCircle;
