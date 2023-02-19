import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';

const PastorsScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['PASTORS']
>) => {
  return (
    <View>
      <Text>PastorsScreen</Text>
    </View>
  );
};

export default PastorsScreen;
