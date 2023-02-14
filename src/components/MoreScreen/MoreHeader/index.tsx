import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MoreBG from '../../../assets/backgrounds/more-bg.svg';
import { StyleSheet } from 'react-native';
import appColors from '../../../theme/colors';
import { DMBold, DMRegular } from '../../../theme/fonts';
import ChevronDown from '../../../assets/icons/svgs/more/chevron-down.svg';

const MoreHeader = () => {
  return (
    <View style={styles.container}>
      <MoreBG width="100%" preserveAspectRatio="xMinYMin slice" />
      <View style={styles.contentContainer}>
        <Image source={require('../../../assets/brand/logo-white.png')} />
        <TouchableOpacity style={styles.actionContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Hey! You don't have an account.</Text>
            <Text style={styles.subText}>Create an account now!</Text>
          </View>
          <ChevronDown />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  contentContainer: {
    position: 'absolute',
    left: 40,
    bottom: 31,
    right: 40,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 33,
  },
  textContainer: {
    gap: 2,
  },
  mainText: {
    color: appColors.white,
    fontFamily: DMBold,
    fontSize: 13,
  },
  subText: {
    color: appColors.white,
    fontFamily: DMRegular,
    fontSize: 10,
  },
});
export default MoreHeader;
