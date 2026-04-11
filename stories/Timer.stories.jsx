import Timer from '../src/components/Timer/Timer';

const TimerWrapper = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Timer
        timerSeconds={61}
        onTimerComplete={() => alert('complete')}
        onTimerRemove={() => alert('remove')}
        onTimerPause={() => alert('pause')}
        onTimerPlay={() => alert('play')}
        onTimerAdd={() => alert('timer added')}
      />
      <Timer isDigital={false} color='blue' timerSeconds={32} />
    </div>
  );
};

export default {
  title: 'Components/Timer',
  component: Timer,
  parameters: {
    docs: {
      description: {
        component: 'Analog Timer',
      },
      source: {
        language: 'jsx',
        code: `
          import Timer from 'meticulous-ui/components/Timer/Timer';

          const TimerWrapper = () => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Timer
                  color='green'
                  showTime
                  showTimeWithSec
                  timeZone='Asia/Kolkata'
                  isDigital
                  timerSeconds={61}
                  onTimerComplete={() => alert('complete')}
                  onTimerRemove={() => alert('remove')}
                  onTimerPause={() => alert('pause')}
                  onTimerPlay={() => alert('play')}
                  onTimerAdd={() => alert('timer added')}
                />
                <Timer isDigital={false} color='blue' timerSec={32} />
              </div>
            );
          };
        `,
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  return <TimerWrapper />;
};

Default.storyName = 'Timer';
