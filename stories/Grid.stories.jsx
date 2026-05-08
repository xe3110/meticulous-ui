import Grid, { GridItem } from '../src/components/Grid/Grid';
import { blue, green, purple, orange, pink, teal, grey } from '../src/colors';

const Cell = ({ children, style }) => (
  <div
    style={{
      backgroundColor: blue.m100,
      borderRadius: '0.5rem',
      padding: '1rem 1.2rem',
      fontSize: '1.3rem',
      color: blue.m800,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '4rem',
      ...style,
    }}
  >
    {children}
  </div>
);

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          'A CSS Grid layout primitive. Compose with `GridItem` to control placement. Supports named areas, responsive auto-fit columns, and any semantic HTML element via `as`.',
      },
      source: {
        language: 'jsx',
        code: `
import Grid, { GridItem } from 'meticulous-ui/components/Grid';

const Example = () => (
  <Grid columns={3} gap="1rem">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
  </Grid>
);
        `,
      },
    },
  },
  argTypes: {
    columns: {
      description: 'Number of equal columns or a CSS `grid-template-columns` value',
      control: 'number',
    },
    gap: {
      description: 'Gap between all cells (CSS value)',
      control: 'text',
    },
    rows: { table: { disable: true } },
    areas: { table: { disable: true } },
    columnGap: { table: { disable: true } },
    rowGap: { table: { disable: true } },
    inline: {
      description: 'Render as `inline-grid` instead of `grid`',
      control: 'boolean',
    },
    as: { table: { disable: true } },
    autoFlow: { table: { disable: true } },
    autoColumns: { table: { disable: true } },
    autoRows: { table: { disable: true } },
    minChildWidth: { table: { disable: true } },
    alignItems: { table: { disable: true } },
    justifyItems: { table: { disable: true } },
    alignContent: { table: { disable: true } },
    justifyContent: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
    role: { table: { disable: true } },
    'aria-label': { table: { disable: true } },
    'aria-labelledby': { table: { disable: true } },
  },
};

export const Default = (args) => (
  <Grid {...args}>
    {['One', 'Two', 'Three', 'Four', 'Five', 'Six'].map((label) => (
      <Cell key={label}>{label}</Cell>
    ))}
  </Grid>
);

Default.args = {
  columns: 3,
  gap: '1rem',
  inline: false,
};

export const FixedColumns = {
  name: 'Fixed Columns',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
<Grid columns={4} gap="1rem">
  {items.map((item) => <div key={item}>{item}</div>)}
</Grid>
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem', padding: '1rem' }}>
      {[2, 3, 4].map((cols) => (
        <div key={cols}>
          <p style={{ fontSize: '1.2rem', color: grey.m600, marginBottom: '0.6rem' }}>
            columns={cols}
          </p>
          <Grid columns={cols} gap='0.75rem'>
            {Array.from({ length: cols * 2 }, (_, i) => (
              <Cell key={i}>{i + 1}</Cell>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};

export const Responsive = {
  name: 'Responsive (minChildWidth)',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Uses `auto-fit` + `minmax` — columns fill available space and wrap automatically. Resize the canvas to see it reflow.',
      },
      source: {
        language: 'jsx',
        code: `
<Grid minChildWidth="12rem" gap="1rem">
  {cards.map((card) => <Card key={card.id} {...card} />)}
</Grid>
        `,
      },
    },
  },
  render: () => (
    <Grid minChildWidth='12rem' gap='1rem' style={{ padding: '1rem' }}>
      {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta'].map((label) => (
        <Cell key={label}>{label}</Cell>
      ))}
    </Grid>
  ),
};

export const TemplateAreas = {
  name: 'Template Areas',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
<Grid
  columns="200px 1fr"
  rows="auto 1fr auto"
  areas={['header header', 'sidebar main', 'footer footer']}
  gap="1rem"
  style={{ minHeight: '18rem' }}
>
  <GridItem area="header">Header</GridItem>
  <GridItem area="sidebar">Sidebar</GridItem>
  <GridItem area="main">Main</GridItem>
  <GridItem area="footer">Footer</GridItem>
</Grid>
        `,
      },
    },
  },
  render: () => (
    <Grid
      columns='200px 1fr'
      rows='auto 1fr auto'
      areas={['header header', 'sidebar main', 'footer footer']}
      gap='1rem'
      style={{ minHeight: '18rem', padding: '1rem' }}
    >
      <GridItem area='header'>
        <Cell style={{ backgroundColor: purple.m100, color: purple.m800 }}>Header</Cell>
      </GridItem>
      <GridItem area='sidebar'>
        <Cell style={{ backgroundColor: green.m100, color: green.m800, height: '100%' }}>
          Sidebar
        </Cell>
      </GridItem>
      <GridItem area='main'>
        <Cell style={{ backgroundColor: blue.m100, color: blue.m800, height: '100%' }}>Main</Cell>
      </GridItem>
      <GridItem area='footer'>
        <Cell style={{ backgroundColor: orange.m100, color: orange.m800 }}>Footer</Cell>
      </GridItem>
    </Grid>
  ),
};

export const ItemPlacement = {
  name: 'Item Placement (spans)',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
<Grid columns={4} gap="1rem">
  <GridItem columnSpan={2}>Spans 2 cols</GridItem>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <GridItem columnSpan={3}>Spans 3 cols</GridItem>
  <GridItem rowSpan={2}>Spans 2 rows</GridItem>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
</Grid>
        `,
      },
    },
  },
  render: () => (
    <Grid columns={4} gap='0.75rem' style={{ padding: '1rem' }}>
      <GridItem columnSpan={2}>
        <Cell style={{ backgroundColor: purple.m100, color: purple.m800 }}>col-span 2</Cell>
      </GridItem>
      <Cell>C</Cell>
      <Cell>D</Cell>
      <Cell>E</Cell>
      <GridItem columnSpan={3}>
        <Cell style={{ backgroundColor: teal.m100, color: teal.m800 }}>col-span 3</Cell>
      </GridItem>
      <GridItem rowSpan={2}>
        <Cell style={{ backgroundColor: pink.m100, color: pink.m800, height: '100%' }}>
          row-span 2
        </Cell>
      </GridItem>
      <Cell>G</Cell>
      <Cell>H</Cell>
      <Cell>I</Cell>
      <Cell>J</Cell>
    </Grid>
  ),
};

export const SemanticList = {
  name: 'Semantic List (ul + li)',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Render the grid as a `<ul>` and each item as an `<li>` for a semantically correct list layout.',
      },
      source: {
        language: 'jsx',
        code: `
<Grid as="ul" columns={3} gap="1rem" aria-label="Product list">
  {products.map((p) => (
    <GridItem as="li" key={p.id}>{p.name}</GridItem>
  ))}
</Grid>
        `,
      },
    },
  },
  render: () => (
    <Grid
      as='ul'
      columns={3}
      gap='1rem'
      aria-label='Product list'
      style={{ listStyle: 'none', padding: '1rem', margin: 0 }}
    >
      {['Apples', 'Bananas', 'Cherries', 'Dates', 'Elderberries', 'Figs'].map((fruit) => (
        <GridItem as='li' key={fruit}>
          <Cell>{fruit}</Cell>
        </GridItem>
      ))}
    </Grid>
  ),
};

export const Alignment = {
  name: 'Alignment',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
<Grid columns={3} gap="1rem" alignItems="center" justifyItems="center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Grid>
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem', padding: '1rem' }}>
      {[
        { label: 'alignItems: start', props: { alignItems: 'start' } },
        { label: 'alignItems: center', props: { alignItems: 'center' } },
        { label: 'alignItems: end', props: { alignItems: 'end' } },
        { label: 'justifyItems: start', props: { justifyItems: 'start' } },
        { label: 'justifyItems: center', props: { justifyItems: 'center' } },
      ].map(({ label, props }) => (
        <div key={label}>
          <p style={{ fontSize: '1.2rem', color: grey.m600, marginBottom: '0.6rem' }}>{label}</p>
          <Grid
            columns={3}
            gap='0.75rem'
            {...props}
            style={{
              backgroundColor: grey.m100,
              borderRadius: '0.5rem',
              padding: '0.75rem',
              minHeight: '6rem',
            }}
          >
            {['A', 'B', 'C'].map((l) => (
              <Cell key={l} style={{ width: '5rem' }}>
                {l}
              </Cell>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};
