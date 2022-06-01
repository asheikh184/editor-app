import Header from '../components/header/Header';
import CanvasBody from '../components/CanvasBody';
import { Stack } from '@chakra-ui/react';

const Editor = () => {
  return (
    <>
      <Stack margin={'0px !important'} width={'100%'} height={'100vh'}>
        <Header />
        <Stack margin={'0px !important'}>
          <CanvasBody />
        </Stack>
      </Stack>
    </>
  );
};

export default Editor;
