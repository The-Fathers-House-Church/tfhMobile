import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold } from '../../theme/fonts';
import appColors from '../../theme/colors';

interface ItemType {
  title: string;
  content1: string;
  content2?: string;
  hasList?: boolean;
  listItems?: string[];
}

const FaithCard = ({ item }: { item: ItemType }) => {
  const separateText = (text: string) => {
    // separating by colon (:)
    return text.split(/:(.*)/s);
  };
  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content1}>{item.content1}</Text>
      {item.content2 && <Text style={styles.content2}>{item.content2}</Text>}
      {item.hasList && (
        <View style={styles.listContainer}>
          {item.listItems?.map((listItem, index) => (
            <View key={index}>
              <Text style={styles.content1}>
                <Text style={styles.listTitle}>
                  {separateText(listItem)[0]}
                </Text>
                :{separateText(listItem)[1]}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    marginBottom: 5,
    fontSize: 12,
  },
  content1: {
    color: appColors.black,
    fontSize: 10,
    lineHeight: 13.78,
  },
  content2: {
    color: appColors.black,
    fontSize: 10,
    marginTop: 10,
    lineHeight: 13.78,
  },
  listContainer: {
    gap: 10,
    marginTop: 10,
  },
  listTitle: {
    fontFamily: DMBold,
    color: appColors.black,
    fontSize: 10,
    marginTop: 10,
  },
});

export default FaithCard;
