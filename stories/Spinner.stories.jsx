import Spinner from '../src/components/Spinner/Spinner';
import { H4 } from '../src/components/Typography/Headings';
import P from '../src/components/Typography/P';

const SpinnerWrapper = () => {
  return <Spinner />;
};

export default {
  title: 'AtomicComponents/Spinner',
  component: SpinnerWrapper,
  parameters: {
    docs: {
      description: {
        component: 'A circular Spinner to show loading state.',
      },
      source: {
        language: 'jsx',
        code: `
      import Spinner from 'meticulous-ui/components/Spinner';

      const SpinnerWrapper = () => {
        return (
          <Spinner />
        );
      };
    `,
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'amber',
        'blue',
        'brown',
        'cyan',
        'deepPurple',
        'grey',
        'indigo',
        'lightGreen',
        'orange',
        'purple',
        'teal',
        'white',
        'black',
        'blueGray',
        'cider',
        'deepOrange',
        'green',
        'lightBlue',
        'lime',
        'pink',
        'red',
        'violet',
        'yellow',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

// Default story
export const Default = (args) => {
  return <Spinner {...args} />;
};

export const Sizes = {
  name: 'Different Sizes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div>
      <div
        style={{
          marginLeft: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '20rem',
        }}
      >
        <H4>Small:</H4>
        <Spinner size='small' />
      </div>
      <div
        style={{
          marginLeft: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '20rem',
        }}
      >
        <H4>Medium:</H4>
        <Spinner size='medium' />
      </div>
      <div
        style={{
          marginLeft: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '20rem',
        }}
      >
        <H4>Large:</H4>
        <Spinner size='large' />
      </div>
    </div>
  ),
};

export const Colors = {
  name: 'Different Colors',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '5rem',
        width: '70rem',
        margin: '2rem 5rem',
      }}
    >
      {[
        'amber',
        'blue',
        'brown',
        'cyan',
        'deepPurple',
        'grey',
        'indigo',
        'lightGreen',
        'orange',
        'purple',
        'teal',
        'white',
        'black',
        'blueGray',
        'cider',
        'deepOrange',
        'green',
        'lightBlue',
        'lime',
        'pink',
        'red',
        'violet',
        'yellow',
      ].map((clr) => (
        <div key={clr} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Spinner color={clr} />
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <P>{clr}</P>
          </div>
        </div>
      ))}
    </div>
  ),
};

Default.args = {
  color: 'green',
  size: 'medium',
};
