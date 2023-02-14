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
}

const listItems: ListType[] = [
  {
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    title: 'About The Church',
    icon: <InfoIcon />,
  },
  {
    title: 'Livestream',
    icon: <VideoIcon />,
  },
  {
    title: 'Devotional',
    icon: <OpenBookIcon />,
  },
  {
    title: 'Testimonies',
    icon: <NoteIcon />,
  },
  {
    title: 'Podcast',
    icon: <PodcastIcon />,
  },
  {
    title: 'Events',
    icon: <EventsIcon />,
  },
  {
    title: 'Announcements',
    icon: <AnnouncementIcon />,
  },
  {
    title: 'Feedbacks',
    icon: <FeedbackIcon />,
  },
  {
    title: 'Authentication',
    icon: <></>,
    type: 'authentication',
  },
];

export default listItems;
