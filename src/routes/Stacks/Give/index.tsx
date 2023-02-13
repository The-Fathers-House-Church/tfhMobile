import { View, Text } from 'react-native';
import React from 'react';
import GiveScreen from '../../../screens/Give';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const GiveTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GiveStack"
        component={GiveScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default GiveTab;
