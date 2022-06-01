import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Editor from './screens/Editor';
import { createTheme } from '@material-ui/core/styles'

const muiTheme = createTheme()

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Editor />
    </ChakraProvider>
  );
}

export default App;
