import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import AboutBrandImage from '../../components/AboutScreen/AboutBrandImage';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import ServiceCard from '../../components/AboutScreen/ServiceCard';
import serviceSchedules from '../../components/AboutScreen/serviceSchedules';

const ServiceScheduleScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['SERVICE_SCHEDULE']
>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutBrandImage />
      <Text style={styles.title}>Service Schedules</Text>
      <View style={styles.listContainer}>
        {serviceSchedules.map(item => (
          <ServiceCard key={item.heading} item={item} />
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
    marginBottom: 30,
    fontFamily: DMBold,
    textAlign: 'center',
  },
  listContainer: {
    gap: 25,
  },
});

export default ServiceScheduleScreen;
