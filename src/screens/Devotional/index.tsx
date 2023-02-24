import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setDevotionalLoading,
  setDevotionals,
} from '../../store/slices/devotional';
import { appAxios } from '../../api/axios';
import { sendCatchFeedback } from '../../functions/feedback';
import { DevotionalType } from '../../types/types';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';

const DevotionalsScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['DEVOTIONALS']>) => {
  const { loading, devotionals, totalResults } = useAppSelector(
    state => state.devotionals,
  );
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const getDevotionalsCall = async () => {
    dispatch(setDevotionalLoading(true));
    try {
      const response = await appAxios.get(`/devotional?page=${page || 1}`);
      dispatch(setDevotionals(response.data.data));
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setDevotionalLoading(false));
    }
  };

  React.useEffect(() => {
    getDevotionalsCall();
  }, [page]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getDevotionalsCall();
    setRefreshing(false);
  }, [page]);

  const navigateToScreen = (screenName: string, devotional: DevotionalType) => {
    navigation.navigate(screenName, { devotional });
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text>DevotionalsScreen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 19,
    gap: 22,
    position: 'relative',
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
  },
});

export default DevotionalsScreen;
