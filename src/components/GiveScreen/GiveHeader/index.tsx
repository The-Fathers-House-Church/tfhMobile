import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import appColors from '../../../theme/colors';
import { DMBold } from '../../../theme/fonts';
import GiftIcon from '../../../assets/icons/svgs/give/gift.svg';

const GiveHeader = () => {
  return (
    <View style={styles.container}>
      <GiftIcon />
      <Text style={styles.mainText}>Giving Channels</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 9,
    alignItems: 'center',
    marginTop: 79,
    marginBottom: 39,
  },
  mainText: {
    color: appColors.primaryColor,
    fontFamily: DMBold,
    fontSize: 24,
  },
});

export default GiveHeader;
