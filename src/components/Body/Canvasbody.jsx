import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import { AbsoluteCenter, Stack } from '@chakra-ui/react';
import canvasbg from '../../assests/images/canvasbg.png';

const Canvasbody = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas('canvas-main');

    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      stroke: 'black',
    });
    canvas.add(rect);
    const circ = new fabric.Circle({
      radius: 100,
      fill: 'red',
    });

    canvas.add(circ);

    const textbox = new fabric.Textbox('Click on the Rectangle to move it.', {
      fontSize: 20,
      left: 50,
      top: 100,
      width: 200,
      fill: 'black',
      color: 'white',
    });
    canvas.add(textbox);

    canvas.add(
      new fabric.IText('Tap and Type', {
        fontFamily: 'arial black',
        left: 100,
        top: 100,
      })
    );
  }, []);
  return (
    <>
      <canvas
        style={{ border: 'solid 1px #555' }}
        id="canvas-main"
        width="1000px"
        height="1000px"
      />
    </>
  );
};

export default Canvasbody;
