import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold } from '../../../theme/fonts';
import Clipboard from '@react-native-clipboard/clipboard';
import { sendFeedback } from '../../../functions/feedback';
import { fontScale } from '../../../functions/font';

interface Props {
  borderColor: string;
  backgroundColor: string;
  icon: React.ReactNode;
  accountName: string;
  accountNumber: string;
  textColor: string;
}

const OfflineChannel = ({
  borderColor,
  backgroundColor,
  icon,
  accountNumber,
  accountName,
  textColor,
}: Props) => {
  const copyToClipboard = () => {
    let copyText = accountNumber.replace(/\s+/g, '');

    Clipboard.setString(copyText);
    sendFeedback('Account number copied', 'info');
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor,
        },
      ]}
      onPress={copyToClipboard}>
      {icon}
      <View>
        <Text style={[styles.accountNumber, { color: textColor }]}>
          {accountNumber}
        </Text>
        <Text style={[styles.accountName, { color: textColor }]}>
          {accountName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 14,
  },
  accountNumber: {
    fontFamily: DMBold,
    fontSize: fontScale(18.5),
  },
  accountName: {
    fontFamily: DMBold,
    fontSize: 16,
  },
});

export default OfflineChannel;
