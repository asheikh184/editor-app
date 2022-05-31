import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Editor from './screens/Editor';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@material-ui/core/styles'

const muiTheme= createTheme()

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={muiTheme}>
        <Editor />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
