import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../context/ContextCanvas';




const FabricCanvas = () => {
  const [canvas, initCanvas] = useContext(ContextCanvas);

  useLayoutEffect(() => {
    return () => {
      initCanvas(new fabric.Canvas('c'));
    };
  }, []);


  const change = (e) => {
    
    const value = e.target.value
    if (value !== 'Times New Roman') {
      canvas.getActiveObject().set("fontFamily", value);
      canvas.requestRenderAll();
    }
  }


  return (
    <>
      <canvas
        style={{ border: 'solid 1px #555' }}
        id="c"

        width={1000}
        height={300}
      />

      <br />
      <br />


      <select onChange={change}>
        <option value="">Select Font</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
        <option value="monospace" >Monospace</option>
      </select>

    </>
  )
}
export default FabricCanvas;
