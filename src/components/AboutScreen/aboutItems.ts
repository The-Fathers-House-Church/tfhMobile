import { screenNames } from './../../screens/screenNames';
interface ItemType {
  title: string;
  screenName: string;
}

const aboutItems: ItemType[] = [
  {
    title: 'Our History',
    screenName: screenNames.HISTORY,
  },
  {
    title: 'Our Pastors',
    screenName: screenNames.PASTORS,
  },
  {
    title: 'Statement of Faith',
    screenName: screenNames.STATEMENT_OF_FAITH,
  },
];

export default aboutItems;
