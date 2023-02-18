import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { DMBold } from '../../theme/fonts';
import appColors from '../../theme/colors';
import SelectedIcon from '../../assets/icons/svgs/auth/selected.svg';
import NotSelectedIcon from '../../assets/icons/svgs/auth/not-selected.svg';

const ChurchMemberItem = ({
  title,
  selected,
  ...rest
}: {
  title: string;
  selected: boolean;
} & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: selected ? '#08A05C' : '#DBDBDB',
          backgroundColor: selected ? '#F2FFF9' : '#FCFCFC',
        },
      ]}
      {...rest}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {selected ? <SelectedIcon /> : <NotSelectedIcon />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderWidth: 0.75,
    borderColor: '#DBDBDB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontFamily: DMBold,
    fontSize: 8,
    color: appColors.primaryColor,
    marginBottom: 2,
  },
});

export default ChurchMemberItem;
