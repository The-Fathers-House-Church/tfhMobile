import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from '../../../screens/More';
import { screenNames } from '../../../screens/screenNames';
import AboutStack from '../About';
import AnnouncementStack from '../Announcements';
import TestimonyStack from '../Testimonies';
import FeedbackStack from '../Feedback';
import EventsStack from '../Events';

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
      {AnnouncementStack()}
      {TestimonyStack()}
      {FeedbackStack()}
      {EventsStack()}
    </Stack.Navigator>
  );
};

export default MoreStack;
