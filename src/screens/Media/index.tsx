import { ScrollView, View } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import IntroHeader from '../../components/MediaScreen/IntroHeader';
import MediaCard from '../../components/MediaScreen/MediaCard';
import mediaContents from '../../components/MediaScreen/mediaContents';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';

const MediaScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['MEDIA']
>) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: appColors.white }}>
      <IntroHeader />
      <View style={{ paddingHorizontal: 20, gap: 17 }}>
        {mediaContents.map(item => (
          <MediaCard
            key={item.mainText}
            icon={item.icon}
            mainText={item.mainText}
            subText={item.subText}
            showInfoText={item.showInfoText}
            isLive={item.isLive}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MediaScreen;
