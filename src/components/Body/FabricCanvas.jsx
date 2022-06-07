import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../context/ContextCanvas';
// import Fonts from '../../assests/fonts/Fonts'


// const fonts = Fonts.getFonts()
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
        
        width={1000}
        height={500}
      />

      <br />
      <br />


      <select onChange={change}>
        <option value="">Select Font</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
        <option value="Palatino">Palatino</option>
        <option value="Garamond">Garamond</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
      </select>

      {/* <select>
        {
          fonts.map(font => {
            return (
              <option value={font.name} >
                {font.name}
              </option>
            )

          })}
      </select> */}
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
  )
}
export default FabricCanvas;
