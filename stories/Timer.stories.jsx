import Timer from '../src/components/Timer/Timer';
import white from '../src/colors/white';

export default {
  title: 'Organisms/Timer',
  component: Timer,
  parameters: {
    docs: {
      description: {
        component: 'Analog Timer',
      },
      source: {
        language: 'jsx',
        code: `
          import Timer from 'meticulous-ui/components/Timer';

          <Timer
            color='green'
            showTime
            showTimeWithSec
            timeZone='Asia/Kolkata'
            isDigital
            timerSeconds={61}
            size={30}
          />
        `,
      },
    },
  },
  argTypes: {
    color: {
      description: 'Color theme key for the clock and accent elements',
      control: 'select',
      options: [
        'green',
        'red',
        'blue',
        'brown',
        'grey',
        'indigo',
        'orange',
        'teal',
        'violet',
        'yellow',
      ],
    },
    size: { description: 'Diameter of the clock in pixels', control: 'number' },
    timerSeconds: { description: 'Countdown duration in seconds. Shows timer controls when > 0', control: 'number' },
    isDigital: { description: 'Shows a digital readout when true; analog hands when false', control: 'boolean' },
    showTime: { description: 'Whether to display the time readout', control: 'boolean' },
    showTimeWithSec: { description: 'Includes seconds in the digital readout when true', control: 'boolean' },
    timeZone: { description: "IANA timezone string (e.g. `'Asia/Kolkata'`)", control: 'text' },
    onTimerAdd: { description: 'Called when the timer is started' },
    onTimerComplete: { description: 'Called when the countdown reaches zero' },
    onTimerRemove: { description: 'Called when the timer is stopped' },
    onTimerPause: { description: 'Called when the timer is paused' },
    onTimerPlay: { description: 'Called when a paused timer is resumed' },
  },
};

export const Default = (args) => <Timer {...args} />;

Default.storyName = 'Timer';
Default.args = {
  color: 'green',
  size: 30,
  timerSeconds: 61,
  isDigital: true,
  showTime: true,
  showTimeWithSec: true,
  timeZone: 'Asia/Kolkata',
};

const colors = [
  'green',
  'red',
  'blue',
  'brown',
  'grey',
  'indigo',
  'orange',
  'teal',
  'violet',
  'yellow',
];

export const Colors = {
  name: 'Colors',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
const colors = ['green', 'red', 'blue', 'brown', 'grey', 'indigo', 'orange', 'teal', 'violet', 'yellow'];

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
  {colors.map((color) => (
    <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Timer color={color} timerSeconds={45} />
      <span style={{ fontSize: '12px' }}>{color}</span>
    </div>
  ))}
</div>
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
      {colors.map((color) => (
        <div
          key={color}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <Timer color={color} timerSeconds={45} />
          <span style={{ color: white, fontSize: '12px' }}>{color}</span>
        </div>
      ))}
    </div>
  ),
};

export const DigitalVsAnalog = {
  name: 'Digital vs Analog',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
<div style={{ display: 'flex', gap: '2rem' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
    <Timer isDigital timerSeconds={45} />
    <span style={{ fontSize: '12px' }}>Digital</span>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
    <Timer isDigital={false} timerSeconds={45} />
    <span style={{ fontSize: '12px' }}>Analog</span>
  </div>
</div>
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <Timer isDigital timerSeconds={45} />
        <span style={{ color: white, fontSize: '12px' }}>Digital</span>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <Timer isDigital={false} timerSeconds={45} />
        <span style={{ color: white, fontSize: '12px' }}>Analog</span>
      </div>
    </div>
  ),
};

const sizes = [16, 24, 30, 38, 45];

export const Sizes = {
  name: 'Sizes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
const sizes = [16, 24, 30, 38, 45];

<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '2rem' }}>
  {sizes.map((size, i) => (
    <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <Timer size={size} timerSeconds={45} isDigital={i % 2 === 0} />
      <span style={{ fontSize: '12px' }}>size={size}</span>
    </div>
  ))}
</div>
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '2rem' }}>
      {sizes.map((size, i) => (
        <div
          key={size}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <Timer size={size} timerSeconds={45} isDigital={i % 2 === 0} />
          <span style={{ color: white, fontSize: '12px' }}>size={size}</span>
        </div>
      ))}
    </div>
  ),
};
