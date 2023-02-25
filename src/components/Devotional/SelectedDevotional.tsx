import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { DevotionalType } from '../../types/types';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import ReadIcon from '../../assets/icons/svgs/devotional/read.svg';
import NotReadIcon from '../../assets/icons/svgs/devotional/not-read.svg';
import ArrowRightIcon from '../../assets/icons/svgs/pastors/chevron-right.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEVOTIONAL_STORAGE } from '../../functions/environmentVariables';
import { screenNames } from '../../screens/screenNames';

const SelectedDevotional = ({
  devotional,
  navigateToScreen,
}: {
  devotional: DevotionalType;
  navigateToScreen: (screenName: string, devotional: DevotionalType) => void;
}) => {
  const [isRead, setIsRead] = React.useState(false);

  // Check if devotional is read
  React.useEffect(() => {
    const checkIfRead = async () => {
      try {
        let completedDevotionals: any = await AsyncStorage.getItem(
          DEVOTIONAL_STORAGE,
        );

        completedDevotionals =
          completedDevotionals != null ? JSON.parse(completedDevotionals) : [];

        const readDevotional = completedDevotionals.find(
          (item: any) => item === devotional?._id,
        );

        if (readDevotional) {
          setIsRead(true);
        } else {
          setIsRead(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkIfRead();
  }, [devotional]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.date}>
        {new Date(devotional.date).toDateString()}
      </Text>
      <View style={styles.contentContainer}>
        {isRead ? <ReadIcon /> : <NotReadIcon />}
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.title}>{devotional.title}</Text>
          <Text style={styles.mainText}>{devotional.mainText}</Text>
          <Text style={styles.text}>{devotional.text}</Text>
          <TouchableOpacity
            style={styles.readTextContainer}
            onPress={() =>
              navigateToScreen(screenNames.SINGLE_DEVOTIONAL, devotional)
            }>
            <Text style={styles.readText}>Read Devotional</Text>
            <ArrowRightIcon />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 19,
    paddingHorizontal: 28,
  },
  date: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(17.2),
    textTransform: 'capitalize',
  },
  mainText: {
    fontFamily: DMRegular,
    fontSize: fontScale(8),
    color: appColors.black,
  },
  text: {
    fontFamily: DMBold,
    fontSize: fontScale(8),
    color: appColors.black,
  },
  readTextContainer: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    marginTop: 10,
  },
  readText: {
    fontFamily: DMBold,
    color: appColors.secondaryColor,
    fontSize: fontScale(11),
  },
});

export default SelectedDevotional;
