import VideoPlayer from '../src/components/VideoPlayer/VideoPlayer';

export default {
  title: 'Organisms/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    docs: {
      description: {
        component: 'VideoPlayer input.',
      },
      source: {
        language: 'jsx',
        code: `
          import VideoPlayer from 'meticulous-ui/components/VideoPlayer';

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
    thumbnail: {
      control: { type: 'text' },
      description: 'Defines the thumbnail of the video in video player',
    },
    width: {
      control: { type: 'text' },
      description: 'Defines the width of video player in non-full screen mode',
    },
    height: {
      control: { type: 'text' },
      description: 'Defines the height of video player in non-full screen mode',
    },
    borderRadius: {
      control: { type: 'number' },
      description: 'Defines the border radius of video player in non-full screen mode',
    },
    hasShimmer: {
      control: { type: 'boolean' },
      description: 'Show a shimmer placeholder while the video loads',
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
  width: '600',
  height: 'auto',
  thumbnail: '',
  borderRadius: 8,
  hasShimmer: true,
};

export const WithThumbnail = (args) => <VideoPlayer {...args} />;

WithThumbnail.storyName = 'With Thumbnail';

WithThumbnail.args = {
  link: 'https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4',
  thumbnail: 'https://picsum.photos/seed/videoplayer/960/400',
  width: '600',
  height: 'auto',
  borderRadius: 8,
  hasShimmer: true,
};

WithThumbnail.parameters = {
  docs: {
    description: {
      story:
        'Shimmer shows while the video loads, then fades out once the poster thumbnail and first frame are ready.',
    },
    source: {
      language: 'jsx',
      code: `
        import VideoPlayer from 'meticulous-ui/components/VideoPlayer';

        const Example = () => (
          <VideoPlayer
            link='https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4'
            thumbnail='https://picsum.photos/seed/videoplayer/960/400'
            width='600'
          />
        );
      `,
    },
  },
};
