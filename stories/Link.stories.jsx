import Link from '../src/components/Link/Link';
import P from '../src/components/Typography/P';

const THEMES = [
  'amber',
  'blue',
  'blueGray',
  'brown',
  'cider',
  'cyan',
  'deepOrange',
  'deepPurple',
  'green',
  'grey',
  'indigo',
  'lightBlue',
  'lightGreen',
  'lime',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'violet',
  'yellow',
];

export default {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          'A semantic anchor-based Link component with a sliding underline and arrow animation on hover. Accepts a `label`, a `theme` (palette color name), and an optional `shade`.',
      },
      source: {
        language: 'jsx',
        code: `
import Link from 'meticulous-ui/components/Link';

const Example = () => (
  <Link label="Report now" theme="red" href="/report" />
);
        `,
      },
    },
  },
  argTypes: {
    theme: {
      description: 'Color palette key',
      control: 'select',
      options: THEMES,
    },
    shade: {
      description: "Shade token within the palette (e.g. `'m500'`, `'a400'`)",
      control: 'text',
    },
    label: {
      description: 'Link text',
      control: 'text',
    },
    href: {
      description: 'Destination URL',
      control: 'text',
    },
    disabled: {
      description: 'Disable the link',
      control: 'boolean',
    },
    underline: {
      description: 'Show a sliding underline animation on hover',
      control: 'boolean',
    },
  },
};

export const Default = (args) => <Link {...args} />;

Default.args = {
  label: 'Report now',
  theme: 'red',
  shade: 'm500',
  href: '#',
  disabled: false,
  underline: false,
};

export const Themes = {
  name: 'Themes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Link from 'meticulous-ui/components/Link';

const THEMES = ['amber', 'blue', 'blueGray', 'brown', 'cider', 'cyan', 'deepOrange',
  'deepPurple', 'green', 'grey', 'indigo', 'lightBlue', 'lightGreen', 'lime',
  'orange', 'pink', 'purple', 'red', 'teal', 'violet', 'yellow'];

const Themes = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
    {THEMES.map((theme) => (
      <Link key={theme} label="Report now" theme={theme} href="#" />
    ))}
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem 3rem', padding: '1rem' }}>
      {THEMES.map((theme) => (
        <div
          key={theme}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.4rem',
          }}
        >
          <Link label='Report now' theme={theme} href='#' />
          <P style={{ fontSize: '1.2rem', opacity: 0.6 }}>{theme}</P>
        </div>
      ))}
    </div>
  ),
};

export const WithUnderline = {
  name: 'With Underline',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Link from 'meticulous-ui/components/Link';

const Example = () => (
  <div style={{ display: 'flex', gap: '3rem' }}>
    <Link label="Report now" theme="red" href="#" />
    <Link label="Report now" theme="red" href="#" underline />
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '4rem', padding: '1rem', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          alignItems: 'flex-start',
        }}
      >
        <Link label='Report now' theme='red' href='#' />
        <P style={{ fontSize: '0.75rem', opacity: 0.6 }}>underline: false</P>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          alignItems: 'flex-start',
        }}
      >
        <Link label='Report now' theme='red' href='#' underline />
        <P style={{ fontSize: '0.75rem', opacity: 0.6 }}>underline: true</P>
      </div>
    </div>
  ),
};

export const Disabled = {
  name: 'Disabled State',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Link from 'meticulous-ui/components/Link';

const DisabledExample = () => (
  <div style={{ display: 'flex', gap: '3rem' }}>
    <Link label="Enabled link" theme="red" href="#" />
    <Link label="Disabled link" theme="red" href="#" disabled />
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', padding: '1rem', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          alignItems: 'flex-start',
        }}
      >
        <Link label='Enabled link' theme='red' href='#' />
        <P style={{ fontSize: '0.75rem', opacity: 0.6 }}>enabled</P>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          alignItems: 'flex-start',
        }}
      >
        <Link label='Disabled link' theme='red' href='#' disabled />
        <P style={{ fontSize: '0.75rem', opacity: 0.6 }}>disabled</P>
      </div>
    </div>
  ),
};

export const MultipleThemesDisabled = {
  name: 'Disabled Across Themes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Link from 'meticulous-ui/components/Link';

const themes = ['red', 'blue', 'green', 'orange', 'purple'];

const DisabledThemes = () => (
  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    {themes.map((theme) => (
      <Link key={theme} label="Report now" theme={theme} href="#" disabled />
    ))}
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', padding: '1rem' }}>
      {['red', 'blue', 'green', 'orange', 'purple'].map((theme) => (
        <div
          key={theme}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            alignItems: 'flex-start',
          }}
        >
          <Link label='Report now' theme={theme} href='#' disabled />
          <P style={{ fontSize: '0.75rem', opacity: 0.6 }}>{theme} · disabled</P>
        </div>
      ))}
    </div>
  ),
};
