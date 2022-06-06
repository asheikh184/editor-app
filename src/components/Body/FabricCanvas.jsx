import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { fabric } from 'fabric';
import { Button, HStack, Input, VStack } from '@chakra-ui/react';
import ContextCanvas from '../../context/ContextCanvas';

const FabricCanvas = () => {
  const [canvas, initCanvas] = useContext(ContextCanvas);

  useEffect(() => {
    return () => {
      initCanvas(new fabric.Canvas('c'));
    };
  }, []);

  

  // function addCircle() {
  //   var circ = new fabric.Circle({
  //     left: 50,
  //     top: 50,
  //     fill: 'yellow',
  //     radius: 60,
  //   });
  //   canvas1.add(circ);
  //   canvas1.requestRenderAll();
  // }

  // function addTextBox() {
  //   const textbox = new fabric.Textbox('Click on the Rectangle to move it.', {
  //     fontSize: 20,
  //     left: 50,
  //     top: 100,
  //     width: 200,
  //     fill: 'black',
  //     color: 'white',
  //   });
  //   canvas1.add(textbox);
  //   canvas1.requestRenderAll();
  // }

  // function addImage(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var img = event.target.files[0];
  //     setImage(URL.createObjectURL(img));
  //   }
  // }

  // function submitImage() {
  //   var imgInstance = new fabric.Image(imagee, {
  //     angle: 0,
  //     padding: 10,
  //     cornersize: 10,
  //     height: 110,
  //     width: 110,
  //   });
  //   canvas1.add(imgInstance);
  //   canvas1.requestRenderAll();
  // }

  // function deleteObj() {
  //   canvas1.getActiveObjects().forEach(obj => {
  //     canvas1.remove(obj);
  //   });
  //   canvas1.discardActiveObject().renderAll();
  // }
  return (
    <>
      <canvas
        style={{ border: 'solid 1px #555' }}
        id="c"
        width="1300px"
        height="400px"
      />

      <br />
      <br />
      {/* <HStack marginLeft={'50px'}> */}
      {/* 
        <Button type="button" colorScheme="yellow" onClick={addCircle}>
          Circle
        </Button>
        <Button type="button" colorScheme="cyan" onClick={addTextBox}>
          TextBox
        </Button>
        <Input
          type={'file'}
          size={'sm'}
          placeholder={'Add-Image'}
          onChange={addImage}
        />
        <Button onClick={submitImage}>Submit</Button>
        <Button colorScheme="red" onClick={deleteObj}>
          delete
        </Button>
      </HStack> */}
    </>
  );
};

export default FabricCanvas;
