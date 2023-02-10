import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../Stacks/Home';
import MediaStack from '../Stacks/Media';
import MoreStack from '../Stacks/More';
import GiveTab from '../Stacks/Give';
import HomeIcon from '../../assets/icons/layout/home.png';
import HomeIconFocused from '../../assets/icons/layout/home-focused.png';
import MediaIcon from '../../assets/icons/layout/media.png';
import MediaIconFocused from '../../assets/icons/layout/media-focused.png';
import GiveIcon from '../../assets/icons/layout/give.png';
import GiveIconFocused from '../../assets/icons/layout/give-focused.png';
import MoreIcon from '../../assets/icons/layout/more.png';
import MoreIconFocused from '../../assets/icons/layout/more-focused.png';
import { InterMedium } from '../../theme/fonts';
import appColors from '../../theme/colors';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let selectedIcon;

          if (route.name === 'HomeTab') {
            selectedIcon = focused ? HomeIconFocused : HomeIcon;
          }
          if (route.name === 'MediaTab') {
            selectedIcon = focused ? MediaIconFocused : MediaIcon;
          }
          if (route.name === 'GiveTab') {
            selectedIcon = focused ? GiveIconFocused : GiveIcon;
          }
          if (route.name === 'MoreTab') {
            selectedIcon = focused ? MoreIconFocused : MoreIcon;
          }

          return <Image source={selectedIcon} />;
        },
        tabBarLabelStyle: {
          fontFamily: InterMedium,
          fontSize: 9,
        },

        tabBarActiveTintColor: appColors.secondaryColor,
        tabBarInactiveTintColor: appColors.black,
        tabBarStyle: {
          height: 64.42,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="MediaTab"
        component={MediaStack}
        options={{
          title: 'Media',
        }}
      />
      <Tab.Screen
        name="GiveTab"
        component={GiveTab}
        options={{
          title: 'Give',
        }}
      />
      <Tab.Screen
        name="MoreTab"
        component={MoreStack}
        options={{
          title: 'More',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;
