import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import SectionTitle from '../../../common/SectionTitle';
import { DMBold } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import Button from '../../../common/Button';

const Announcements = () => {
  return (
    <View style={styles.container}>
      <SectionTitle mainText="Announcements" />
      <View style={styles.cardContainer}>
        {/* Announcement 1 */}
        <View style={styles.card}>
          <Image
            source={require('../../../assets/images/home/devotional.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardContentContainer}>
            <Text style={styles.cardTitle}>Showers of Blessing</Text>
            <Button
              title="View Details"
              buttonStyle={styles.buttonStyle}
              textStyle={{
                fontSize: 7,
              }}
            />
          </View>
        </View>

        {/* Announcement 2 */}
        <View style={styles.card}>
          <Image
            source={require('../../../assets/images/home/devotional.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardContentContainer}>
            <Text style={styles.cardTitle}>Showers of Blessing</Text>
            <Button
              title="View Details"
              buttonStyle={styles.buttonStyle}
              textStyle={{
                fontSize: 7,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  card: {
    borderRadius: 10,
    flexDirection: 'column',
    flex: 1,
    shadowColor: '#aeaeae',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
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
  },
  cardTitle: {
    fontFamily: DMBold,
    fontSize: 10,
    color: appColors.primaryColor,
    marginBottom: 5,
  },
  buttonStyle: {
    maxWidth: 61.64,
    height: 15,
    borderRadius: 3,
  },
});

export default Announcements;
