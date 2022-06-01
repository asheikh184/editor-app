import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import canvasbg from '../../assests/images/canvasbg.png';

const Canvasbody = () => {
  return (
    <Stack
      flex={'3'}
      bgColor={'#F3F3F3'}
      bgImage={canvasbg}
      boxShadow={'inset 0px -5px 10px 2px rgbxa(0,0,0,0.75)'}
    >
      <Text>Canvas</Text>
    </Stack>
  );
};

export default Canvasbody;
