import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../Stacks/Home';
import MediaStack from '../Stacks/Media';
import MoreStack from '../Stacks/More';
import GiveTab from '../Stacks/Give';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="MediaTab" component={MediaStack} />
      <Tab.Screen name="GiveTab" component={GiveTab} />
      <Tab.Screen name="MoreTab" component={MoreStack} />
    </Tab.Navigator>
  );
};

export default AppTabs;
