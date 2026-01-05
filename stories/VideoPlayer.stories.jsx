import VideoPlayer from '../src/components/VideoPlayer/VideoPlayer';

const VideoPlayerWrapper = () => {
  return (
    <VideoPlayer link='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' />
  );
};

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayerWrapper,
  parameters: {
    docs: {
      description: {
        component: 'VideoPlayer input.',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  // import VideoPlayer from '../src/components/VideoPlayer';

  // const VideoPlayerWrapper = () => {
  //   return (
  //     <VideoPlayer link='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' />
  //   );
  // };

  // HAS SHORTCUTS:-
  // Spacebar (Play / Pause)
  // F (Fullscreen)
  // Esc (Exit Fullscreen)
  // M (Mute / Unmute)
  // ArrowUp (Volume high)
  // ArrowDown (volume low)
  // ArrowLeft (seek back)
  // ArrowRight (seek ahead)

  return <VideoPlayerWrapper />;
};

Default.storyName = 'VideoPlayer';
