import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { AnnouncementType } from '../../types/types';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import { screenNames } from '../../screens/screenNames';

const AnnouncementCard = ({
  navigateToScreen,
  announcement,
}: {
  navigateToScreen: (
    screenName: string,
    announcement: AnnouncementType,
  ) => void;
  announcement: AnnouncementType;
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigateToScreen(screenNames.SINGLE_ANNOUNCEMENT, announcement)
      }
      style={styles.container}>
      <Image
        source={{
          uri: announcement.image,
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{announcement.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {announcement.details}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  image: {
    width: 87,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 6,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    color: appColors.black,
    fontFamily: DMBold,
    marginBottom: 5,
    fontSize: fontScale(13),
  },
  description: {
    color: '#888888',
    fontSize: fontScale(10),
    fontFamily: DMRegular,
  },
});

export default AnnouncementCard;
