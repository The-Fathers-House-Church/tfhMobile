import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './src/routes/AppTabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={() => <Text>Home Stack</Text>}
      />
    </Stack.Navigator>
  );
}
function MediaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MediaStack"
        component={() => <Text>Media Stack</Text>}
      />
    </Stack.Navigator>
  );
}
function MoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoreStack"
        component={() => <Text>More Stack</Text>}
      />
      <Stack.Screen
        name="OtherRoute"
        component={() => <Text>This is the other route</Text>}
      />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StatusBar />
        <AppTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
