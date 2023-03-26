import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TestimonyType } from '../../types/types';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import Card from '../../common/Card';
import { screenNames } from '../../screens/screenNames';

const TestimonyCard = ({
  testimony,
  navigateToScreen,
}: {
  testimony: TestimonyType;
  navigateToScreen: (screenName: string, testimony: TestimonyType) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigateToScreen(screenNames.SINGLE_TESTIMONY, testimony)}>
      <Card containerStyle={styles.container}>
        <Text style={styles.title}>{testimony.summary}</Text>
        <Text style={styles.description} numberOfLines={10}>
          {testimony.content}
        </Text>
        <View style={styles.separator} />
        <Text style={styles.name}>{testimony.fullName}</Text>
        <Text style={styles.date}>
          {new Date(testimony.createdAt).toDateString()}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FFFD',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 17,
    borderRadius: 6.62,
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(16),
    marginBottom: 4,
  },
  description: {
    color: appColors.black,
    fontSize: fontScale(11),
    fontFamily: DMRegular,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#002F7280',
    marginTop: 30,
    marginBottom: 9,
  },
  name: {
    color: appColors.black,
    fontFamily: DMBold,
    fontSize: fontScale(13),
    textTransform: 'capitalize',
  },
  date: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(8),
  },
});

export default TestimonyCard;
