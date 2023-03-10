import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { DevotionalType } from '../../types/types';
import { screenNames } from '../screenNames';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import BG1 from '../../assets/icons/svgs/devotional/bg-image-1.svg';
import BG2 from '../../assets/icons/svgs/devotional/bg-image-2.svg';
import Button from '../../common/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEVOTIONAL_STORAGE } from '../../functions/environmentVariables';

const SingleDevotionalScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<any, screenNamesTypes['SINGLE_DEVOTIONAL']>) => {
  const routeParams = route.params as
    | Readonly<{ devotional: DevotionalType }>
    | undefined;

  const devotional = routeParams?.devotional;
  const [isRead, setIsRead] = React.useState(false);

  React.useEffect(() => {
    // In case the devotional's details is lost along the way
    if (!routeParams?.devotional) {
      navigation.navigate(screenNames.DEVOTIONALS);
    }
  }, []);

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
  }, []);

  if (!devotional) return null;

  const navigateToScreen = (screenName: string) => {
    navigation.push(screenName);
  };

  const markAsRead = async () => {
    try {
      let completedDevotionals: any = await AsyncStorage.getItem(
        DEVOTIONAL_STORAGE,
      );
      completedDevotionals =
        completedDevotionals != null ? JSON.parse(completedDevotionals) : [];

      await AsyncStorage.setItem(
        DEVOTIONAL_STORAGE,
        JSON.stringify([...completedDevotionals, devotional._id]),
      );

      navigateToScreen(screenNames.DEVOTIONALS);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/devotional/single-devotional.png')}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{devotional.title}</Text>
        <Text style={styles.mainText}>
          Date: {new Date(devotional.date).toDateString()}
        </Text>
        <Text style={styles.mainText}>Main Text: {devotional.mainText}</Text>
        <Text style={styles.apostle}>Apostle Dr. Richard Udoh</Text>
      </View>
      <View style={styles.textContainer}>
        <BG1 style={styles.bgImage1} />
        <BG2 style={styles.bgImage2} />
        <Text style={styles.text}>{devotional.text}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{devotional.content}</Text>
        <Text style={styles.sectionTitle}>Prayer:</Text>
        <Text style={styles.content}>{devotional.confession}</Text>
        <Text style={styles.sectionTitle}>Further Reading:</Text>
        {devotional.furtherReading.map((item, index) => (
          <Text style={styles.content} key={index}>
            {item}
          </Text>
        ))}
        <Text style={styles.sectionTitle}>
          Read through the bible in 1 year:
        </Text>
        <Text style={styles.content}>
          {devotional.oneYearBibleReading.join(' , ')}
        </Text>

        <Text style={styles.sectionTitle}>
          Read through the bible in 2 years:
        </Text>

        <Text style={styles.content}>
          {devotional.twoYearsBibleReading.join(' , ')}
        </Text>

        {!isRead && (
          <Button
            title="Done Reading"
            buttonStyle={styles.buttonStyle}
            onPress={markAsRead}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 11,
    paddingBottom: 31,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'cover',
    height: 212,
    width: '100%',
  },

  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    marginTop: 21,
    fontSize: fontScale(20),
    textTransform: 'capitalize',
  },
  mainText: {
    fontFamily: DMRegular,
    color: appColors.black,
    fontSize: fontScale(10),
  },
  apostle: {
    fontSize: fontScale(9),
    color: appColors.primaryColor,
    fontFamily: DMRegular,
    marginBottom: 13,
  },
  textContainer: {
    position: 'relative',
    backgroundColor: '#F2FFFC',
    paddingHorizontal: 25,
    paddingVertical: 22,
    marginBottom: 22,
  },
  bgImage1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  bgImage2: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  contentContainer: {
    paddingHorizontal: 27,
  },
  text: {
    fontFamily: DMBold,
    color: appColors.black,
    fontSize: fontScale(9),
  },
  content: {
    fontFamily: DMRegular,
    color: appColors.black,
    marginBottom: 22,
    fontSize: fontScale(11),
  },
  sectionTitle: {
    fontFamily: DMBold,
    color: appColors.black,
    marginBottom: 5,
    fontSize: fontScale(11),
  },
  buttonStyle: {
    marginTop: 22,
  },
});

export default SingleDevotionalScreen;
