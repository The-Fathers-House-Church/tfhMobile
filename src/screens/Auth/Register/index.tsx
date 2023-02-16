import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../../screenNamesTypes';
import { StyleSheet } from 'react-native';
import appColors from '../../../theme/colors';
import { DMBold, DMRegular } from '../../../theme/fonts';
import CustomInput from '../../../common/CustomInput';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '../../../common/Button';
import { appAxios } from '../../../api/axios';
import { sendCatchFeedback, sendFeedback } from '../../../functions/feedback';
import { screenNames } from '../../screenNames';

const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['REGISTER']>) => {
  interface FormValues {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    churchCenter: string;
    dateOfBirth: string;
    member: boolean;
    registrationSource: string;
    loading: boolean;
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
      churchCenter: '',
      dateOfBirth: '',
      firstName: '',
      lastName: '',
      member: true,
      phoneNumber: '',
      registrationSource: 'mobile',
      loading: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup.string().required('Password is required'),
    }),
  });

  const submitValues = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/login', {
        email: formik.values.email,
        password: formik.values.password,
      });

      sendFeedback(response.data?.message, 'success');
      // const userObject = {
      //   ...response.data?.user,
      //   token: response.data?.token,
      // };
      // dispatch(updateUser({ user: userObject }));
      navigation.navigate(screenNames.HOME);
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/brand/logo.png')}
        style={styles.image}
      />
      <Text style={styles.mainText}>Login</Text>
      <Text style={styles.subText}>Welcome back. We missed you!</Text>
      <CustomInput
        formik={formik}
        name="email"
        placeholder="Email Address"
        keyboardType="email-address"
      />
      <CustomInput
        formik={formik}
        name="password"
        placeholder="Password"
        secureTextEntry
        containerStyle={{
          marginTop: 16,
        }}
      />
      <Button
        title="Log in"
        buttonStyle={{
          marginTop: 58,
          marginBottom: 23,
        }}
        onPress={formik.handleSubmit}
        loading={formik.values.loading}
      />
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text
            style={{
              fontFamily: DMBold,
              color: appColors.secondaryColor,
            }}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flexGrow: 1,
    paddingVertical: 25,
    backgroundColor: appColors.white,
    alignItems: 'center',
  },
  image: {
    height: 122,
    resizeMode: 'contain',
  },
  mainText: {
    fontFamily: DMBold,
    fontSize: 24,
    color: appColors.primaryColor,
    marginTop: 27,
    marginBottom: 19,
  },
  subText: {
    fontFamily: DMRegular,
    fontSize: 11,
    color: appColors.primaryColor,
    marginBottom: 19,
  },
  forgotText: {
    fontFamily: DMBold,
    fontSize: 11,
    color: appColors.secondaryColor,
    marginBottom: 50,
  },
  signupText: {
    fontFamily: DMRegular,
    fontSize: 10,
    color: appColors.primaryColor,
  },
});

export default RegisterScreen;
