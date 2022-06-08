import { Stack } from '@chakra-ui/react';
import Header from '../components/header/Header';
import LayerAndAssets from '../components/body/LayerAndAssets';

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
