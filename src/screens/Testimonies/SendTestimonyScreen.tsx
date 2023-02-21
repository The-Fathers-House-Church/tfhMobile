import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import NewTestimonyForm from '../../components/TestimonyScreen/NewTestimonyForm';

const SendTestimonyScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['SEND_TESTIMONY']>) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Got a Testimony?</Text>
      <Text style={styles.subtitle}>
        Feel free to share what God has done for you which you want to testify
        about.
      </Text>
      <NewTestimonyForm navigateToScreen={navigateToScreen} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 26,
    paddingVertical: 35,
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    marginBottom: 5,
    fontSize: fontScale(24),
  },
  subtitle: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(11),
    marginBottom: 40,
  },
});

export default SendTestimonyScreen;
