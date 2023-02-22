import { RefreshControl, ScrollView, View } from 'react-native';
import React from 'react';
import LogoHeader from '../../components/HomeScreen/LogoHeader';
import SignupForm from '../../components/HomeScreen/SignupForm';
import DayDevotional from '../../components/HomeScreen/DayDevotional';
import ChurchLocation from '../../components/HomeScreen/ChurchLocation';
import GiveCard from '../../components/HomeScreen/GiveCard';
import Announcements from '../../components/HomeScreen/Announcements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getDayDevotional } from '../../store/slices/todayDevotional';
import { getAnnouncements } from '../../store/slices/announcement';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['HOME']>) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getDayDevotional()).unwrap();
    dispatch(getAnnouncements()).unwrap();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getDayDevotional()).unwrap();
    dispatch(getAnnouncements()).unwrap();
    setRefreshing(false);
  }, []);

  const navigateToScreen = (screenName: string, objectToTransfer?: any) => {
    navigation.navigate(screenName, objectToTransfer);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <LogoHeader navigateToScreen={navigateToScreen} />
      <SignupForm navigateToScreen={navigateToScreen} />
      <DayDevotional navigateToScreen={navigateToScreen} />
      <ChurchLocation navigateToScreen={navigateToScreen} />
      <GiveCard navigateToScreen={navigateToScreen} />
      <Announcements navigateToScreen={navigateToScreen} />
    </ScrollView>
  );
};

export default HomeScreen;
