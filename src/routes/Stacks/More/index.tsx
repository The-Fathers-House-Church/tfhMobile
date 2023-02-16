import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from '../../../screens/More';
import { screenNames } from '../../../screens/screenNames';

const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.MORE}
        component={MoreScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MoreStack;
