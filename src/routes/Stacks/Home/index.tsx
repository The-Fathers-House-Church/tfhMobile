import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/Home';
import { screenNames } from '../../../screens/screenNames';
import AuthStack from '../Auth';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      {AuthStack()}
    </Stack.Navigator>
  );
};

export default HomeStack;
