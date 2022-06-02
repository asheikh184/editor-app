import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import { AbsoluteCenter, ButtonGroup, Stack } from '@chakra-ui/react';
import canvasbg from '../../assests/images/canvasbg.png';
import { animate } from 'framer-motion';
import { Button } from '@chakra-ui/react';

const Canvasbody = () => {
  const canvas = new fabric.Canvas('canvas-main', { selection: false });

  // var rect, isDown, origX, origY;

  // canvas.on('mouse:down', function(o){
  //     isDown = true;
  //     var pointer = canvas.getPointer(o.e);
  //     origX = pointer.x;
  //     origY = pointer.y;
  //     var pointer = canvas.getPointer(o.e);
  //     rect = new fabric.Rect({
  //         left: origX,
  //         top: origY,
  //         originX: 'left',
  //         originY: 'top',
  //         width: pointer.x-origX,
  //         height: pointer.y-origY,
  //         angle: 0,
  //         fill: 'rgba(255,0,0,0.5)',
  //         transparentCorners: false
  //     });
  //     canvas.add(rect);
  // });

  // canvas.on('mouse:move', function(o){
  //     if (!isDown) return;
  //     var pointer = canvas.getPointer(o.e);

  //     if(origX>pointer.x){
  //         rect.set({ left: Math.abs(pointer.x) });
  //     }
  //     if(origY>pointer.y){
  //         rect.set({ top: Math.abs(pointer.y) });
  //     }

  //     rect.set({ width: Math.abs(origX - pointer.x) });
  //     rect.set({ height: Math.abs(origY - pointer.y) });

  //     canvas.renderAll();
  // });

  // canvas.on('mouse:up', function(o){
  //   isDown = false;
  // });

  const showrect = () => {

    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      stroke: 'black',
    })
    // ,
    // rect.animate('left', '+=400', {
    //   onChange: canvas.renderAll.bind(canvas),
    // });
    canvas.add(rect);
  };

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

  var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
  path.set({ fill: 'red', stroke: 'green', opacity: 0.5 });
  canvas.add(path);

  canvas.on({
    'selection:created': () => {},
  });

  // When a selection is cleared
  canvas.on({
    'selection:cleared': () => {},
  });

  // Rmove the active object on clicking the delete button

  return (
    <>
      <canvas
        style={{ border: 'solid 1px #555' }}
        id="canvas-main"
        width="600px"
        height="600px"
      />

      <input type="button" id="delete" value="Delete selection" />
      <Button onClick={showrect}>Click me</Button>
    </>
  );
};

export default Canvasbody;
