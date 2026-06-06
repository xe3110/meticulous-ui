import Accordion from '../src/components/Accordion/Accordion';
import ShieldCheckOutline from '../src/components/Icons/ShieldCheckOutline';
import InfoCircleOutline from '../src/components/Icons/InfoCircleOutline';
import LockKeyholeOutline from '../src/components/Icons/LockKeyholeOutline';
import StarOutline from '../src/components/Icons/StarOutline';
import CheckDouble from '../src/components/Icons/CheckDouble';
import blue from '../src/colors/blue';
import teal from '../src/colors/teal';
import purple from '../src/colors/purple';
import amber from '../src/colors/amber';
import green from '../src/colors/green';
import grey from '../src/colors/grey';
import indigo from '../src/colors/indigo';
import { H6 } from '../src/components/Typography/Headings';
import P from '../src/components/Typography/P';

const BASIC_ITEMS = [
  {
    id: 1,
    title: 'What is meticulous-ui?',
    content:
      'meticulous-ui is a component library built for React applications. It provides accessible, themeable UI primitives so teams can ship consistent interfaces faster.',
  },
  {
    id: 2,
    title: 'How do I install it?',
    content:
      'Run `npm install meticulous-ui` or `yarn add meticulous-ui`, then import components directly from their package paths.',
  },
  {
    id: 3,
    title: 'Is it TypeScript compatible?',
    content:
      'Yes. Every component ships with a `.d.ts` declaration file so you get full type safety and editor autocomplete out of the box.',
  },
];

const ICON_ITEMS = [
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: <ShieldCheckOutline size={20} />,
    iconColor: teal.m600,
    iconBackground: teal.m50,
    content:
      'All data is encrypted at rest and in transit. We follow OWASP best practices and conduct quarterly security audits.',
  },
  {
    id: 'info',
    title: 'How does billing work?',
    icon: <InfoCircleOutline size={20} />,
    iconColor: blue.m600,
    iconBackground: blue.m50,
    content:
      'You are billed monthly based on active seats. Unused seats can be removed at any time and take effect on the next billing cycle.',
  },
  {
    id: 'access',
    title: 'Access & Permissions',
    icon: <LockKeyholeOutline size={20} />,
    iconColor: purple.m600,
    iconBackground: purple.m50,
    content:
      'Admins can configure role-based access control at the workspace level. Permissions propagate to all projects within the workspace.',
  },
  {
    id: 'features',
    title: 'Premium Features',
    icon: <StarOutline size={20} />,
    iconColor: amber.m600,
    iconBackground: amber.m50,
    content:
      'Premium plans unlock advanced analytics, priority support, SSO, and custom branding. Upgrade any time from the billing settings.',
  },
];

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'An Accordion component that expands and collapses content panels. Supports optional icons and simultaneous multi-panel expansion.',
      },
      source: {
        language: 'jsx',
        code: `
import Accordion from 'meticulous-ui/components/Accordion';

const items = [
  { id: 1, title: 'What is meticulous-ui?', content: 'A React component library.' },
  { id: 2, title: 'How do I install it?', content: 'npm install meticulous-ui' },
];

const Example = () => <Accordion items={items} />;
        `,
      },
    },
  },
  argTypes: {
    items: {
      description:
        'Array of accordion items — each requires `id`, `title`, and `content`; `icon` is optional',
    },
    allowMultiple: {
      description: 'When `true`, multiple panels can be open at the same time',
      control: 'boolean',
    },
    activeBackground: {
      description:
        'Background color applied to the expanded item — use a token from the colors palette e.g. `blue.m50`, `grey.m100`',
      control: 'color',
    },
    iconColor: {
      description:
        'Default icon color for all items — overridden per-item via `item.iconColor`. Defaults to `black.m700`',
      control: 'color',
    },
    itemBackground: {
      description:
        'Background color for resting (closed) items — use a palette token e.g. `blueGray.m800` for dark mode. Defaults to `#fff`',
      control: 'color',
    },
    itemBorderColor: {
      description:
        'Border color for all items — use a palette token e.g. `blueGray.m600` for dark mode. Defaults to `grey.m200`',
      control: 'color',
    },
  },
};

export const Default = (args) => <Accordion {...args} items={BASIC_ITEMS} />;

Default.args = {
  allowMultiple: false,
  itemBackground: '#fff',
  activeBackground: undefined,
};

export const ActiveBackground = {
  name: 'Active Background',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Accordion from 'meticulous-ui/components/Accordion';
import blue from 'meticulous-ui/colors/blue';
import teal from 'meticulous-ui/colors/teal';
import purple from 'meticulous-ui/colors/purple';
import grey from 'meticulous-ui/colors/grey';

// blue tint
<Accordion items={items} activeBackground={blue.m50} />

// teal tint
<Accordion items={items} activeBackground={teal.m50} />

// grey tint
<Accordion items={items} activeBackground={grey.m100} />
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {[
        { label: 'blue.m50', bg: blue.m50 },
        { label: 'teal.m50', bg: teal.m50 },
        { label: 'purple.m50', bg: purple.m50 },
        { label: 'grey.m100', bg: grey.m100 },
      ].map(({ label, bg }) => (
        <div key={label}>
          <p
            style={{ margin: '0 0 10px', fontSize: 12, color: grey.m500, fontFamily: 'monospace' }}
          >
            activeBackground={`{${label}}`}
          </p>
          <Accordion items={BASIC_ITEMS} activeBackground={bg} />
        </div>
      ))}
    </div>
  ),
};

export const ItemBackground = {
  name: 'Item Background',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Accordion from 'meticulous-ui/components/Accordion';
import indigo from 'meticulous-ui/colors/indigo';
import teal from 'meticulous-ui/colors/teal';
import grey from 'meticulous-ui/colors/grey';

// default white
<Accordion items={items} />

// soft indigo
<Accordion items={items} itemBackground={indigo.m50} />

// soft teal
<Accordion items={items} itemBackground={teal.m50} />

// light grey
<Accordion items={items} itemBackground={grey.m50} />
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {[
        { label: "'#fff' (default)", bg: '#fff' },
        { label: 'indigo.m50', bg: indigo.m50 },
        { label: 'teal.m50', bg: teal.m50 },
        { label: 'grey.m50', bg: grey.m50 },
      ].map(({ label, bg }) => (
        <div key={label}>
          <p
            style={{ margin: '0 0 10px', fontSize: 12, color: grey.m500, fontFamily: 'monospace' }}
          >
            itemBackground={`{${label}}`}
          </p>
          <Accordion items={BASIC_ITEMS} itemBackground={bg} />
        </div>
      ))}
    </div>
  ),
};

export const WithIcons = {
  name: 'With Icons',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Accordion from 'meticulous-ui/components/Accordion';
import ShieldCheckOutline from 'meticulous-ui/components/Icons/ShieldCheckOutline';
import InfoCircleOutline from 'meticulous-ui/components/Icons/InfoCircleOutline';
import teal from 'meticulous-ui/colors/teal';
import blue from 'meticulous-ui/colors/blue';

const items = [
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: <ShieldCheckOutline size={20} />,
    iconColor: teal.m600,
    iconBackground: teal.m50,
    content: 'All data is encrypted at rest and in transit.',
  },
  {
    id: 'info',
    title: 'How does billing work?',
    icon: <InfoCircleOutline size={20} />,
    iconColor: blue.m600,
    iconBackground: blue.m50,
    content: 'You are billed monthly based on active seats.',
  },
];

const WithIcons = () => <Accordion items={items} />;
        `,
      },
    },
  },
  render: () => <Accordion items={ICON_ITEMS} />,
};

export const IconColorOverride = {
  name: 'Icon Color — Accordion-level & Per-item Override',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Accordion from 'meticulous-ui/components/Accordion';
import ShieldCheckOutline from 'meticulous-ui/components/Icons/ShieldCheckOutline';
import InfoCircleOutline from 'meticulous-ui/components/Icons/InfoCircleOutline';
import LockKeyholeOutline from 'meticulous-ui/components/Icons/LockKeyholeOutline';
import teal from 'meticulous-ui/colors/teal';
import blue from 'meticulous-ui/colors/blue';

// All icons use teal.m600 unless overridden per-item
const items = [
  {
    id: 1,
    title: 'Uses accordion-level color',
    icon: <ShieldCheckOutline size={20} />,
    content: 'This icon inherits teal.m600 from the accordion iconColor prop.',
  },
  {
    id: 2,
    title: 'Overrides with blue.m600',
    icon: <InfoCircleOutline size={20} />,
    iconColor: blue.m600,
    content: 'This icon overrides the accordion-level color with blue.m600.',
  },
  {
    id: 3,
    title: 'No override — inherits teal.m600',
    icon: <LockKeyholeOutline size={20} />,
    content: 'Back to the accordion-level teal.m600.',
  },
];

<Accordion items={items} iconColor={teal.m600} />
        `,
      },
    },
  },
  render: () => (
    <Accordion
      iconColor={teal.m600}
      items={[
        {
          id: 1,
          title: 'Uses accordion-level color',
          icon: <ShieldCheckOutline size={20} />,
          content: 'This icon inherits teal.m600 from the accordion iconColor prop.',
        },
        {
          id: 2,
          title: 'Overrides with blue.m600',
          icon: <InfoCircleOutline size={20} />,
          iconColor: blue.m600,
          content: 'This icon overrides the accordion-level color with blue.m600.',
        },
        {
          id: 3,
          title: 'No override — inherits teal.m600',
          icon: <LockKeyholeOutline size={20} />,
          content: 'Back to the accordion-level teal.m600.',
        },
      ]}
    />
  ),
};

export const AllowMultiple = {
  name: 'Allow Multiple Open',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Accordion from 'meticulous-ui/components/Accordion';

const items = [
  { id: 1, title: 'What is meticulous-ui?', content: 'A React component library.' },
  { id: 2, title: 'How do I install it?', content: 'npm install meticulous-ui' },
  { id: 3, title: 'Is it TypeScript compatible?', content: 'Yes, via .d.ts declaration files.' },
];

const AllowMultiple = () => <Accordion items={items} allowMultiple />;
        `,
      },
    },
  },
  render: () => <Accordion items={BASIC_ITEMS} allowMultiple />,
};

const RICH_ITEMS = [
  {
    id: 'steps',
    title: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        Getting Started
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 20,
            background: green.m100,
            color: green.m700,
          }}
        >
          Recommended
        </span>
      </span>
    ),
    content: (
      <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['Install the package', 'Import the component', 'Pass your items array'].map((step, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <CheckDouble size={16} color={green.m600} />
            <P style={{ margin: 0 }}>{step}</P>
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: 'code',
    title: (
      <span>
        Installation{' '}
        <span style={{ fontWeight: 400, fontSize: 13, color: grey.m500 }}>— npm or yarn</span>
      </span>
    ),
    content: (
      <div>
        <P>Pick your package manager and run one of the following:</P>
        <pre
          style={{
            background: grey.m100,
            borderRadius: 8,
            padding: '10px 14px',
            fontSize: 13,
            margin: '8px 0 0',
            overflowX: 'auto',
          }}
        >
          <code>npm install meticulous-ui{'\n'}yarn add meticulous-ui</code>
        </pre>
      </div>
    ),
  },
  {
    id: 'props',
    title: <H6 style={{ margin: 0 }}>Supported Props</H6>,
    content: (
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            {['Prop', 'Type', 'Default'].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: 'left',
                  padding: '6px 10px',
                  borderBottom: `1px solid ${grey.m200}`,
                  color: grey.m700,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['items', 'AccordionItem[]', '[]'],
            ['allowMultiple', 'boolean', 'false'],
          ].map(([prop, type, def]) => (
            <tr key={prop}>
              <td style={{ padding: '6px 10px' }}>
                <code>{prop}</code>
              </td>
              <td style={{ padding: '6px 10px', color: blue.m700 }}>
                <code>{type}</code>
              </td>
              <td style={{ padding: '6px 10px', color: grey.m500 }}>
                <code>{def}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
];

export const RichContent = {
  name: 'Rich Content (JSX title & content)',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Accordion from 'meticulous-ui/components/Accordion';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import P from 'meticulous-ui/components/Typography/P';
import green from 'meticulous-ui/colors/green';
import grey from 'meticulous-ui/colors/grey';

const items = [
  {
    id: 'steps',
    title: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        Getting Started
        <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px',
          borderRadius: 20, background: green.m100, color: green.m700 }}>
          Recommended
        </span>
      </span>
    ),
    content: (
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        <li><P>Install the package</P></li>
        <li><P>Import the component</P></li>
        <li><P>Pass your items array</P></li>
      </ol>
    ),
  },
  {
    id: 'props',
    title: <H6 style={{ margin: 0 }}>Supported Props</H6>,
    content: <P>items, allowMultiple</P>,
  },
];

const RichContent = () => <Accordion items={items} />;
        `,
      },
    },
  },
  render: () => <Accordion items={RICH_ITEMS} />,
};

export const SingleItem = {
  name: 'Single Item',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Accordion from 'meticulous-ui/components/Accordion';

const items = [
  { id: 1, title: 'What is meticulous-ui?', content: 'A React component library.' },
];

const SingleItem = () => <Accordion items={items} />;
        `,
      },
    },
  },
  render: () => (
    <Accordion
      items={[
        {
          id: 1,
          title: 'What is meticulous-ui?',
          content:
            'meticulous-ui is a component library built for React applications. It provides accessible, themeable UI primitives so teams can ship consistent interfaces faster.',
        },
      ]}
    />
  ),
};
