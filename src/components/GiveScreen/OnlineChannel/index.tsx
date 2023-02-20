import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import appColors from '../../../theme/colors';
import { DMBold } from '../../../theme/fonts';
import { fontScale } from '../../../functions/font';

interface Props {
  borderColor: string;
  backgroundColor: string;
  icon: React.ReactNode;
  text: string;
}

const OnlineChannel = ({ borderColor, backgroundColor, icon, text }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor,
        },
      ]}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 30,
  },
  text: {
    color: appColors.primaryColor,
    fontFamily: DMBold,
    fontSize: fontScale(13),
  },
});

export default OnlineChannel;
