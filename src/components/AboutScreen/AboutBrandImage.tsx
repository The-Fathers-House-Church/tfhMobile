import { View, Text, Image } from 'react-native';
import React from 'react';

const AboutBrandImage = () => {
  return (
    <Image
      source={require('../../assets/brand/logo.png')}
      style={{
        height: 142,
        resizeMode: 'contain',
        marginVertical: 19,
        alignSelf: 'center',
      }}
    />
  );
};

export default AboutBrandImage;
