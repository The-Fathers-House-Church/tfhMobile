import { ScrollView, View } from 'react-native';
import React from 'react';
import LogoHeader from '../../components/HomeScreen/LogoHeader';
import SignupForm from '../../components/HomeScreen/SignupForm';
import DayDevotional from '../../components/HomeScreen/DayDevotional';
import ChurchLocation from '../../components/HomeScreen/ChurchLocation';
import GiveCard from '../../components/HomeScreen/GiveCard';
import Announcements from '../../components/HomeScreen/Announcements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';

const HomeScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['HOME']
>) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LogoHeader />
      <SignupForm />
      <DayDevotional />
      <ChurchLocation />
      <GiveCard />
      <Announcements />
    </ScrollView>
  );
};

export default HomeScreen;
