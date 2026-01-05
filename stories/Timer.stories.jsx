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
  // import Timer from '../src/components/Timer/Timer';

  // const TimerWrapper = () => {
  //   return (
  //     <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
  //       <Timer
  //         color='green'
  //         showTime={true}
  //         showTimeWithSec={true}
  //         timeZone='Asia/Kolkata'
  //         isDigital={true}
  //         timerSeconds={61}
  //         onTimerComplete={() => alert('complete')}
  //         onTimerRemove={() => alert('remove')}
  //         onTimerPause={() => alert('pause')}
  //         onTimerPlay={() => alert('play')}
  //         onTimerAdd={() => alert('timer added')}
  //       />
  //       <Timer isDigital={false} color='blue' timerSec={32} />
  //     </div>
  //   );
  // };

  return <TimerWrapper />;
};

Default.storyName = 'Timer';
