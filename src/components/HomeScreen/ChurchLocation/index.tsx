import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import SectionTitle from '../../../common/SectionTitle';
import Card from '../../../common/Card';
import Button from '../../../common/Button';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';

const ChurchLocation = () => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.contentContainer}>
          <Image source={require('../../../assets/images/home/church.png')} />
          <View style={styles.detailsContainer}>
            <Text style={styles.textHeader}>
              Find a Father's House close to you
            </Text>
            <Text style={styles.title}>
              We have centres across Africa and Europe. Find one that is closest
              to you.
            </Text>

            <Button
              title="Find a Church"
              buttonStyle={styles.buttonStyle}
              textStyle={{
                fontSize: 9,
              }}
            />
          </View>
        </View>
      </Card>
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
  },
  textHeader: {
    fontFamily: DMBold,
    fontSize: 18,
    color: appColors.primaryColor,
    maxWidth: 185,
    marginBottom: 5,
  },
  title: {
    fontFamily: DMRegular,
    fontSize: 8,
    color: appColors.black,
    marginBottom: 20,
    maxWidth: 159,
  },

  buttonStyle: {
    maxWidth: 109,
    height: 22,
    borderRadius: 3.88,
  },
});

export default ChurchLocation;
