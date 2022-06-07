import React, { useContext } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../../context/ContextCanvas';
import { Button } from '@chakra-ui/react';

const FabricTriangle = () => {
  const [canvas] = useContext(ContextCanvas);
  function addTriangle() {
    var triangle = new fabric.Triangle({
      width: 150,
      height: 100,
      stroke: 'green',
      strokeWidth: 3,
      cornerColor: 'blue',
    });
    canvas.add(triangle);
    canvas.requestRenderAll();
  }
  return (
    <>
      <Button
        type="button"
        colorScheme="blue"
        onClick={addTriangle}
        variant={'ghost'}
        _hover={{}}
        _focus={{}}
        _active={{}}
        textColor={'white'}
        fontWeight={'light'}
      >
        Triangle
      </Button>
    </>
  );
};

export default FabricTriangle;
