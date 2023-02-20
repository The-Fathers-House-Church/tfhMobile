import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import { fontScale } from '../../../functions/font';

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
    fontSize: fontScale(24),
    fontFamily: DMBold,
    color: appColors.primaryColor,
  },
  subText: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(11),
  },
});

export default IntroHeader;
