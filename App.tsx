import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {theme} from './lib/theme';
import AppNavigator from './lib/navigation/AppNavigator';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
