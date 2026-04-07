import VideoPlayer from '../src/components/VideoPlayer/VideoPlayer';

const VideoPlayerWrapper = () => {
  return (
    <VideoPlayer link='https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4' />
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
              <VideoPlayer link='https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4' />
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
