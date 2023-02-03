import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './src/routes/AppTabs';

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
