import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';

const SinglePastorScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['SINGLE_PASTOR']
>) => {
  return (
    <View>
      <Text>SinglePastorScreen</Text>
    </View>
  );
};

export default SinglePastorScreen;
