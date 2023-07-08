import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {theme} from './lib/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="darkBlue.800" _text={{color: 'white'}}>
        Hello world
      </Box>
    </NativeBaseProvider>
  );
}
