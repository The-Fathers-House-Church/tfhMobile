import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import SectionTitle from '../../common/SectionTitle';
import SectionLoader from '../../common/Loader/SectionLoader';
import Card from '../../common/Card';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import PlayIcon from '../../assets/icons/svgs/home/play.svg';
import { getYoutubeLink } from '../../functions/stringManipulations';

const RecentMessages = () => {
  const { videos, loading } = useAppSelector(state => state.youtubeVideos);

  return (
    <>
      {loading ? (
        <SectionLoader
          style={{
            alignSelf: 'flex-start',
            marginTop: 18,
            marginHorizontal: 16,
          }}
        />
      ) : videos && videos.length > 0 ? (
        <View style={styles.container}>
          <SectionTitle mainText="Recent Messages" />

          <ScrollView horizontal={true}>
            {videos.slice(0, 10).map(video => (
              <TouchableOpacity
                key={video.id}
                onPress={() =>
                  Linking.openURL(
                    getYoutubeLink(video.snippet.resourceId.videoId),
                  )
                }>
                <Card containerStyle={styles.contentContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: video.snippet.thumbnails.medium.url,
                      }}
                      style={styles.image}
                    />
                    <View style={styles.imageOverlay} />
                    <View style={styles.playIconContainer}>
                      <PlayIcon width={34.37} height={34.37} />
                    </View>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.title} numberOfLines={2}>
                      {video.snippet.title}
                    </Text>
                    <Text style={styles.subtitle}>
                      {new Date(video.snippet.publishedAt).toDateString()}
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <Text style={styles.notFoundText}>No video found</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },

  contentContainer: {
    padding: 0,
    flexDirection: 'column',
    gap: 0,
    width: 157,
    marginRight: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 130.99,
    width: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0000004D',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  playIconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: appColors.primaryColor,
    paddingVertical: 9,
    paddingHorizontal: 12,
    flex: 1,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  title: {
    fontFamily: DMBold,
    color: appColors.white,
    fontSize: fontScale(10),
    marginBottom: 3,
    textTransform: 'capitalize',
  },
  subtitle: {
    fontFamily: DMRegular,
    color: appColors.white,
    fontSize: fontScale(6),
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
    marginBottom: 20,
  },
});

export default RecentMessages;
