import { useState } from 'react';
import Switch from '../src/components/Switch/Switch';
import Check from '../src/components/Icons/Check';
import Close from '../src/components/Icons/Close';
import { green, grey, blue, red, purple, white } from '../src/colors';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle switch that reports `true`/`false` via `onChange`. Supports optional icons in the thumb and per-state colours and labels rendered inside the track.',
      },
      source: {
        language: 'jsx',
        code: `
import Switch from 'meticulous-ui/components/Switch';

const Example = () => (
  <Switch onChange={(val) => console.log(val)} />
);
        `,
      },
    },
  },
  argTypes: {
    checked: {
      description: 'Controlled checked state',
      control: 'boolean',
    },
    defaultChecked: {
      description: 'Initial state for uncontrolled usage',
      control: 'boolean',
    },
    onColor: {
      description: 'Track color when ON (any CSS color string)',
      control: 'color',
    },
    offColor: {
      description: 'Track color when OFF (any CSS color string)',
      control: 'color',
    },
    onLabel: {
      description: 'Label shown inside the track when ON',
      control: 'text',
    },
    offLabel: {
      description: 'Label shown inside the track when OFF',
      control: 'text',
    },
    label: {
      description: 'Accessible name for screen readers (use when no visible label is provided)',
      control: 'text',
    },
    id: {
      description: 'Forwarded to the underlying button — pair with an external <label htmlFor>',
      control: 'text',
    },
    disabled: {
      description: 'Disable interaction',
      control: 'boolean',
    },
    isGlass: {
      description:
        'Renders the thumb as a frosted-glass lens — designed for dark or coloured backgrounds',
      control: 'boolean',
    },
  },
};

const Controlled = (args) => {
  const [on, setOn] = useState(args.defaultChecked ?? false);
  return <Switch {...args} checked={on} onChange={setOn} />;
};

export const Default = Controlled.bind({});
Default.args = {
  defaultChecked: false,
  disabled: false,
  isGlass: false,
  onLabel: '',
  offLabel: '',
  onColor: '',
  offColor: '',
  label: '',
  id: '',
};

export const WithLabels = {
  name: 'With Labels',
  parameters: {
    controls: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
<Switch onLabel="Enabled" offLabel="Disabled" onChange={val => console.log(val)} />
        `,
      },
    },
  },
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
        <Switch
          checked={on}
          onChange={setOn}
          onLabel='Enabled'
          offLabel='Disabled'
          onColor={green.m500}
          offColor={grey.m400}
        />
        <Switch
          defaultChecked
          onLabel='Online'
          offLabel='Offline'
          onColor={blue.m500}
          offColor={red.m400}
        />
      </div>
    );
  },
};

export const WithIcons = {
  name: 'With Icons',
  parameters: {
    controls: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Check from 'meticulous-ui/components/Icons/Check';
import Close from 'meticulous-ui/components/Icons/Close';

<Switch
  onIcon={<Check size={14} color="white" />}
  offIcon={<Close size={12} color="white" />}
  onColor={green.m500}
  offColor={grey.m500}
  onLabel="Active"
  offLabel="Inactive"
  onChange={val => console.log(val)}
/>
        `,
      },
    },
  },
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem', padding: '1rem' }}>
        <Switch
          checked={on}
          onChange={setOn}
          onIcon={<Check size={14} color={green.m600} />}
          offIcon={<Close size={12} color={grey.m600} />}
          onColor={green.m100}
          offColor={grey.m200}
          onLabel='Active'
          offLabel='Inactive'
        />
        <Switch
          defaultChecked
          onIcon={<Check size={14} color='white' />}
          offIcon={<Close size={12} color={white} />}
          onColor={blue.m500}
          offColor={grey.m500}
          onLabel='On'
          offLabel='Off'
        />
      </div>
    );
  },
};

export const WithGlass = {
  name: 'With Glass',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Check from 'meticulous-ui/components/Icons/Check';
import Close from 'meticulous-ui/components/Icons/Close';
import { green, grey, white } from 'meticulous-ui/colors';

<Switch
  onLabel="Enabled"
  offLabel="Disabled"
  onColor={green.m500}
  offColor={grey.m400}
  onIcon={<Check size={14} color={white} />}
  offIcon={<Close size={12} color={white} />}
  isGlass
  onChange={val => console.log(val)}
/>
        `,
      },
    },
  },
  render: () => {
    const [on, setOn] = useState(false);

    return (
      <div style={{ backgroundColor: grey.m700, width: '100%', padding: '3rem 2rem' }}>
        <Switch
          checked={on}
          onChange={setOn}
          onLabel='Enabled'
          offLabel='Disabled'
          onColor={green.m500}
          offColor={grey.m400}
          onIcon={<Check size={14} color={white} />}
          offIcon={<Close size={12} color={white} />}
          isGlass
        />
      </div>
    );
  },
};

export const States = {
  name: 'All States',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Check from 'meticulous-ui/components/Icons/Check';
import Close from 'meticulous-ui/components/Icons/Close';
import { green, grey, purple, red, white } from 'meticulous-ui/colors';

{/* Default */}
<Switch defaultChecked={false} />

{/* On */}
<Switch defaultChecked />

{/* On — custom color */}
<Switch defaultChecked onColor={purple.m500} />

{/* Off — red off color */}
<Switch defaultChecked={false} offColor={red.m600} />

{/* Disabled off */}
<Switch defaultChecked={false} disabled />

{/* Disabled on */}
<Switch defaultChecked disabled />

{/* Glass — off */}
<Switch
  defaultChecked={false}
  onColor={green.m500}
  offColor={grey.m400}
  onIcon={<Check size={14} color={white} />}
  offIcon={<Close size={12} color={white} />}
  isGlass
/>

{/* Glass — on */}
<Switch
  defaultChecked
  onColor={green.m500}
  offColor={grey.m400}
  onIcon={<Check size={14} color={white} />}
  offIcon={<Close size={12} color={white} />}
  isGlass
/>

{/* Glass — off — red off color */}
<Switch
  defaultChecked={false}
  onColor={green.m500}
  offColor={red.m600}
  onIcon={<Check size={14} color={white} />}
  offIcon={<Close size={12} color={white} />}
  isGlass
/>

{/* Glass — disabled off */}
<Switch
  defaultChecked={false}
  disabled
  onColor={green.m500}
  offColor={grey.m400}
  onIcon={<Check size={14} color={white} />}
  offIcon={<Close size={12} color={white} />}
  isGlass
/>

{/* Glass — disabled on */}
<Switch
  defaultChecked
  disabled
  onColor={green.m500}
  offColor={grey.m400}
  onIcon={<Check size={14} color={white} />}
  offIcon={<Close size={12} color={white} />}
  isGlass
/>
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
      {[
        { label: 'Off', props: { defaultChecked: false } },
        { label: 'On', props: { defaultChecked: true } },
        { label: 'On — custom color', props: { defaultChecked: true, onColor: purple.m500 } },
        { label: 'Off — red off color', props: { defaultChecked: false, offColor: red.m600 } },
        { label: 'Disabled off', props: { defaultChecked: false, disabled: true } },
        { label: 'Disabled on', props: { defaultChecked: true, disabled: true } },
      ].map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
          <Switch {...props} />
          <span style={{ fontSize: '1.3rem', color: grey.m600 }}>{label}</span>
        </div>
      ))}
      <div
        style={{
          backgroundColor: grey.m700,
          borderRadius: '0.8rem',
          padding: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.6rem',
          marginTop: '0.4rem',
        }}
      >
        {[
          {
            label: 'Glass — off',
            props: {
              defaultChecked: false,
              onColor: green.m500,
              offColor: grey.m400,
              onIcon: <Check size={14} color={white} />,
              offIcon: <Close size={12} color={white} />,
              isGlass: true,
            },
          },
          {
            label: 'Glass — on',
            props: {
              defaultChecked: true,
              onColor: green.m500,
              offColor: grey.m400,
              onIcon: <Check size={14} color={white} />,
              offIcon: <Close size={12} color={white} />,
              isGlass: true,
            },
          },
          {
            label: 'Glass — off — red off color',
            props: {
              defaultChecked: false,
              onColor: green.m500,
              offColor: red.m600,
              onIcon: <Check size={14} color={white} />,
              offIcon: <Close size={12} color={white} />,
              isGlass: true,
            },
          },
          {
            label: 'Glass — disabled off',
            props: {
              defaultChecked: false,
              disabled: true,
              onColor: green.m500,
              offColor: grey.m400,
              onIcon: <Check size={14} color={white} />,
              offIcon: <Close size={12} color={white} />,
              isGlass: true,
            },
          },
          {
            label: 'Glass — disabled on',
            props: {
              defaultChecked: true,
              disabled: true,
              onColor: green.m500,
              offColor: grey.m400,
              onIcon: <Check size={14} color={white} />,
              offIcon: <Close size={12} color={white} />,
              isGlass: true,
            },
          },
        ].map(({ label, props }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
            <Switch {...props} />
            <span style={{ fontSize: '1.3rem', color: grey.m200 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
