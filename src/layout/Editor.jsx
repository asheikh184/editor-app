import { Stack } from '@chakra-ui/react';
import LayerAndAssets from '../components/Body/LayerAndAssets';
import Header from '../components/header/Header';

const Editor = () => {
  return (
    <>
      <Stack margin={'0px !important'} width={'100%'} height={'100vh'}>
        <Stack margin={'0px !important'} height={'100%'}>
          <Header />
          <LayerAndAssets />
        </Stack>
      </Stack>
    </>
  );
};

export default Editor;
