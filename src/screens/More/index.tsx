import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import MoreHeader from '../../components/MoreScreen/MoreHeader';
import MoreList from '../../components/MoreScreen/MoreList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const MoreScreen = ({
  navigation,
}: NativeStackScreenProps<any, 'MoreScreen'>) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: appColors.white }}>
      <MoreHeader />

      <MoreList navigateToScreen={navigateToScreen} />
    </View>
  );
};

export default MoreScreen;
