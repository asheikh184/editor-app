import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Editor from './layout/Editor';
import { CanvasProvider } from './context/ContextCanvas';

function App() {
  return (
    <CanvasProvider>
      <ChakraProvider theme={theme}>
        <Editor />
      </ChakraProvider>
    </CanvasProvider>
  );
}

export default App;
