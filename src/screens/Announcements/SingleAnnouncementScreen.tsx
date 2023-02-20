import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { screenNames } from '../screenNames';
import { AnnouncementType } from '../../types/types';
import { ScrollView } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';

const SingleAnnouncementScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<any, screenNamesTypes['SINGLE_ANNOUNCEMENT']>) => {
  const routeParams = route.params as
    | Readonly<{ announcement: AnnouncementType }>
    | undefined;

  const announcement = routeParams?.announcement;

  React.useEffect(() => {
    // In case the announcement's details is lost along the way
    if (!routeParams?.announcement) {
      navigation.navigate(screenNames.ANNOUNCEMENTS);
    }
  }, []);

  if (!announcement) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: announcement.image,
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{announcement.title}</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>{announcement.details}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', paddingBottom: 20 },
  contentContainer: {
    paddingHorizontal: 25,
  },
  image: {
    width: '100%',
    height: 241,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(24),
    marginTop: 17,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
    marginVertical: 17,
  },
  description: {
    fontFamily: DMRegular,
    fontSize: fontScale(10),
    color: '#888888',
  },
});

export default SingleAnnouncementScreen;
