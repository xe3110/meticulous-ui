import RootComponent from '../src/components/RootComponent/RootComponent';
import Button from '../src/components/Button/Button';
import { H4 } from '../src/components/Typography/Headings';
import P from '../src/components/Typography/P';

export default {
  title: 'Foundation/RootComponent',
  component: RootComponent,
  parameters: {
    docs: {
      description: {
        component:
          'A wrapper component that establishes the rem baseline (font-size: 62.5%) required by all meticulous-ui components.',
      },
      source: {
        language: 'jsx',
        code: `
import RootComponent from 'meticulous-ui/components/RootComponent';

const App = () => (
  <RootComponent>
    {/* your app or meticulous-ui subtree */}
  </RootComponent>
);
        `,
      },
    },
  },
};

export const Default = {
  name: 'With Meticulous UI Components',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import RootComponent from 'meticulous-ui/components/RootComponent';
import Button from 'meticulous-ui/components/Button';
import { H4 } from 'meticulous-ui/components/Typography/Headings';
import P from 'meticulous-ui/components/Typography/P';

const App = () => (
  <RootComponent>
    <H4>Hello from meticulous-ui</H4>
    <P>
      This content is rendered inside RootComponent. The font-size baseline is set to 62.5% so
      that 1rem equals 10px.
    </P>
    <Button>Click me</Button>
  </RootComponent>
);
        `,
      },
    },
  },
  render: () => (
    <RootComponent>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem', padding: '2rem' }}>
        <H4>Hello from meticulous-ui</H4>
        <P>
          This content is rendered inside RootComponent. The font-size baseline is set to 62.5% so
          that 1rem equals 10px.
        </P>
        <Button>Click me</Button>
      </div>
    </RootComponent>
  ),
};
