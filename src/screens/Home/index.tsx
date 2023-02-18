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

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['HOME']>) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);

  React.useEffect(() => {
    dispatch(getDayDevotional()).unwrap();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getDayDevotional()).unwrap();
    setRefreshing(false);
  }, []);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <LogoHeader navigateToScreen={navigateToScreen} />
      {!user && <SignupForm navigateToScreen={navigateToScreen} />}
      <DayDevotional />
      <ChurchLocation />
      <GiveCard />
      <Announcements />
    </ScrollView>
  );
};

export default HomeScreen;
