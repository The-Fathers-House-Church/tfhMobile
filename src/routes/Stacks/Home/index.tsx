import { View, Text } from 'react-native';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getDayDevotional } from '../../../store/slices/todayDevotional';

const HomeStack = () => {
  const { todayDevotional } = useAppSelector(state => state.todayDevotional);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getDayDevotional()).unwrap();
  }, []);
  console.log(todayDevotional);

  return (
    <View>
      <Text>HomeStack</Text>
    </View>
  );
};

export default HomeStack;
