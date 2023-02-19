import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import appColors from '../../../theme/colors';
import { DMBold, DMRegular } from '../../../theme/fonts';
import LiveIcon from '../../../assets/icons/svgs/media/live.svg';

const MediaCard = ({
  icon,
  mainText,
  subText,
  showInfoText = false,
  isLive = false,
}: {
  icon: React.ReactNode;
  mainText: string;
  subText: string;
  showInfoText?: boolean;
  isLive?: boolean;
}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.container}>
        {icon}
        <View>
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.subText}>{subText}</Text>
          {showInfoText && (
            <View style={styles.infoTextContainer}>
              {isLive ? (
                <>
                  <LiveIcon />
                  <Text style={styles.infoText}>We're Live!</Text>
                </>
              ) : (
                <Text style={styles.infoText}>
                  <Text style={styles.infoText}>No Livestream going on!</Text>
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: appColors.white,
    shadowColor: '#d8d0ff',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    paddingVertical: 23,
    paddingRight: 15,
    paddingLeft: 38,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  mainText: {
    fontFamily: DMBold,
    fontSize: 16,
    color: appColors.primaryColor,
    marginBottom: 6,
  },
  subText: {
    color: appColors.black,
    fontSize: 10,
    fontFamily: DMRegular,
    maxWidth: 191,
  },
  infoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 4,
  },
  infoText: {
    color: appColors.red,
    fontSize: 10,
    fontFamily: DMBold,
  },
});

export default MediaCard;
