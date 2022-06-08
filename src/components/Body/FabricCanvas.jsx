import React, { useContext, useLayoutEffect } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../context/ContextCanvas';




const FabricCanvas = () => {
  const [canvas, initCanvas] = useContext(ContextCanvas);

  useLayoutEffect(() => {
    return () => {
      initCanvas(new fabric.Canvas('c'));
    };
  }, []);




  return (
    <>
      <canvas
        id="c"
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </>
  )
}
export default FabricCanvas;
