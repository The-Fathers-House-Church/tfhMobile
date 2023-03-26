import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import SectionTitle from '../../../common/SectionTitle';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import Button from '../../../common/Button';
import { fontScale } from '../../../functions/font';
import { useAppSelector } from '../../../store/hooks';
import SectionLoader from '../../../common/Loader/SectionLoader';
import { AnnouncementType } from '../../../types/types';
import { screenNames } from '../../../screens/screenNames';

const Announcements = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string, objectToTransfer?: any) => void;
}) => {
  const { announcements, loading } = useAppSelector(
    state => state.announcements,
  );

  return (
    <View style={styles.container}>
      <SectionTitle mainText="Announcements" />

      {loading ? (
        <SectionLoader />
      ) : announcements ? (
        <ScrollView
          contentContainerStyle={styles.cardContainer}
          horizontal={true}>
          {announcements.slice(0, 10).map((announcement: AnnouncementType) => (
            <View style={styles.card} key={announcement._id}>
              <Image
                source={{
                  uri: announcement.image,
                }}
                style={styles.cardImage}
              />
              <View style={styles.cardContentContainer}>
                <Text style={styles.cardTitle}>{announcement.title}</Text>
                <Button
                  title="View Details"
                  buttonStyle={styles.buttonStyle}
                  textStyle={{
                    fontSize: fontScale(7),
                  }}
                  onPress={() =>
                    navigateToScreen(screenNames.SINGLE_ANNOUNCEMENT, {
                      announcement,
                    })
                  }
                />
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.notFoundText}>No announcement found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  cardContainer: {
    gap: 15,
  },
  card: {
    borderRadius: 10,
    flexDirection: 'column',
    shadowColor: '#aeaeae',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
    width: 200,
  },
  cardImage: {
    width: '100%',
    height: 88,
    resizeMode: 'cover',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: '#F6FAFF',
    flex: 1,
  },
  cardTitle: {
    fontFamily: DMBold,
    fontSize: fontScale(10),
    color: appColors.primaryColor,
    marginBottom: 5,
  },
  buttonStyle: {
    maxWidth: 111.64,
    height: 25,
    borderRadius: 3,
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
    marginBottom: 20,
  },
});

export default Announcements;
