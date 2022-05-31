import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { StyledEngineProvider } from '@mui/material/styles';
import Editor from './screens/Editor';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Editor />
    </ChakraProvider>
  );
}

export default App;
