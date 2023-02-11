import { View, Text, ViewProps } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import appColors from '../../theme/colors';

const Card = (props: ViewProps) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    elevation: 3,
    shadowColor: '#ECE8FF',
    borderRadius: 10,
  },
});

export default Card;
