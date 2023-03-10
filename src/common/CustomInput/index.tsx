import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import appColors from '../../theme/colors';
import { FormikProps } from 'formik/dist/types';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';

interface Props {
  value?: string | number;
  onChangeText?: Dispatch<SetStateAction<string>>;
  formik?: FormikProps<any>;
  name: string;
  useFormik?: boolean;
  showError?: boolean;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
}

const CustomInput = ({
  value,
  onChangeText,
  useFormik = true,
  formik,
  showError,
  error,
  name,
  containerStyle,
  inputStyle,
  ...rest
}: Props & TextInputProps) => {
  return (
    <View style={[{ width: '100%' }, containerStyle]}>
      {useFormik && formik ? (
        <>
          <TextInput
            style={[styles.input, inputStyle]}
            onChangeText={formik.handleChange(name)}
            onBlur={formik.handleBlur(name)}
            value={formik.values[name]}
            placeholderTextColor={appColors.grey}
            id={name}
            {...rest}
          />
          {formik.touched[name] && formik.errors[name] && (
            <Text style={styles.errorText}>
              {formik.errors[name] as string}
            </Text>
          )}
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            id={name}
            {...rest}
          />
          {showError && <Text style={styles.errorText}>{error}</Text>}
        </>
      )}
    </View>
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
    fontFamily: DMRegular,
    fontSize: fontScale(10),
  },
  errorText: {
    fontSize: fontScale(10),
    color: appColors.errorColor,
    alignSelf: 'flex-start',
    marginTop: 3,
    fontFamily: DMRegular,
  },
});

export default CustomInput;
