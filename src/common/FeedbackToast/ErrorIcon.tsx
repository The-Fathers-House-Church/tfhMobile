import { View, Text, Image } from 'react-native';
import React from 'react';

const ErrorIcon = () => {
  return (
    <View
      style={{
        height: '100%',
        width: 50,
        backgroundColor: '#FFE9E2',
        borderTopLeftRadius: 6.23,
        borderBottomLeftRadius: 6.23,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/icons/error.png')}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default ErrorIcon;
