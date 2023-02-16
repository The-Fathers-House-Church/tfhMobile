import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';

const AboutScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['ABOUT']
>) => {
  return (
    <View>
      <Text>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;
