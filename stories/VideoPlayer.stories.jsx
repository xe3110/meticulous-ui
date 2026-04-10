import VideoPlayer from '../src/components/VideoPlayer/VideoPlayer';

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
              <VideoPlayer link='https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4' width=800 />
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
  },
  argTypes: {
    link: {
      control: { type: 'text' },
      description: 'Defines the link of the video in video player',
    },
    width: {
      control: { type: 'number' },
      description: 'Defines the width of video player in non-full screen mode',
    },
  },
};

// Default story
export const Default = (args) => {
  return <VideoPlayer {...args} />;
};

Default.storyName = 'VideoPlayer';

Default.args = {
  link: 'https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4',
  width: 600,
};
