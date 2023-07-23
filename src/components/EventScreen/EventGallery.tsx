import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import ReactNativeModal from 'react-native-modal';
import Button from '../../common/Button';
import { EventGalleryType } from '../../types/types';

const EventGallery = ({ gallery }: { gallery: EventGalleryType }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const [selectedImage, setSelectedImage] = React.useState('');
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Event in pictures</Text>
        <View style={styles.imageContainer}>
          {gallery.length ? (
            gallery.map(image => (
              <TouchableOpacity
                style={{
                  width: '48%',
                }}
                key={image.id}
                onPress={() => {
                  setSelectedImage(image.imageURL);
                  setModalOpen(true);
                }}>
                <Image
                  source={{
                    uri: image.imageURL,
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.notFoundText}>
              No image found at the moment
            </Text>
          )}
        </View>
      </View>
      <ReactNativeModal
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        onBackButtonPress={() => setModalOpen(false)}>
        <Image
          source={{
            uri: selectedImage,
          }}
          style={{
            width: '100%',
            height: '50%',
            resizeMode: 'contain',
            marginBottom: 20,
          }}
        />
        <Button title="Close" onPress={() => setModalOpen(false)} />
      </ReactNativeModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(16),
    color: appColors.black,
    marginBottom: 12,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    flexWrap: 'wrap',
    gap: 10,
  },
  image: {
    height: 276,
    width: '100%',
    resizeMode: 'cover',
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
    marginBottom: 20,
  },
});

export default EventGallery;
