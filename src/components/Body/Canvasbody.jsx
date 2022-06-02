import React, { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { Stack } from '@chakra-ui/react';
import canvasbg from '../../assests/images/canvasbg.png';

const Canvasbody = () => {
  const [canvas, setCanvas] = useState('');
  // const [height1, setheight] = useState(500);
  // const [width2, setwidth] = useState(500);

  const initCanvas = () =>
    new fabric.Canvas('canvas', {
      height: 100,
      width: 100,
      
      backgroundColor: 'pink',
    });

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  return <canvas id={'canvas'} />;
};

export default Canvasbody;
