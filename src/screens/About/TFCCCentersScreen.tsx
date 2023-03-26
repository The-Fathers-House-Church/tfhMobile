import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import AboutBrandImage from '../../components/AboutScreen/AboutBrandImage';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import CenterCard from '../../components/AboutScreen/CenterCard';
import { TFCCType } from '../../types/types';
import { sendCatchFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import SectionLoader from '../../common/Loader/SectionLoader';
import Pagination from '../../common/Pagination';

const TFCCCentersScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['TFCC_CENTERS']
>) => {
  const [centerLoading, setCenterLoading] = React.useState(false);

  const [centers, setCenters] = React.useState<TFCCType[] | undefined>([]);
  const [centerTotalResults, setCenterTotalResults] = React.useState(0);
  const [centerPage, setCenterPage] = React.useState<number>(1);

  React.useEffect(() => {
    const getCenters = async () => {
      try {
        setCenterLoading(true);

        const response = await appAxios.get(`/tfcc/centers?page=${centerPage}`);

        setCenters(response.data.data?.results);
        setCenterTotalResults(response.data.data?.pagination?.totalResults);

        setCenterLoading(false);
      } catch (error) {
        setCenters([]);
        sendCatchFeedback(error);

        setCenterLoading(false);
      }
    };
    getCenters();
  }, [centerPage]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutBrandImage />
      <Text style={styles.title}>TFCC Centers</Text>
      {centerLoading ? (
        <SectionLoader />
      ) : centers && centers.length > 0 ? (
        <>
          <View style={styles.listContainer}>
            {centers.map(item => (
              <CenterCard key={item._id} item={item} />
            ))}
          </View>
          <Pagination
            page={centerPage}
            totalResults={centerTotalResults}
            setPage={setCenterPage}
          />
        </>
      ) : (
        <Text style={styles.notFoundText}>No TFCC center found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 31,
    paddingBottom: 20,
  },
  title: {
    fontSize: fontScale(16),
    color: appColors.primaryColor,
    marginBottom: 30,
    fontFamily: DMBold,
    textAlign: 'center',
  },
  listContainer: {
    gap: 25,
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
  },
});

export default TFCCCentersScreen;