import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';
import ChurchBranchItem from './ChurchBranchItem';
import churchBranches from './churchBranches';

const ChurchBranchComponent = ({
  selectItem,
  selectedItem,
}: {
  selectItem: (item: string) => void;
  selectedItem: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the branch you worship in.</Text>
      <View
        style={{
          gap: 9,
        }}>
        {churchBranches.map(branch => (
          <ChurchBranchItem
            name={branch.name}
            address={branch.address}
            key={branch.name}
            selected={selectedItem === branch.name}
            onPress={() => selectItem(branch.name)}
          />
        ))}
      </View>
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

export default ChurchBranchComponent;
