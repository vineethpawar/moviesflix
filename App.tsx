import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="darkBlue.800" _text={{color: 'white'}}>
        Hello world
      </Box>
    </NativeBaseProvider>
  );
}
