import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { FlatList } from 'react-native';
import pastorsData from '../../components/AboutScreen/pastorsData';
import PastorCard from '../../components/AboutScreen/PastorCard';

const PastorsScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['PASTORS']>) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={pastorsData}
        renderItem={({ item }) => (
          <PastorCard pastor={item} navigateToScreen={navigateToScreen} />
        )}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginVertical: 20,
  },
  contentContainer: {
    flexGrow: 1,
    // flex: 1,
    backgroundColor: '#fff',
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#002F724D',
    marginTop: 15,
    marginBottom: 26,
  },
});
export default PastorsScreen;
