import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Editor from './screens/Editor';
// import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Editor/>
    </ChakraProvider>
  );
}

export default App;
