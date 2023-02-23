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
import {
  setTodayDevotional,
  setTodayDevotionalLoading,
} from '../../store/slices/todayDevotional';
import {
  setAnnouncementLoading,
  setAnnouncements,
} from '../../store/slices/announcement';
import { appAxios } from '../../api/axios';
import { sendCatchFeedback } from '../../functions/feedback';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['HOME']>) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useAppDispatch();

  const getAnnouncements = async () => {
    dispatch(setAnnouncementLoading(true));

    try {
      const announcementResponse = await appAxios.get(`/announcement`);
      dispatch(setAnnouncements(announcementResponse.data.data));
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setAnnouncementLoading(false));
    }
  };

  const getTodayDevotional = async () => {
    dispatch(setTodayDevotionalLoading(true));
    try {
      const dayDevotionalResponse = await appAxios.get('/devotional/today');
      dispatch(setTodayDevotional(dayDevotionalResponse.data.devotional));
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setTodayDevotionalLoading(false));
    }
  };
  const getData = async () => {
    getAnnouncements();
    getTodayDevotional();
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getData();
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
