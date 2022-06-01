import Header from '../components/header/Header';
import { Stack } from '@chakra-ui/react';
import Designer from '../components/Body/Designer';
import LayerAndAssets from '../components/Body/LayerAndAssets';
import Canvasbody from '../components/Body/Canvasbody';

const Editor = () => {
  return (
    <>
      <Stack margin={'0px !important'} width={'100%'} height={'100vh'}>
        <Stack margin={'0px !important'}>
          <Header />
          <LayerAndAssets/>
        
        </Stack>
      </Stack>
    </>
  );
};

export default Editor;
