import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../Stacks/Home';
import MediaStack from '../Stacks/Media';
import MoreStack from '../Stacks/More';
import GiveTab from '../Stacks/Give';
import { InterMedium } from '../../theme/fonts';
import appColors from '../../theme/colors';
import HomeIcon from '../../assets/icons/svgs/layout/home.svg';
import MediaIcon from '../../assets/icons/svgs/layout/media.svg';
import GiveIcon from '../../assets/icons/svgs/layout/give.svg';
import MoreIcon from '../../assets/icons/svgs/layout/more.svg';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let selectedIcon;

          if (route.name === 'HomeTab') {
            selectedIcon = (
              <HomeIcon
                style={{
                  // @ts-ignore
                  color: focused ? appColors.secondaryColor : appColors.black,
                }}
              />
            );
          }
          if (route.name === 'MediaTab') {
            selectedIcon = (
              <MediaIcon
                style={{
                  // @ts-ignore
                  color: focused ? appColors.secondaryColor : appColors.black,
                }}
              />
            );
          }
          if (route.name === 'GiveTab') {
            selectedIcon = (
              <GiveIcon
                style={{
                  // @ts-ignore
                  color: focused ? appColors.secondaryColor : appColors.black,
                }}
              />
            );
          }
          if (route.name === 'MoreTab') {
            selectedIcon = (
              <MoreIcon
                style={{
                  // @ts-ignore
                  color: focused ? appColors.secondaryColor : appColors.black,
                }}
              />
            );
          }

          return selectedIcon;
        },
        tabBarLabelStyle: {
          fontFamily: InterMedium,
          fontSize: 9,
        },

        tabBarActiveTintColor: appColors.secondaryColor,
        tabBarInactiveTintColor: appColors.black,
        tabBarStyle: {
          height: 64.42,
          // borderTopRightRadius: 16,
          // borderTopLeftRadius: 16,
          paddingBottom: 8,
          borderWidth: 0,
          elevation: 0,
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
