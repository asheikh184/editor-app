import { createContext, useState } from 'react';
import { fabric } from 'fabric';

const ContextCanvas = createContext();

export function CanvasProvider({ children }) {
  const [canvas, setCanvas] = useState(null);

  const initCanvas = c => {
    setCanvas(c);
    c.renderAll();
  };

  return (
    <ContextCanvas.Provider value={[canvas, initCanvas]}>
      {children}
    </ContextCanvas.Provider>
  );
}

export default ContextCanvas;
