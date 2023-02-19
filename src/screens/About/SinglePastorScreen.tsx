import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { PastorType } from '../../components/AboutScreen/pastorsData';
import { screenNames } from '../screenNames';
import { DMBold, DMMediumItalic, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import FacebookIcon from '../../assets/icons/svgs/pastors/facebook.svg';
import TwitterIcon from '../../assets/icons/svgs/pastors/twitter.svg';
import LinkedinIcon from '../../assets/icons/svgs/pastors/linkedin.svg';
import InstagramIcon from '../../assets/icons/svgs/pastors/instagram.svg';

const SinglePastorScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['SINGLE_PASTOR']>) => {
  const routeParams = route.params as
    | Readonly<{ pastor: PastorType }>
    | undefined;

  const pastor = routeParams?.pastor;

  useEffect(() => {
    // In case the pastor's details is lost along the way
    if (!routeParams?.pastor) {
      navigation.navigate(screenNames.PASTORS);
    }
  }, []);

  if (!pastor) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={pastor.imageLink} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{pastor.name}</Text>
          <Text style={styles.position}>{pastor.position}</Text>
          <View style={styles.socialContainer}>
            {pastor.linkedinLink && (
              <TouchableOpacity
                style={styles.socialIcon}
                onPress={() => Linking.openURL(pastor.linkedinLink as string)}>
                <LinkedinIcon width={11} />
                <Text style={styles.socialText}>LinkedIn</Text>
              </TouchableOpacity>
            )}
            {pastor.facebookLink && (
              <TouchableOpacity
                style={styles.socialIcon}
                onPress={() => Linking.openURL(pastor.facebookLink as string)}>
                <FacebookIcon width={11} />
                <Text style={styles.socialText}>Facebook</Text>
              </TouchableOpacity>
            )}

            {pastor.instagramLink && (
              <TouchableOpacity
                style={styles.socialIcon}
                onPress={() => Linking.openURL(pastor.instagramLink as string)}>
                <InstagramIcon width={11} />
                <Text style={styles.socialText}>Instagram</Text>
              </TouchableOpacity>
            )}

            {pastor.twitterLink && (
              <TouchableOpacity
                style={styles.socialIcon}
                onPress={() => Linking.openURL(pastor.twitterLink as string)}>
                <TwitterIcon width={11} />
                <Text style={styles.socialText}>Twitter</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{pastor.description}</Text>
        {pastor.additionalDescription && (
          <View
            style={{
              marginTop: 10,
              gap: 10,
            }}>
            {pastor.additionalDescription.map((item, index) => (
              <Text key={index} style={styles.description}>
                {item}
              </Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 35,
    paddingVertical: 18,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  image: {
    width: 124,
    height: '100%',
    borderRadius: 6,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: 20,
    marginBottom: 5,
  },
  position: {
    color: appColors.secondaryColor,
    fontSize: 10,
    marginBottom: 10,
    fontFamily: DMMediumItalic,
  },

  socialContainer: {
    gap: 5,
  },
  socialIcon: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  socialText: {
    fontFamily: DMRegular,
    fontSize: 7,
    color: appColors.black,
  },
  descriptionContainer: {
    marginTop: 25,
  },
  description: {
    color: appColors.black,
    fontSize: 12,
    fontFamily: DMRegular,
    lineHeight: 17.4,
  },
});

export default SinglePastorScreen;
