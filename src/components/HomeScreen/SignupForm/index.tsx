import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { DMBold } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import Button from '../../../common/Button';

const SignupForm = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/home/signup.png')}
        style={styles.mainImage}
        imageStyle={{
          borderRadius: 10,
        }}>
        <Text style={styles.mainText}>New to The Father’s House Church?</Text>
        <Button
          title="Sign up Here"
          buttonStyle={styles.mainButton}
          textStyle={{
            fontSize: 10,
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 13,
  },
  mainImage: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 204,
  },
  mainText: {
    fontSize: 20,
    fontFamily: DMBold,
    color: appColors.white,
    maxWidth: 190,
    textAlign: 'center',
    marginBottom: 16,
  },
  mainButton: {
    maxWidth: 121,
    borderRadius: 15,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: appColors.white,
    height: 27,
  },
});

export default SignupForm;
