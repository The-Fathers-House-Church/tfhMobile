import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import AboutScreen from '../../../screens/About';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Group>
      <Stack.Screen
        name={screenNames.ABOUT}
        component={AboutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Group>
  );
};

export default AboutStack;
