import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import AboutScreen from '../../../screens/About';
import { stackHeaderStyles } from '../../../functions/globalStyle';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.ABOUT}
        component={AboutScreen}
        options={{
          ...stackHeaderStyles,
          title: 'About the Church',
        }}
      />
    </Stack.Group>
  );
};

export default AboutStack;
