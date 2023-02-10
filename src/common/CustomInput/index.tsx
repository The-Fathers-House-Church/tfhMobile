import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import appColors from '../../theme/colors';

interface Props {
  value: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
  keyboardType?: string;
}

const CustomInput = ({
  value,
  onChangeText,
  ...rest
}: Props & TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 0.5,
    borderColor: '#D1D1D1',
    padding: 11.24,
    width: '100%',
    color: appColors.primaryColor,
  },
});

export default CustomInput;
