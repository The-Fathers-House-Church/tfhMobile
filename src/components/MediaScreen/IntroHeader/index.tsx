import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';

const IntroHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>See us online</Text>
      <Text style={styles.subText}>
        We're committed to helping you grow spiritually
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 31,
  },
  mainText: {
    fontSize: 24,
    fontFamily: DMBold,
    color: appColors.primaryColor,
    lineHeight: 29,
  },
  subText: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: 11,
    lineHeight: 17,
  },
});

export default IntroHeader;
