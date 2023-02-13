import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
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
    <TouchableHighlight style={styles.card} underlayColor="#ece8ff">
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
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: appColors.white,
    shadowColor: '#ece8ff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
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
