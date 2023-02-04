import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
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
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: 400,
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
      }}
      text2Style={{
        fontSize: 13,
        fontWeight: 400,
      }}
    />
  ),
};

const FeedbackToast = () => {
  return <Toast config={toastConfig} />;
};

export default FeedbackToast;
