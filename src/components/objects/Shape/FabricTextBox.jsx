import React, { useContext } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../../context/ContextCanvas';
import { Button } from '@chakra-ui/react';

const FabricTextBox = () => {
  const [canvas] = useContext(ContextCanvas);
  function addTextBox() {
    const textbox = new fabric.Textbox('Click on the Rectangle to move it.', {
      fontSize: 20,
      left: 50,
      top: 100,
      width: 200,
      fill: 'black',
      color: 'white',
      cornerColor: 'blue',
    
    });
    canvas.add(textbox);
    canvas.requestRenderAll();
  }
  return (
    <>
      <Button
        type="button"
        colorScheme="blue"
        onClick={addTextBox}
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

export default FabricTextBox;
