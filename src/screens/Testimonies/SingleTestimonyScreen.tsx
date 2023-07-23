import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { screenNames } from '../screenNames';
import { TestimonyType } from '../../types/types';
import HTMLRenderer from '../../common/HTMLRenderer';

const SingleTestimonyScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<any, screenNamesTypes['SINGLE_TESTIMONY']>) => {
  const routeParams = route.params as
    | Readonly<{ testimony: TestimonyType }>
    | undefined;
  const testimony = routeParams?.testimony;

  React.useEffect(() => {
    // In case the testimony's details is lost along the way
    if (!routeParams?.testimony) {
      navigation.navigate(screenNames.TESTIMONIES);
    }
  }, []);

  if (!testimony) return null;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{testimony.titles}</Text>
        <HTMLRenderer
          source={{
            html: testimony.main_gist,
          }}
          baseStyle={styles.description}
          defaultTextProps={{
            numberOfLines: 10,
          }}
        />
        <View style={styles.separator} />
        <Text style={styles.name}>{testimony.names}</Text>
        <Text style={styles.date}>
          {new Date(testimony.createdAt).toDateString()}
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 19,
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
export default SingleTestimonyScreen;
