import React from 'react';
import LivestreamIcon from '../../assets/icons/svgs/media/livestream.svg';
import VideoIcon from '../../assets/icons/svgs/media/video.svg';
import PodcastIcon from '../../assets/icons/svgs/media/podcast.svg';
import MessageIcon from '../../assets/icons/svgs/media/messages.svg';

const mediaContents: {
  icon: React.ReactNode;
  mainText: string;
  subText: string;
  showInfoText?: boolean;
  isLive?: boolean;
}[] = [
  {
    icon: <LivestreamIcon width={40} height={29.46} />,
    mainText: 'Livestream',
    subText: 'Join us live for our online services',
    showInfoText: true,
    isLive: true,
  },
  {
    icon: <VideoIcon width={40} height={40} />,
    mainText: 'Other Streaming Platforms',
    subText:
      'Join us live for our online services using other channels like YouTube, IG Live, etc.',
  },
  {
    icon: <PodcastIcon width={40} height={40.22} />,
    mainText: 'Podcast',
    subText:
      'Strengthen your spiritual growth in the word by listening to our messages',
  },
  {
    icon: <MessageIcon width={40} height={40} />,
    mainText: 'Recent Messages',
    subText:
      'Watch our past Sunday services message to hold you through the year.',
  },
];

export default mediaContents;
