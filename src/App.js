import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { StyledEngineProvider } from '@mui/material/styles';
import Editor from './screens/Editor';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* <ChakraProvider theme={theme}> */}
      <Editor />
      {/* </ChakraProvider> */}
    </StyledEngineProvider>
  );
}

export default App;
