import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import { AbsoluteCenter, Stack } from '@chakra-ui/react';
import canvasbg from '../../assests/images/canvasbg.png';

const Canvasbody = () => {
  useEffect(() => {
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
        width="1200px"
        height="1000px"
      />
    </>
  );
};

export default Canvasbody;
