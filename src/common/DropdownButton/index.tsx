import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import ChevronDownIcon from '../../assets/icons/svgs/auth/chevron-down.svg';
import appColors from '../../theme/colors';
import { DMRegular } from '../../theme/fonts';

type Props = {
  value: string;
  placeholder: string;
  showError: boolean;
  error?: string;
  containerStyle?: ViewStyle;
};

const DropdownButton = ({
  value,
  placeholder,
  showError,
  error,
  containerStyle,
  ...rest
}: Props & TouchableOpacityProps) => {
  return (
    <>
      <TouchableOpacity
        style={[
          { width: '100%', position: 'relative' },
          styles.input,
          containerStyle,
        ]}
        {...rest}>
        <View style={styles.iconContainer}>
          <ChevronDownIcon />
        </View>
        <Text
          style={[
            styles.text,
            {
              color: value ? appColors.primaryColor : appColors.grey,
            },
          ]}>
          {value ? value : placeholder}
        </Text>
      </TouchableOpacity>
      <>{showError && <Text style={styles.errorText}>{error}</Text>}</>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 0.5,
    borderColor: '#D1D1D1',
    borderRadius: 5,
    padding: 11.24,
    width: '100%',
    color: appColors.primaryColor,
  },
  errorText: {
    fontSize: 10,
    color: appColors.errorColor,
    alignSelf: 'flex-start',
    marginTop: 3,
  },
  iconContainer: {
    position: 'absolute',
    right: 17,
    top: 13,
    bottom: 16,
  },
  text: {
    fontFamily: DMRegular,
  },
});

export default DropdownButton;
