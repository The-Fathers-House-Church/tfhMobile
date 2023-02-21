import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { PlatformType } from './streamingPlatforms';
import Card from '../../common/Card';

const SteamingPlatformCard = ({ platform }: { platform: PlatformType }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(platform.link)}>
      <Card containerStyle={styles.container}>{platform.image}</Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 17,
    height: 79,
    justifyContent: 'center',
  },
});

export default SteamingPlatformCard;
