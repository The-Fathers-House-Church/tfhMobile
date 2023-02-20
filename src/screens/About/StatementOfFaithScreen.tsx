import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import AboutBrandImage from '../../components/AboutScreen/AboutBrandImage';
import faithItems from '../../components/AboutScreen/faithItems';
import FaithCard from '../../components/AboutScreen/FaithCard';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';

const StatementOfFaithScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['STATEMENT_OF_FAITH']
>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutBrandImage />
      <Text style={styles.title}>Statement of Faith</Text>
      <View style={styles.listContainer}>
        {faithItems.map(item => (
          <FaithCard key={item.title} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 31,
    paddingBottom: 20,
  },
  title: {
    fontSize: fontScale(16),
    color: appColors.primaryColor,
    marginBottom: 19,
    fontFamily: DMBold,
    textAlign: 'center',
  },
  listContainer: {
    gap: 15,
  },
});

export default StatementOfFaithScreen;
