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
import CustomDatePicker from '../../../common/DatePicker';

const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['REGISTER']>) => {
  interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    churchCenter: string;
    dateOfBirth: Date | undefined;
    member: boolean;
    registrationSource: string;
    loading: boolean;
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      churchCenter: '',
      dateOfBirth: undefined,
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
      confirmPassword: yup
        .string()
        .required('Confirm your password')
        .oneOf([yup.ref('password')], "Passwords don't match"),
      churchCenter: yup.string().required('Required'),
      dateOfBirth: yup.string().required('Required'),
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      member: yup.boolean().required('Required'),
      phoneNumber: yup.string().required('Required'),
    }),
  });

  const submitValues = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/login', {
        email: formik.values.email,
        password: formik.values.password,
        phoneNumber: formik.values.phoneNumber,
        member: formik.values.member,
        lastName: formik.values.lastName,
        firstName: formik.values.firstName,
        dateOfBirth: formik.values.dateOfBirth,
        churchCenter: formik.values.churchCenter,
        registrationSource: formik.values.registrationSource,
      });

      sendFeedback(response.data?.message, 'success');

      navigation.navigate(screenNames.LOGIN);
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  console.log(formik.errors);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/brand/logo.png')}
        style={styles.image}
      />
      <Text style={styles.mainText}>Signup</Text>
      <Text style={styles.subText}>
        Join the mission's assignment of the New Testament Church to be an
        impact to your immediate community.
      </Text>
      <CustomInput formik={formik} name="firstName" placeholder="First Name" />
      <CustomInput
        formik={formik}
        name="lastName"
        placeholder="Last Name"
        containerStyle={{
          marginTop: 10,
        }}
      />
      <CustomInput
        formik={formik}
        name="email"
        placeholder="Email Address"
        keyboardType="email-address"
        containerStyle={{
          marginTop: 10,
        }}
      />
      <CustomInput
        formik={formik}
        name="phoneNumber"
        placeholder="Phone Number"
        keyboardType="phone-pad"
        containerStyle={{
          marginTop: 10,
        }}
      />
      <CustomDatePicker
        formik={formik}
        name="dateOfBirth"
        placeholder="Date of Birth"
        containerStyle={{
          marginTop: 10,
        }}
      />
      <CustomInput
        formik={formik}
        name="password"
        placeholder="Password"
        secureTextEntry
        containerStyle={{
          marginTop: 10,
        }}
      />
      <CustomInput
        formik={formik}
        name="confirmPassword"
        placeholder="Confirm Password"
        secureTextEntry
        containerStyle={{
          marginTop: 10,
        }}
      />
      <Button
        title="Submit Form"
        buttonStyle={{
          marginTop: 25,
          marginBottom: 19,
          backgroundColor: !formik.isValid
            ? appColors.grey
            : appColors.secondaryColor,
        }}
        disabled={!formik.isValid}
        onPress={formik.handleSubmit}
        loading={formik.values.loading}
      />

      <TouchableOpacity onPress={() => navigation.navigate(screenNames.LOGIN)}>
        <Text style={styles.signInText}>
          Have an account?{' '}
          <Text
            style={{
              fontFamily: DMBold,
              color: appColors.secondaryColor,
            }}>
            Login
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
    paddingTop: 3,
    paddingBottom: 33,
    backgroundColor: appColors.white,
  },
  image: {
    height: 75,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainText: {
    fontFamily: DMBold,
    fontSize: 24,
    color: appColors.primaryColor,
    marginTop: 4,
    marginBottom: 11,
  },
  subText: {
    fontFamily: DMRegular,
    fontSize: 11,
    color: appColors.primaryColor,
    marginBottom: 33,
  },
  forgotText: {
    fontFamily: DMBold,
    fontSize: 11,
    color: appColors.secondaryColor,
    marginBottom: 50,
  },
  signInText: {
    fontFamily: DMRegular,
    fontSize: 10,
    color: appColors.primaryColor,
    alignSelf: 'center',
  },
});

export default RegisterScreen;
