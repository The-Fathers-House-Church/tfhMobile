import { View, Text } from 'react-native';
import React from 'react';
import { EventType } from '../../types/types';
import { StyleSheet } from 'react-native';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';

const EventCard = ({
  event,
  navigateToScreen,
}: {
  event: EventType;
  navigateToScreen: (screenName: string) => void;
}) => {
  return (
    <View>
      <Text>EventCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: fontScale(16),
    color: appColors.primaryColor,
    fontFamily: DMBold,
  },
});

export default EventCard;
