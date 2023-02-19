import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { PastorType } from './pastorsData';
import { DMBold, DMMediumItalic, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import ChevronRightIcon from '../../assets/icons/svgs/pastors/chevron-right.svg';
import { screenNames } from '../../screens/screenNames';

const PastorCard = ({
  navigateToScreen,
  pastor,
}: {
  pastor: PastorType;
  navigateToScreen: (screenName: string, pastor: PastorType) => void;
}) => {
  return (
    <View style={styles.container}>
      <Image source={pastor.imageLink} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{pastor.name}</Text>
        <Text style={styles.position}>{pastor.position}</Text>
        <Text style={styles.description} numberOfLines={4}>
          {pastor.description}
        </Text>
        <TouchableOpacity
          style={styles.readMoreContainer}
          onPress={() => navigateToScreen(screenNames.SINGLE_PASTOR, pastor)}>
          <Text style={styles.readMoreText}>Read More </Text>
          <ChevronRightIcon height={10} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 11,
    alignItems: 'center',
  },
  image: {
    width: 87,
    height: '100%',
    borderRadius: 6,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: 13,
    marginBottom: 5,
  },
  position: {
    color: appColors.secondaryColor,
    fontSize: 7,
    marginBottom: 5,
    fontFamily: DMMediumItalic,
    fontStyle: 'italic',
  },
  description: {
    marginBottom: 10,
    color: appColors.black,
    fontSize: 8,
    fontFamily: DMRegular,
    lineHeight: 11.6,
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: ,
  },
  readMoreText: {
    fontFamily: DMBold,
    fontSize: 10,
    color: appColors.secondaryColor,
  },
});

export default PastorCard;
