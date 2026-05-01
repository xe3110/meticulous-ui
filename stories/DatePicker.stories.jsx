import { useState } from 'react';
import DatePicker from '../src/components/DatePicker/DatePicker';
import { H6 } from '../src/components/Typography/Headings';
import P from '../src/components/Typography/P';
import grey from '../src/colors/grey';

const THEMES = [
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
];

export default {
  title: 'Molecules/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          'A DatePicker component supporting both single-date and date-range selection, with inline month/year navigation and an optional footer.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import DatePicker from 'meticulous-ui/components/DatePicker';

const Example = () => {
  const [date, setDate] = useState(null);
  return <DatePicker theme="blue" onChange={setDate} />;
};
        `,
      },
    },
  },
  argTypes: {
    theme: {
      description: 'Color theme key from the meticulous-ui color map',
      control: 'select',
      options: THEMES,
    },
    mode: {
      description:
        'Initial selection mode. Can be switched via the built-in toggle unless `showModeToggle` is false.',
      control: 'select',
      options: ['single', 'range'],
    },
    showModeToggle: {
      description: 'Shows or hides the Single / Range mode toggle pill',
      control: 'boolean',
    },
    showFooter: {
      description:
        'Shows or hides the Clear / Apply footer. When false, `onChange` fires immediately on each click.',
      control: 'boolean',
    },
    value: {
      description: 'Controlled selected date for single mode',
    },
    rangeValue: {
      description: 'Controlled selected range for range mode — `[start, end]`',
    },
    onChange: {
      description: 'Called with a `Date` in single mode or `[Date, Date]` tuple in range mode',
    },
    minDate: {
      description: 'Dates before this value are disabled',
    },
    maxDate: {
      description: 'Dates after this value are disabled',
    },
  },
};

/* ── Default ── */
export const Default = (args) => {
  const [value, setValue] = useState(null);
  const isRange = Array.isArray(value);
  return (
    <div style={{ padding: '2rem' }}>
      <DatePicker
        {...args}
        onChange={setValue}
        value={isRange ? undefined : value}
        rangeValue={isRange ? value : undefined}
      />
      {!isRange && value && (
        <P style={{ marginTop: '1rem', color: grey.m700 }}>
          Selected: <strong>{value.toDateString()}</strong>
        </P>
      )}
      {isRange && value[0] && value[1] && (
        <P style={{ marginTop: '1rem', color: grey.m700 }}>
          Range: <strong>{value[0].toDateString()}</strong> →{' '}
          <strong>{value[1].toDateString()}</strong>
        </P>
      )}
    </div>
  );
};

Default.args = {
  theme: 'blue',
  mode: 'single',
  showModeToggle: true,
  showFooter: true,
};

/* ── Range selection ── */
export const RangeSelection = {
  name: 'Range Selection',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Start in range mode. Click a start date then an end date — the band fills in as you hover.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import DatePicker from 'meticulous-ui/components/DatePicker';

const RangeSelection = () => {
  const [range, setRange] = useState([null, null]);
  return <DatePicker mode="range" onChange={setRange} rangeValue={range} />;
};
        `,
      },
    },
  },
  render: () => {
    const [range, setRange] = useState([null, null]);
    const [from, to] = range;
    return (
      <div style={{ padding: '2rem' }}>
        <DatePicker mode='range' onChange={setRange} rangeValue={range} />
        {from && to && (
          <P style={{ marginTop: '1rem', color: grey.m700 }}>
            Range: <strong>{from.toDateString()}</strong> → <strong>{to.toDateString()}</strong>
          </P>
        )}
      </div>
    );
  },
};

/* ── All themes ── */
export const Themes = {
  name: 'All Themes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story: 'Every available theme key rendered side-by-side.',
      },
      source: {
        language: 'jsx',
        code: `
import DatePicker from 'meticulous-ui/components/DatePicker';

const today = new Date();
const weekEnd = new Date();
weekEnd.setDate(today.getDate() + 4);

const Themes = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '2rem' }}>
    {['amber','blue','cyan','deepPurple','green','indigo','orange','pink','purple','red','teal','violet'].map((t) => (
      <div key={t}>
        <p style={{ marginBottom: '0.5rem', fontWeight: 600, fontSize: '12px', color: grey.m700 }}>{t}</p>
        <DatePicker theme={t} mode="range" rangeValue={[today, weekEnd]} showModeToggle={false} showFooter={false} />
      </div>
    ))}
  </div>
);
        `,
      },
    },
  },
  render: () => {
    const today = new Date();
    const weekEnd = new Date();
    weekEnd.setDate(today.getDate() + 4);
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.6rem', padding: '2rem' }}>
        {THEMES.map((t) => (
          <div key={t}>
            <P
              style={{
                marginBottom: '1rem',
                fontWeight: 600,
                fontSize: '1.8rem',
                color: grey.m700,
              }}
            >
              {t}
            </P>
            <DatePicker
              theme={t}
              mode='range'
              rangeValue={[today, weekEnd]}
              showModeToggle={false}
              showFooter={false}
            />
          </div>
        ))}
      </div>
    );
  },
};

/* ── Pre-selected single date ── */
export const PreSelectedDate = {
  name: 'Pre-selected Date',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story: 'Pass a `value` prop to initialise the picker with a date already selected.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import DatePicker from 'meticulous-ui/components/DatePicker';

const today = new Date();

const PreSelectedDate = () => {
  const [date, setDate] = useState(today);
  return <DatePicker value={date} onChange={setDate} />;
};
        `,
      },
    },
  },
  render: () => {
    const [date, setDate] = useState(new Date());
    return (
      <div style={{ padding: '2rem' }}>
        <DatePicker value={date} onChange={setDate} />
      </div>
    );
  },
};

/* ── Pre-selected range ── */
export const PreSelectedRange = {
  name: 'Pre-selected Range',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story: 'Pass a `rangeValue` prop to open the picker with an existing range highlighted.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import DatePicker from 'meticulous-ui/components/DatePicker';

const start = new Date();
const end = new Date();
end.setDate(end.getDate() + 7);

const PreSelectedRange = () => {
  const [range, setRange] = useState([start, end]);
  return <DatePicker mode="range" rangeValue={range} onChange={setRange} />;
};
        `,
      },
    },
  },
  render: () => {
    const start = new Date();
    const end = new Date();
    end.setDate(end.getDate() + 7);
    const [range, setRange] = useState([start, end]);
    return (
      <div style={{ padding: '2rem' }}>
        <DatePicker mode='range' rangeValue={range} onChange={setRange} />
      </div>
    );
  },
};

/* ── Min / Max constraints ── */
export const MinMaxDates = {
  name: 'Min / Max Dates',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Use `minDate` and `maxDate` to restrict selectable dates. Here only the current week is enabled.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import DatePicker from 'meticulous-ui/components/DatePicker';

const today = new Date();
const weekEnd = new Date();
weekEnd.setDate(today.getDate() + 6);

const MinMaxDates = () => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      minDate={today}
      maxDate={weekEnd}
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const today = new Date();
    const weekEnd = new Date();
    weekEnd.setDate(today.getDate() + 6);
    const [date, setDate] = useState(null);
    return (
      <div style={{ padding: '2rem' }}>
        <P style={{ marginBottom: '1rem', color: grey.m700, fontSize: '13px' }}>
          Only the next 7 days are selectable.
        </P>
        <DatePicker value={date} onChange={setDate} minDate={today} maxDate={weekEnd} />
      </div>
    );
  },
};

/* ── No footer (immediate callback) ── */
export const NoFooter = {
  name: 'No Footer',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          '`showFooter={false}` removes Cancel / Apply and fires `onChange` immediately on each click.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import DatePicker from 'meticulous-ui/components/DatePicker';

const NoFooter = () => {
  const [date, setDate] = useState(null);
  return <DatePicker showFooter={false} value={date} onChange={setDate} />;
};
        `,
      },
    },
  },
  render: () => {
    const [date, setDate] = useState(null);
    return (
      <div style={{ padding: '2rem' }}>
        <DatePicker showFooter={false} value={date} onChange={setDate} />
        {date && (
          <P style={{ marginTop: '1rem', color: grey.m700 }}>
            Picked: <strong>{date.toDateString()}</strong>
          </P>
        )}
      </div>
    );
  },
};

/* ── No mode toggle ── */
export const NoModeToggle = {
  name: 'No Mode Toggle',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          '`showModeToggle={false}` hides the Single / Range pill. Combine with a fixed `mode` prop to lock the picker into one behaviour.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import DatePicker from 'meticulous-ui/components/DatePicker';

const NoModeToggle = () => {
  const [range, setRange] = useState([null, null]);
  return (
    <DatePicker
      mode="range"
      showModeToggle={false}
      rangeValue={range}
      onChange={setRange}
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [range, setRange] = useState([null, null]);
    return (
      <div style={{ padding: '2rem' }}>
        <P style={{ marginBottom: '1rem', color: grey.m700, fontSize: '13px' }}>
          Range-only picker — no mode toggle shown.
        </P>
        <DatePicker mode='range' showModeToggle={false} rangeValue={range} onChange={setRange} />
      </div>
    );
  },
};

/* ── Side by side ── */
export const SideBySide = {
  name: 'Single vs Range',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story: 'Both modes displayed next to each other for comparison.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import DatePicker from 'meticulous-ui/components/DatePicker';

const SideBySide = () => {
  const [date, setDate] = useState(null);
  const [range, setRange] = useState([null, null]);
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <DatePicker value={date} onChange={setDate} showModeToggle={false} />
      <DatePicker mode="range" rangeValue={range} onChange={setRange} showModeToggle={false} />
    </div>
  );
};
        `,
      },
    },
  },
  render: () => {
    const [date, setDate] = useState(null);
    const [range, setRange] = useState([null, null]);
    return (
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', padding: '2rem' }}>
        <div>
          <H6 style={{ marginBottom: '0.75rem' }}>Single</H6>
          <DatePicker value={date} onChange={setDate} showModeToggle={false} />
        </div>
        <div>
          <H6 style={{ marginBottom: '0.75rem' }}>Range</H6>
          <DatePicker mode='range' rangeValue={range} onChange={setRange} showModeToggle={false} />
        </div>
      </div>
    );
  },
};
