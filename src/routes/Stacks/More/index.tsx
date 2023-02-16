import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from '../../../screens/More';
import { screenNames } from '../../../screens/screenNames';
import AboutStack from '../About';

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
      {AboutStack()}
    </Stack.Navigator>
  );
};

export default MoreStack;
