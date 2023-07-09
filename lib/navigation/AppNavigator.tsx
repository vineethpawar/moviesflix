import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import IntroSliderNavigator from './IntroSliderNavigator';
import {KeychainService} from '../services/KeychainService';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useToken} from 'native-base';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [initialRoute, setInitialRoute] = useState('Intro');
  const statusBarColor = useToken('colors', 'appBG');

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await KeychainService.isAuthenticated();
      setInitialRoute(isAuthenticated ? 'Main' : 'Auth');
    };

    checkAuthentication();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={statusBarColor} barStyle={'light-content'} />
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Intro" component={IntroSliderNavigator} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
