import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MediaScreen from '../../../screens/Media';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import { screenNames } from '../../../screens/screenNames';

const Stack = createNativeStackNavigator();

const MediaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.MEDIA}
        component={MediaScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Media',
        }}
      />
    </Stack.Navigator>
  );
};

export default MediaStack;
