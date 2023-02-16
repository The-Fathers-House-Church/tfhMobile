import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import LoginIcon from '../../../assets/icons/svgs/more/log-in.svg';
import LogoutIcon from '../../../assets/icons/svgs/more/log-out.svg';

const AuthenticationItem = ({
  navigateToScreen,
  screenName,
}: {
  navigateToScreen: (screenName: string) => void;
  screenName: string;
}) => {
  const loggedIn = true;
  return (
    <>
      {loggedIn ? (
        <TouchableOpacity style={styles.container}>
          <LogoutIcon />
          <Text style={styles.titleText}>Sign out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.container}>
          <LoginIcon />
          <Text style={styles.titleText}>Sign in</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#D82F3C',
  },
  titleText: {
    fontFamily: DMRegular,
    fontSize: 13,
    color: appColors.white,
  },
});

export default AuthenticationItem;
