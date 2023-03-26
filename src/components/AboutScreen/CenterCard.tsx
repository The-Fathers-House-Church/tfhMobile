import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import { TFCCType } from '../../types/types';
import Card from '../../common/Card';

const CenterCard = ({ item }: { item: TFCCType }) => {
  const separateText = (text: string) => {
    // separating by colon (:)
    return text.split(/:(.*)/s);
  };
  return (
    <Card containerStyle={{ padding: 10 }}>
      <Text style={styles.content}>{item.address}</Text>
      <Text style={styles.cellLeader}>
        {item.cellLeader}, {item.phoneNumber}
      </Text>
      <Text style={styles.zone}>Zone: {item.zone}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    marginBottom: 5,
    fontSize: fontScale(12),
  },

  content: {
    color: appColors.primaryColor,
    fontSize: fontScale(10),
    fontFamily: DMRegular,
  },
  cellLeader: {
    color: appColors.black,
    fontSize: fontScale(8),
    fontFamily: DMRegular,
  },
  zone: {
    color: appColors.grey,
    fontSize: fontScale(6),
    fontFamily: DMRegular,
  },
  listContainer: {
    gap: 10,
    marginTop: 10,
  },
  listTitle: {
    fontFamily: DMBold,
    color: appColors.black,
    fontSize: fontScale(10),
    marginTop: 10,
  },
});

export default CenterCard;
