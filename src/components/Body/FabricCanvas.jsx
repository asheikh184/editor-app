import React, { useContext, useLayoutEffect } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../context/ContextCanvas';
import PolygonComp from '../objects/drawings/Polygon';


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
        width={1000}
        height={300}
        style={{border: '1px solid black'}}
      />
      <PolygonComp/>
    </>
  )
}
export default FabricCanvas;
