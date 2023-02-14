import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import MoreHeader from '../../components/MoreScreen/MoreHeader';
import MoreList from '../../components/MoreScreen/MoreList';

const MoreScreen = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: appColors.white }}>
      <MoreHeader />

      <MoreList />
    </View>
  );
};

export default MoreScreen;
