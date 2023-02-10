import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MediaScreen from '../../../screens/Media';

const Stack = createNativeStackNavigator();

const MediaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MediaStack" component={MediaScreen} />
    </Stack.Navigator>
  );
};

export default MediaStack;
