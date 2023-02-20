import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  LogBox,
} from 'react-native';
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
import Modal from 'react-native-modal';
import DropdownButton from '../../../common/DropdownButton';
import ChurchBranchComponent from '../../../components/Auth/ChurchBranchComponent';
import ChurchMemberLayout from '../../../components/Auth/ChurchMemberLayout';
import { fontScale } from '../../../functions/font';

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
    member: boolean | undefined;
    registrationSource: string;
    loading: boolean;
  }

  const [centreModalState, setCentreModalState] = React.useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      churchCenter: '',
      dateOfBirth: undefined,
      firstName: '',
      lastName: '',
      member: undefined,
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
      dateOfBirth: yup.string().required('Required'),
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      member: yup.boolean().required('Required'),
      churchCenter: yup.string().when('member', {
        is: true,
        then: schema => schema.required('Required'),
      }),
      phoneNumber: yup.string().required('Required'),
    }),
    enableReinitialize: true,
  });

  const submitValues = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post('/user/register', {
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

  const selectChurchBranch = (branch: string) => {
    formik.setFieldValue('churchCenter', branch);
    setTimeout(() => {
      setCentreModalState(false);
    }, 700);
  };
  const selectMemberStatus = (status: boolean) => {
    formik.setFieldValue('member', status);
  };

  return (
    <>
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
        <SafeAreaView>
          <CustomInput
            formik={formik}
            name="firstName"
            placeholder="First Name"
          />
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
          <ChurchMemberLayout
            value={formik.values.member}
            error={formik.errors.member}
            showError={
              formik.touched.member && formik.errors.member ? true : false
            }
            selectMemberStatus={selectMemberStatus}
          />

          {formik.values.member && (
            <DropdownButton
              value={formik.values.churchCenter}
              placeholder="Which branch are you in?"
              error={formik.errors.churchCenter}
              showError={
                formik.touched.churchCenter && formik.errors.churchCenter
                  ? true
                  : false
              }
              containerStyle={{
                marginTop: 10,
              }}
              onPress={() => {
                setCentreModalState(true);
                formik.setFieldTouched('churchCenter', true);
              }}
            />
          )}
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
        </SafeAreaView>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.LOGIN)}>
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
        <Modal
          isVisible={centreModalState}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          onBackdropPress={() => setCentreModalState(false)}
          onBackButtonPress={() => setCentreModalState(false)}>
          <ChurchBranchComponent
            selectItem={selectChurchBranch}
            selectedItem={formik.values.churchCenter}
          />
        </Modal>
      </ScrollView>
    </>
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
    fontSize: fontScale(24),
    color: appColors.primaryColor,
    marginTop: 4,
    marginBottom: 11,
  },
  subText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.primaryColor,
    marginBottom: 33,
  },
  forgotText: {
    fontFamily: DMBold,
    fontSize: fontScale(11),
    color: appColors.secondaryColor,
    marginBottom: 50,
  },
  signInText: {
    fontFamily: DMRegular,
    fontSize: fontScale(10),
    color: appColors.primaryColor,
    alignSelf: 'center',
  },
});

export default RegisterScreen;
