import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';

const SingleEventScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['SINGLE_EVENT']>) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };
  return (
    <View>
      <Text>SingleEventScreen</Text>
    </View>
  );
};

export default SingleEventScreen;
