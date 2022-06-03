import React, { useEffect, useLayoutEffect, useState } from 'react';
import { fabric } from 'fabric';

const Canvasbody = () => {
  const [canvas1, setCanvas] = useState();
  // , { selection: false }
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
  useLayoutEffect(() => {
    return () => {
      setCanvas(new fabric.Canvas('canvas-main'));
    };
  }, []);

  function addRectangle() {
    var rect = new fabric.Rect({
      top: 80,
      left: 300,
      fill: 'red',
      width: 100,
      height: 100,
    });
    canvas1.add(rect);
    canvas1.requestRenderAll();
  }

  function addCircle() {
    var circ = new fabric.Circle({
      left: 50,
      top: 50,
      fill: 'yellow',
      radius: 60,
    });
    canvas1.add(circ);
    canvas1.requestRenderAll();
  }

  function addCircle() {
    const canvas = new fabric.Canvas('canvas-main');
    var circ = new fabric.Circle({
      left: 200,
      top: 200,
      fill: 'yellow',
      radius: 20,
    });
    canvas1.add(circ);
    canvas1.requestRenderAll();
  }

  function addTextBox() {
    const textbox = new fabric.Textbox('Click on the Rectangle to move it.', {
      fontSize: 20,
      left: 50,
      top: 100,
      width: 200,
      fill: 'black',
      color: 'white',
    });
    canvas1.add(textbox);
    canvas1.requestRenderAll();
  }

  return (
    <>
      <canvas
        style={{ border: 'solid 1px #555' }}
        id="canvas-main"
        width="1300px"
        height="400px"
      />

      <br />
      <br />
      <button type="button" onClick={addRectangle}>
        Rectangle
      </button>
      <br />
      <button type="button" onClick={addCircle}>
        Circle
      </button>
      <button type="button" onClick={addTextBox}>
        TextBox
      </button>
    </>
  );
};

export default Canvasbody;
