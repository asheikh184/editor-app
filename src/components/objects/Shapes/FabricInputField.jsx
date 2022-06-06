import React, { useContext } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../../context/ContextCanvas';
import { Button } from '@chakra-ui/react';

const FabricInputField = () => {
  const [canvas] = useContext(ContextCanvas);
  function addInputField() {
    var rect = new fabric.Rect({
      top: 80,
      left: 300,
      fill: 'blue',
      width: 100,
      height: 100,
    });
    canvas.add(rect);
    canvas.requestRenderAll();
  }
  return (
    <>
      <Button
        type="button"
        colorScheme="blue"
        onClick={addInputField}
        variant={'ghost'}
        _hover={{}}
        _focus={{}}
        _active={{}}
        textColor={'white'}
        fontWeight={'light'}
      >
        Text Field
      </Button>
    </>
  );
};

export default FabricInputField;
