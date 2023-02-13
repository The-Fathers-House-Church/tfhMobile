import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import ErrorIcon from './ErrorIcon';
import SuccessIcon from './SuccessIcon';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      renderLeadingIcon={() => <SuccessIcon />}
      style={{ borderRadius: 6.23, borderLeftWidth: 0 }}
      contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '500',
        color: '#616564',
        fontFamily: DMBold,
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: 400,
        fontFamily: DMRegular,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      renderLeadingIcon={() => <ErrorIcon />}
      style={{ borderRadius: 6.23, borderLeftWidth: 0 }}
      contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '500',
        color: '#616564',
        fontFamily: DMBold,
      }}
      text2Style={{
        fontSize: 13,
        fontWeight: 400,
        fontFamily: DMRegular,
      }}
    />
  ),
  info: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderRadius: 6.23, borderLeftColor: appColors.info }}
      contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '500',
        color: '#616564',
        fontFamily: DMBold,
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: 400,
        fontFamily: DMRegular,
      }}
    />
  ),
  warning: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderRadius: 6.23, borderLeftColor: appColors.warning }}
      contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '500',
        color: '#616564',
        fontFamily: DMBold,
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: 400,
        fontFamily: DMRegular,
      }}
    />
  ),
};

const FeedbackToast = () => {
  return <Toast config={toastConfig} />;
};

export default FeedbackToast;
