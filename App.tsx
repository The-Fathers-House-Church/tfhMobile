import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './src/routes/AppTabs';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  React.useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
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
