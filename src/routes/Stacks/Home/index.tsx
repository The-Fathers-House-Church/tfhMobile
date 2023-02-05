import { View, Text } from 'react-native';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getDayDevotional } from '../../../store/slices/todayDevotional';
import { DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';

const HomeStack = () => {
  const { todayDevotional } = useAppSelector(state => state.todayDevotional);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getDayDevotional()).unwrap();
  }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontFamily: DMRegular,
          color: appColors.secondaryColor,
        }}>
        HomeStack
      </Text>
    </View>
  );
};

export default HomeStack;
