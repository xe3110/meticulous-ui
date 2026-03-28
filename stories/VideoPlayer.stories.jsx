import VideoPlayer from '../src/components/VideoPlayer/VideoPlayer';

const VideoPlayerWrapper = () => {
  return (
    <VideoPlayer link='https://videos.pexels.com/video-files/35450385/15019071_2560_1440_25fps.mp4' />
  );
};

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    docs: {
      description: {
        component: 'VideoPlayer input.',
      },
      source: {
        language: 'jsx',
        code: `
          import VideoPlayer from '../src/components/VideoPlayer';

          const VideoPlayerWrapper = () => {
            return (
              <VideoPlayer link='https://videos.pexels.com/video-files/35450385/15019071_2560_1440_25fps.mp4' />
            );
          };

          // HAS SHORTCUTS:-
          // Spacebar (Play / Pause)
          // F (Fullscreen)
          // Esc (Exit Fullscreen)
          // M (Mute / Unmute)
          // ArrowUp (Volume high)
          // ArrowDown (volume low)
          // ArrowLeft (seek back)
          // ArrowRight (seek ahead)
        `,
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  return <VideoPlayerWrapper />;
};

Default.storyName = 'VideoPlayer';
