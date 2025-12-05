import Timer from '../src/components/Timer/Timer';

const TimerWrapper = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Timer />
      <Timer isDigital={false} color='blue' timerSec={32} />
    </div>
  );
};

export default {
  title: 'Components/Timer',
  component: TimerWrapper,
  parameters: {
    docs: {
      description: {
        component: 'Analog Timer',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  // import Timer from 'meticulous-ui/components/Timer';

  // return (
  //   <Timer />
  // )

  return <TimerWrapper />;
};

Default.storyName = 'Timer';
