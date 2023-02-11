import { View, Text, Image } from 'react-native';
import React from 'react';
import Card from '../../../common/Card';
import { StyleSheet } from 'react-native';
import { DMBold } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import Button from '../../../common/Button';

const GiveCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../../assets/images/home/gift.png')} />
        <View style={{ flexDirection: 'column', gap: 6 }}>
          <Text style={styles.title}>Give to The Father's House Church</Text>
          <Button
            title="Giving Options"
            buttonStyle={styles.buttonStyle}
            textStyle={{
              fontSize: 9,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 14,
  },
  card: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    backgroundColor: '#FFF5F2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 23,
  },
  title: {
    fontFamily: DMBold,
    fontSize: 18,
    maxWidth: 193,
    color: appColors.secondaryColor,
  },
  buttonStyle: {
    maxWidth: 109,
    height: 22,
    borderRadius: 3.88,
    backgroundColor: appColors.primaryColor,
  },
});

export default GiveCard;
