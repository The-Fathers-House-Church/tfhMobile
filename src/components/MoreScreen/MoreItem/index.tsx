import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import AuthenticationItem from './AuthenticationItem';

interface Props {
  title: string;
  icon: React.ReactNode;
  type?: 'normal' | 'authentication';
}

const MoreItem = ({
  title,
  icon,
  type = 'normal',
  ...rest
}: Props & TouchableOpacityProps) => {
  return (
    <>
      {type === 'normal' && (
        <TouchableOpacity style={styles.container} {...rest}>
          {icon}
          <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
      )}

      {type === 'authentication' && <AuthenticationItem />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  titleText: {
    fontFamily: DMRegular,
    fontSize: 13,
    color: appColors.primaryColor,
  },
});

export default MoreItem;
