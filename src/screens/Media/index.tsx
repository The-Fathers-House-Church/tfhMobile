import { Text, ScrollView } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import IntroHeader from '../../components/MediaScreen/IntroHeader';
import LivestreamIcon from '../../assets/icons/svgs/media/livestream.svg';

const MediaScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: appColors.white }}>
      <IntroHeader />
      <LivestreamIcon width={100} height={100} />
    </ScrollView>
  );
};

export default MediaScreen;
