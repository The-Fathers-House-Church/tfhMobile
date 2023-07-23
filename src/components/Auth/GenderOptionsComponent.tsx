import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import GenderItem from './GenderItem';
import genders from './genders';

const GenderOptionsComponent = ({
  selectItem,
  selectedItem,
}: {
  selectItem: (item: string) => void;
  selectedItem: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your gender</Text>
      <ScrollView
        contentContainerStyle={{
          gap: 9,
        }}>
        {genders.map(gender => (
          <GenderItem
            gender={gender}
            key={gender}
            selected={selectedItem === gender}
            onPress={() => selectItem(gender)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: appColors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 37,
  },
  title: {
    fontFamily: DMBold,
    fontSize: 14,
    color: appColors.primaryColor,
    marginBottom: 17,
    alignSelf: 'center',
  },
});

export default GenderOptionsComponent;
