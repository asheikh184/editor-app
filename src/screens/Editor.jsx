import { Stack } from '@chakra-ui/react';
import Header from '../components/header/Header';
import ResponsiveDrawer from '../components/Drawer';

const Editor = () => {
  return (
    <Stack>
      <Header />
      <ResponsiveDrawer />
    </Stack>
  );
};

export default Editor;
