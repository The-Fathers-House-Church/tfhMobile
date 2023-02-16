import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import AboutScreen from '../../../screens/About';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import LoginScreen from '../../../screens/Auth/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.LOGIN}
        component={LoginScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
    </Stack.Group>
  );
};

export default AuthStack;
