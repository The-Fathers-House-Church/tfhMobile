import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SectionLoader from '../../common/Loader/SectionLoader';
import { getYoutubeLink } from '../../functions/stringManipulations';
import Card from '../../common/Card';
import PlayIcon from '../../assets/icons/svgs/home/play.svg';
import YoutubePagination from '../../common/YoutubePagination';
import { sendCatchFeedback } from '../../functions/feedback';
import axios from 'axios';
import podcastLinks from '../../components/MediaScreen/podcastLinks';

const PodcastsScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['PODCASTS']
>) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState(1);
  const [links, setLinks] = React.useState({});

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Where do you want to listen from?</Text>
      <Text style={styles.subtitle}>
        Select the channel you want to listen from.
      </Text>
      <View style={styles.contentContainer}>
        {podcastLinks.map(podcast => (
          <TouchableOpacity
            key={podcast.link}
            onPress={() => Linking.openURL(podcast.link)}>
            <Card containerStyle={styles.card}>{podcast.icon}</Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 31,
    paddingVertical: 18,
    flexGrow: 1,
    backgroundColor: appColors.white,
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(24),
    marginBottom: 2,
    color: appColors.primaryColor,
  },
  subtitle: {
    color: appColors.black,
    fontFamily: DMRegular,
    fontSize: fontScale(11),
  },
  contentContainer: {
    gap: 21,
    marginTop: 47,
  },
  card: {
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PodcastsScreen;
