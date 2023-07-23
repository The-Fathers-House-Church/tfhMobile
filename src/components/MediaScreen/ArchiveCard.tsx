import { StyleSheet, TouchableOpacity, Linking, Text } from 'react-native';
import React from 'react';
import Card from '../../common/Card';
import { ArchiveType } from './archiveChannels';
import { DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';

const ArchiveCard = ({ channel }: { channel: ArchiveType }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(channel.link)}>
      <Card containerStyle={styles.container}>
        {channel.image}
        <Text style={styles.label}>{channel.label}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 17,
    height: 79,
    gap: 20,
  },
  label: {
    fontFamily: DMRegular,
    color: appColors.black,
    fontSize: fontScale(9),
  },
});

export default ArchiveCard;
