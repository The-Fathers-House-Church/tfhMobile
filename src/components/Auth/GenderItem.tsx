import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import SelectedIcon from '../../assets/icons/svgs/auth/selected.svg';
import NotSelectedIcon from '../../assets/icons/svgs/auth/not-selected.svg';

const GenderItem = ({
  gender,
  selected,
  ...rest
}: {
  gender: string;
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
        <Text style={styles.name}>{gender}</Text>
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
  },
  name: {
    fontFamily: DMBold,
    fontSize: 11,
    color: appColors.primaryColor,
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  address: {
    fontFamily: DMRegular,
    fontSize: 8,
    color: appColors.primaryColor,
    maxWidth: '90%',
  },
});

export default GenderItem;
