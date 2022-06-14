import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Editor from './layout/Editor';
import { CanvasProvider } from './context/ContextCanvas';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  return (
    <CanvasProvider>
      <ChakraProvider theme={theme}>
      <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
        <Editor />
        </ThirdwebProvider>
      </ChakraProvider>
    </CanvasProvider>
  );
}

export default App;
