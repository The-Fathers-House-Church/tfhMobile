import { View, Image } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import ErrorImage from '../../assets/icons/error.svg';

const ErrorIcon = () => {
  return (
    <View
      style={{
        height: '100%',
        width: 50,
        backgroundColor: appColors.errorColor,
        borderTopLeftRadius: 6.23,
        borderBottomLeftRadius: 6.23,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ErrorImage width={20} height={20} />
    </View>
  );
};

export default ErrorIcon;
