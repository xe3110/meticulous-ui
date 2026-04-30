import { useEffect, useState } from 'react';
import FileUploader from '../src/components/Input/FileUploader';
import icons from '../src/components/Icons';
import { H6 } from '../src/components/Typography/Headings';

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
  'white',
  'yellow',
  'black',
];

const SIZES = [
  { size: 'small', label: 'Small' },
  { size: 'medium', label: 'Medium' },
  { size: 'large', label: 'Large' },
  { size: 'ex-large', label: 'Extra Large' },
];

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  marginBottom: '0.75rem',
  flexWrap: 'wrap',
};

const labelStyle = {
  width: '10rem',
  flexShrink: 0,
};

export default {
  title: 'Molecules/FileUploader',
  component: FileUploader,
  parameters: {
    docs: {
      description: {
        component: 'FileUploader',
      },
      source: {
        language: 'jsx',
        code: `
          import FileUploader from 'meticulous-ui/components/Input/FileUploader';

          export const Default = (args) => {
            const [val, setVal] = useState('');

            const onChange = (val) => {
              setVal(val);
            };

            return <FileUploader onChange={onChange} />;
          };
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    labelColor: {
      control: 'text',
    },
    theme: {
      control: 'select',
      options: THEMES,
    },
    type: {
      control: 'text',
    },
    accept: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    width: {
      control: 'number',
    },
    isMultiple: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'ex-large'],
    },
    prefixIcon: {
      control: 'select',
      options: Object.keys(icons).concat(['None']),
      mapping: {
        ...icons,
        None: null,
      },
    },
    suffixIcon: {
      control: 'select',
      options: Object.keys(icons).concat(['None']),
      mapping: {
        ...icons,
        None: null,
      },
    },
  },
};

// Default story
export const Default = (args) => {
  const [val, setVal] = useState('');

  useEffect(() => {
    setVal(args?.value);
  }, [args?.value]);

  const onChange = (e) => {
    console.log(e);
  };

  return <FileUploader onChange={onChange} {...args} />;
};

Default.storyName = 'Default';

Default.args = {
  label: 'Upload',
  theme: 'blue',
  size: 'medium',
  type: 'file',
  accept: '',
  isMultiple: false,
  isLoading: false,
  disabled: false,
  prefixIcon: 'Link',
  suffixIcon: 'None',
};

// Theme story
export const Themes = {
  name: 'Themes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import FileUploader from 'meticulous-ui/components/Input/FileUploader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import { Link } from 'meticulous-ui/components/Icons';

const THEMES = ['amber', 'blue', 'blueGray', 'brown', 'cider', 'cyan', 'deepOrange',
  'deepPurple', 'green', 'grey', 'indigo', 'lightBlue', 'lightGreen', 'lime',
  'orange', 'pink', 'purple', 'red', 'teal', 'violet', 'white', 'yellow', 'black'];

const Themes = () => (
  <>
    {THEMES.map((theme) => (
      <div key={theme} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
        <H6 style={{ width: '10rem', flexShrink: 0 }}>{theme}:</H6>
        <FileUploader label='Upload' theme={theme} prefixIcon={Link} />
      </div>
    ))}
  </>
);
        `,
      },
    },
  },
  render: () => (
    <>
      {THEMES.map((theme) => (
        <div key={theme} style={rowStyle}>
          <H6 style={labelStyle}>{theme}:</H6>
          <FileUploader label='Upload' theme={theme} prefixIcon={icons.Link} />
        </div>
      ))}
    </>
  ),
};

// Size story
export const Sizes = {
  name: 'Sizes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import FileUploader from 'meticulous-ui/components/Input/FileUploader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import { Link } from 'meticulous-ui/components/Icons';

const SIZES = [
  { size: 'small', label: 'Small' },
  { size: 'medium', label: 'Medium' },
  { size: 'large', label: 'Large' },
  { size: 'ex-large', label: 'Extra Large' },
];

const Sizes = () => (
  <>
    {SIZES.map(({ size, label }) => (
      <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
        <H6 style={{ width: '10rem', flexShrink: 0 }}>{label}:</H6>
        <FileUploader label='Upload' size={size} prefixIcon={Link} />
      </div>
    ))}
  </>
);
        `,
      },
    },
  },
  render: () => (
    <>
      {SIZES.map(({ size, label }) => (
        <div key={size} style={rowStyle}>
          <H6 style={labelStyle}>{label}:</H6>
          <FileUploader label='Upload' size={size} prefixIcon={icons.Link} />
        </div>
      ))}
    </>
  ),
};

// Disabled story
export const Disabled = {
  name: 'Disabled',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import FileUploader from 'meticulous-ui/components/Input/FileUploader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import { Link } from 'meticulous-ui/components/Icons';

const Disabled = () => (
  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
    <div>
      <H6 style={{ marginBottom: '0.5rem' }}>Enabled</H6>
      <FileUploader label='Upload' prefixIcon={Link} />
    </div>
    <div>
      <H6 style={{ marginBottom: '0.5rem' }}>Disabled</H6>
      <FileUploader label='Upload' prefixIcon={Link} disabled />
    </div>
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        <H6 style={{ marginBottom: '0.5rem' }}>Enabled</H6>
        <FileUploader label='Upload' prefixIcon={icons.Link} />
      </div>
      <div>
        <H6 style={{ marginBottom: '0.5rem' }}>Disabled</H6>
        <FileUploader label='Upload' prefixIcon={icons.Link} disabled />
      </div>
    </div>
  ),
};

// Loading story
export const LoadingState = {
  name: 'Loading State',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import FileUploader from 'meticulous-ui/components/Input/FileUploader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import { Link } from 'meticulous-ui/components/Icons';

const LoadingState = () => (
  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
    <div>
      <H6 style={{ marginBottom: '0.5rem' }}>Default</H6>
      <FileUploader label='Upload' prefixIcon={Link} />
    </div>
    <div>
      <H6 style={{ marginBottom: '0.5rem' }}>Loading</H6>
      <FileUploader label='Upload' prefixIcon={Link} isLoading />
    </div>
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        <H6 style={{ marginBottom: '0.5rem' }}>Default</H6>
        <FileUploader label='Upload' prefixIcon={icons.Link} />
      </div>
      <div>
        <H6 style={{ marginBottom: '0.5rem' }}>Loading</H6>
        <FileUploader label='Upload' prefixIcon={icons.Link} isLoading />
      </div>
    </div>
  ),
};

// Width story
export const Width = {
  name: 'Custom Width',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import FileUploader from 'meticulous-ui/components/Input/FileUploader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import { Link } from 'meticulous-ui/components/Icons';

const Width = () => (
  <>
    {[
      { width: 10, label: 'Upload' },
      { width: 14, label: 'Upload now' },
      { width: 16, label: 'Upload all files' },
      { width: 20, label: 'Upload all files here' },
    ].map(({ width, label }) => (
      <div key={width} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
        <H6 style={{ width: '10rem', flexShrink: 0 }}>{width}rem:</H6>
        <FileUploader label={label} width={width} prefixIcon={Link} />
      </div>
    ))}
  </>
);
        `,
      },
    },
  },
  render: () => (
    <>
      {[
        { width: 10, label: 'Upload' },
        { width: 14, label: 'Upload now' },
        { width: 16, label: 'Upload all files' },
        { width: 20, label: 'Upload all files here' },
      ].map(({ width, label }) => (
        <div key={width} style={rowStyle}>
          <H6 style={labelStyle}>{width}rem:</H6>
          <FileUploader label={label} width={width} prefixIcon={icons.Link} />
        </div>
      ))}
    </>
  ),
};

// IsMultiple story
export const MultipleFiles = {
  name: 'Multiple Files',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import FileUploader from 'meticulous-ui/components/Input/FileUploader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import { Link } from 'meticulous-ui/components/Icons';

const MultipleFiles = () => (
  <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
    <div>
      <H6 style={{ marginBottom: '0.5rem' }}>Single file</H6>
      <FileUploader label='Upload' prefixIcon={Link} isMultiple={false} />
    </div>
    <div>
      <H6 style={{ marginBottom: '0.5rem' }}>Multiple files</H6>
      <FileUploader label='Upload Files' prefixIcon={Link} isMultiple />
    </div>
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        <H6 style={{ marginBottom: '0.5rem' }}>Single file</H6>
        <FileUploader label='Upload' prefixIcon={icons.Link} isMultiple={false} />
      </div>
      <div>
        <H6 style={{ marginBottom: '0.5rem' }}>Multiple files</H6>
        <FileUploader label='Upload Files' prefixIcon={icons.Link} isMultiple />
      </div>
    </div>
  ),
};

// Accept story
export const AcceptTypes = {
  name: 'Accept Types',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import FileUploader from 'meticulous-ui/components/Input/FileUploader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import { Link } from 'meticulous-ui/components/Icons';

const AcceptTypes = () => (
  <>
    {[
      { accept: '*', label: 'Any file (*)' },
      { accept: 'image/*', label: 'Images (image/*)' },
      { accept: '.pdf', label: 'PDF (.pdf)' },
      { accept: '.csv,.xlsx', label: 'Spreadsheets (.csv, .xlsx)' },
      { accept: 'video/*', label: 'Videos (video/*)' },
    ].map(({ accept, label }) => (
      <div key={accept} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
        <H6 style={{ width: '10rem', flexShrink: 0 }}>{label}:</H6>
        <FileUploader label='Upload' accept={accept} prefixIcon={Link} />
      </div>
    ))}
  </>
);
        `,
      },
    },
  },
  render: () => (
    <>
      {[
        { accept: '*', label: 'Any file (*)' },
        { accept: 'image/*', label: 'Images (image/*)' },
        { accept: '.pdf', label: 'PDF (.pdf)' },
        { accept: '.csv,.xlsx', label: 'Spreadsheets (.csv, .xlsx)' },
        { accept: 'video/*', label: 'Videos (video/*)' },
      ].map(({ accept, label }) => (
        <div key={accept} style={rowStyle}>
          <H6 style={labelStyle}>{label}:</H6>
          <FileUploader label='Upload' accept={accept} prefixIcon={icons.Link} />
        </div>
      ))}
    </>
  ),
};

// Icons story
export const Icons = {
  name: 'Icons',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import FileUploader from 'meticulous-ui/components/Input/FileUploader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';
import { Link, Upload } from 'meticulous-ui/components/Icons';

const Icons = () => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
      <H6 style={{ width: '10rem', flexShrink: 0 }}>No icons:</H6>
      <FileUploader label='Upload' prefixIcon={null} width={5.5} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
      <H6 style={{ width: '10rem', flexShrink: 0 }}>Prefix only:</H6>
      <FileUploader label='Upload' prefixIcon={Link} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
      <H6 style={{ width: '10rem', flexShrink: 0 }}>Suffix only:</H6>
      <FileUploader label='Upload' prefixIcon={null} suffixIcon={Upload} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
      <H6 style={{ width: '10rem', flexShrink: 0 }}>Both:</H6>
      <FileUploader label='Upload' prefixIcon={Link} suffixIcon={Upload} width={10} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
      <H6 style={{ width: '10rem', flexShrink: 0 }}>Custom prefix:</H6>
      <FileUploader label='Upload' prefixIcon={Upload} />
    </div>
  </>
);
        `,
      },
    },
  },
  render: () => (
    <>
      <div style={rowStyle}>
        <H6 style={labelStyle}>No icons:</H6>
        <FileUploader label='Upload' prefixIcon={null} width={6.5} />
      </div>
      <div style={rowStyle}>
        <H6 style={labelStyle}>Prefix only:</H6>
        <FileUploader label='Upload' prefixIcon={icons.Link} />
      </div>
      <div style={rowStyle}>
        <H6 style={labelStyle}>Suffix only:</H6>
        <FileUploader label='Upload' prefixIcon={null} suffixIcon={icons.Upload} />
      </div>
      <div style={rowStyle}>
        <H6 style={labelStyle}>Both:</H6>
        <FileUploader label='Upload' prefixIcon={icons.Link} suffixIcon={icons.Upload} width={12} />
      </div>
      <div style={rowStyle}>
        <H6 style={labelStyle}>Custom prefix:</H6>
        <FileUploader label='Upload' prefixIcon={icons.Upload} />
      </div>
    </>
  ),
};
