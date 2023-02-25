import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { DevotionalType } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEVOTIONAL_STORAGE } from '../../functions/environmentVariables';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import CheckedIcon from '../../assets/icons/svgs/devotional/checked.svg';
import CheckedIconWhite from '../../assets/icons/svgs/devotional/checked-white.svg';

const ItemCard = ({
  devotional,
  selected,
  changeSelectedDevotional,
}: {
  devotional: DevotionalType;
  selected: boolean;
  changeSelectedDevotional: (devotional: DevotionalType) => void;
}) => {
  const [isRead, setIsRead] = React.useState(false);

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  // Check if devotional is read
  React.useEffect(() => {
    const checkIfRead = async () => {
      try {
        let completedDevotionals: any = await AsyncStorage.getItem(
          DEVOTIONAL_STORAGE,
        );

        completedDevotionals =
          completedDevotionals != null ? JSON.parse(completedDevotionals) : [];

        const readDevotional = completedDevotionals.find(
          (item: any) => item === devotional?._id,
        );

        if (readDevotional) {
          setIsRead(true);
        } else {
          setIsRead(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkIfRead();
  }, [devotional]);

  return (
    <TouchableOpacity
      onPress={() => changeSelectedDevotional(devotional)}
      style={[
        styles.container,
        {
          backgroundColor: selected ? appColors.primaryColor : '#F6FAFF',
        },
      ]}>
      {isRead &&
        (selected ? (
          <CheckedIconWhite style={styles.checkedIcon} />
        ) : (
          <CheckedIcon style={styles.checkedIcon} />
        ))}
      <Text
        style={[
          styles.mainText,
          {
            color: selected ? appColors.white : appColors.primaryColor,
          },
        ]}>
        {new Date(devotional.date).getDate()}
      </Text>
      <Text
        style={[
          styles.subText,
          {
            color: selected ? appColors.white : appColors.primaryColor,
          },
        ]}>
        {month[new Date(devotional.date).getMonth()]}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 79,
    width: 75,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: appColors.primaryColor,
  },
  mainText: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(20),
  },
  subText: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(10),
  },
  checkedIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default ItemCard;
