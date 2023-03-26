import { View, Text, ViewProps, ViewStyle } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import appColors from '../../theme/colors';

const Card = ({
  children,
  containerStyle,
}: ViewProps & { containerStyle?: ViewStyle }) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    shadowColor: '#d8d0ff',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    borderRadius: 10,
    flex: 1,
  },
});

export default Card;
