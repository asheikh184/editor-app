import Header from '../components/header/Header';
import CanvasBody from '../components/CanvasBody';
import { Stack } from '@chakra-ui/layout';

const Editor = () => {
  return (
    <Stack margin={'0px !important'} width={'100%'} height={'100vh'}>
      <Header />
      <CanvasBody />
    </Stack>
  );
};

export default Editor;
