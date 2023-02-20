import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import SectionTitle from '../../../common/SectionTitle';
import Card from '../../../common/Card';
import Button from '../../../common/Button';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getDayDevotional } from '../../../store/slices/todayDevotional';
import SectionLoader from '../../../common/Loader/SectionLoader';
import { fontScale } from '../../../functions/font';

const DayDevotional = () => {
  const { todayDevotional, loading } = useAppSelector(
    state => state.todayDevotional,
  );

  return (
    <View style={styles.container}>
      <SectionTitle mainText="Today's Menu" />
      {loading ? (
        <SectionLoader style={{ padding: 20 }} />
      ) : todayDevotional ? (
        <Card>
          <View style={styles.contentContainer}>
            <Image
              source={require('../../../assets/images/home/devotional.png')}
              style={{
                height: '100%',
                borderRadius: 6,
              }}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.textHeader}>The Father’s Menu</Text>
              <Text style={styles.title}>{todayDevotional.title}</Text>
              <Text style={styles.date}>
                {new Date(todayDevotional.date).toDateString()}
              </Text>
              <Button
                title="Read Devotional"
                buttonStyle={styles.buttonStyle}
                textStyle={{
                  fontSize: fontScale(9),
                }}
              />
            </View>
          </View>
        </Card>
      ) : (
        <Text style={styles.notFoundText}>No devotional found for today</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 18,
  },
  contentContainer: {
    paddingVertical: 12,
    paddingHorizontal: 7,
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  textHeader: {
    fontFamily: DMBold,
    fontSize: fontScale(8),
    color: appColors.secondaryColor,
    textTransform: 'uppercase',
    maxWidth: 235,
    marginBottom: 5,
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(15),
    color: appColors.primaryColor,
    marginBottom: 2,
    textTransform: 'capitalize',
  },
  date: {
    fontFamily: DMRegular,
    fontSize: fontScale(9),
    color: appColors.black,
    marginBottom: 20,
  },
  buttonStyle: {
    maxWidth: 159,
    height: 32,
    borderRadius: 3.88,
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
    marginBottom: 20,
  },
});

export default DayDevotional;
