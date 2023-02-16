import React from 'react';
import HomeIcon from '../../../assets/icons/svgs/more/home.svg';
import InfoIcon from '../../../assets/icons/svgs/more/info.svg';
import VideoIcon from '../../../assets/icons/svgs/more/video.svg';
import OpenBookIcon from '../../../assets/icons/svgs/more/book-open.svg';
import NoteIcon from '../../../assets/icons/svgs/more/note.svg';
import PodcastIcon from '../../../assets/icons/svgs/more/podcast.svg';
import EventsIcon from '../../../assets/icons/svgs/more/events.svg';
import AnnouncementIcon from '../../../assets/icons/svgs/more/announcement.svg';
import FeedbackIcon from '../../../assets/icons/svgs/more/feedback.svg';

export interface ListType {
  icon: React.ReactNode;
  title: string;
  type?: 'normal' | 'authentication';
  screenName: string;
}

const listItems: ListType[] = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    screenName: 'HomeScreen',
  },
  {
    title: 'About The Church',
    icon: <InfoIcon />,
    screenName: 'AboutScreen',
  },
  {
    title: 'Livestream',
    icon: <VideoIcon />,
    screenName: 'LivestreamScreen',
  },
  {
    title: 'Devotional',
    icon: <OpenBookIcon />,
    screenName: 'DevotionalsScreen',
  },
  {
    title: 'Testimonies',
    icon: <NoteIcon />,
    screenName: 'TestimoniesScreen',
  },
  {
    title: 'Podcast',
    icon: <PodcastIcon />,
    screenName: 'PodcastScreen',
  },
  {
    title: 'Events',
    icon: <EventsIcon />,
    screenName: 'EventsScreen',
  },
  {
    title: 'Announcements',
    icon: <AnnouncementIcon />,
    screenName: 'AnnouncementsScreen',
  },
  {
    title: 'Feedbacks',
    icon: <FeedbackIcon />,
    screenName: 'FeedbacksScreen',
  },
  {
    title: 'Authentication',
    icon: <></>,
    type: 'authentication',
    screenName: 'LoginScreen',
  },
];

export default listItems;
