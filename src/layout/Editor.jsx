import Header from '../components/header/Header';
import { Stack } from '@chakra-ui/react';
import LayerAndAssets from '../components/Body/LayerAndAssets';

const Editor = () => {
  return (
    <>
      <Stack margin={'0px !important'} width={'100%'} height={'100vh'}>
        <Stack margin={'0px !important'}>
          <Header />
          <LayerAndAssets />
        </Stack>
      </Stack>
    </>
  );
};

export default Editor;
