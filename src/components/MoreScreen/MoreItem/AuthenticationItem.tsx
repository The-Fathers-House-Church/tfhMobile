import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import LoginIcon from '../../../assets/icons/svgs/more/log-in.svg';
import LogoutIcon from '../../../assets/icons/svgs/more/log-out.svg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { signOut } from '../../../store/slices/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { screenNames } from '../../../screens/screenNames';
import { fontScale } from '../../../functions/font';

const AuthenticationItem = ({
  navigateToScreen,
  screenName,
}: {
  navigateToScreen: (screenName: string) => void;
  screenName: string;
}) => {
  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const logoutUser = async () => {
    dispatch(signOut());
    navigateToScreen(screenNames.HOME);
    await AsyncStorage.removeItem('user');
  };
  return (
    <>
      {user ? (
        <TouchableOpacity style={styles.container} onPress={logoutUser}>
          <LogoutIcon />
          <Text style={styles.titleText}>Sign out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigateToScreen(screenName)}>
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
    fontSize: fontScale(13),
    color: appColors.white,
  },
});

export default AuthenticationItem;
