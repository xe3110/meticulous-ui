import { useRef, useState } from 'react';
import Form from '../src/components/Form/Form';
import Input from '../src/components/Input/Input/Input';
import Textarea from '../src/components/Input/Textarea';
import Button from '../src/components/Button/Button';
import Checkbox from '../src/components/Input/Checkbox/Checkbox';
import RadioGroup from '../src/components/Input/RadioGroup/RadioGroup';
import Switch from '../src/components/Switch/Switch';
import Dropdown from '../src/components/Dropdown/Dropdown';
import Selectbox from '../src/components/Selectbox/Selectbox';
import DatePicker from '../src/components/DatePicker/DatePicker';
import OtpInput from '../src/components/OtpInput/OtpInput';

export default {
  title: 'Molecules/Form',
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          'A field-driven form that renders any component per field. Each field owns its own state — changing one field never re-renders siblings.',
      },
      source: {
        language: 'jsx',
        code: `
import { useRef } from 'react';
import Form from 'meticulous-ui/components/Form';
import Input from 'meticulous-ui/components/Input';

const fields = [
  {
    id: 'username',
    label: 'Username',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'Enter username' },
    validate: (v) => (v.trim().length < 3 ? 'Min 3 characters' : null),
  },
  {
    id: 'email',
    label: 'Email',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'Enter email' },
    validate: (v) => (v.includes('@') ? null : 'Enter a valid email'),
  },
];

const BasicForm = () => {
  const formRef = useRef(null);

  return (
    <Form
      ref={formRef}
      fields={fields}
      onSubmit={(values) => console.log(values)}
      submitLabel="Submit"
    />
  );
};
        `,
      },
    },
  },
  argTypes: {
    submitLabel: {
      description: 'Label for the submit button',
      control: 'text',
    },
    fields: {
      description:
        'Array of field configs. Each entry: `{ id, label, component, isMandatory?, allProps?, compProps?, validate? }`',
    },
    allProps: {
      description: 'Props spread onto every field component (e.g. shared className or theme)',
    },
    onSubmit: {
      description: 'Called with `{ [fieldId]: value }` map when the form is submitted',
    },
  },
};

// ─── helpers ──────────────────────────────────────────────────────────────────

const required = (v) => (v.trim() ? null : 'This field is required');
const emailValidator = (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Enter a valid email');
const minLength = (n) => (v) => (v.trim().length >= n ? null : `Min ${n} characters`);

// ─── stories ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Default',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useRef } from 'react';
import Form from 'meticulous-ui/components/Form';
import Input from 'meticulous-ui/components/Input';

const fields = [
  {
    id: 'firstName',
    label: 'First Name',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'First name' },
    validate: (v) => (v.trim() ? null : 'This field is required'),
  },
  {
    id: 'lastName',
    label: 'Last Name',
    component: Input,
    compProps: { defaultValue: '', placeholder: 'Last name' },
  },
  {
    id: 'email',
    label: 'Email',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'email@example.com' },
    validate: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Enter a valid email'),
  },
];

const DefaultForm = () => (
  <Form
    fields={fields}
    onSubmit={(values) => console.log(values)}
    submitLabel="Submit"
  />
);
        `,
      },
    },
  },
  render: () => (
    <Form
      fields={[
        {
          id: 'firstName',
          label: 'First Name',
          component: Input,
          isMandatory: true,
          compProps: { defaultValue: '', placeholder: 'First name' },
          validate: required,
        },
        {
          id: 'lastName',
          label: 'Last Name',
          component: Input,
          compProps: { defaultValue: '', placeholder: 'Last name' },
        },
        {
          id: 'email',
          label: 'Email',
          component: Input,
          isMandatory: true,
          compProps: { defaultValue: '', placeholder: 'email@example.com' },
          validate: emailValidator,
        },
      ]}
      onSubmit={(values) => console.log('submitted:', values)}
      submitLabel='Submit'
    />
  ),
};

export const WithValidation = {
  name: 'With Validation',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Each field runs its `validate` function on every keystroke. Errors appear inline immediately.',
      },
      source: {
        language: 'jsx',
        code: `
import Form from 'meticulous-ui/components/Form';
import Input from 'meticulous-ui/components/Input';

const fields = [
  {
    id: 'username',
    label: 'Username',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'At least 4 characters' },
    validate: (v) => (v.trim().length >= 4 ? null : 'Min 4 characters'),
  },
  {
    id: 'password',
    label: 'Password',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'At least 8 characters', type: 'password' },
    validate: (v) => (v.length >= 8 ? null : 'Min 8 characters'),
  },
  {
    id: 'website',
    label: 'Website',
    component: Input,
    compProps: { defaultValue: '', placeholder: 'https://example.com' },
    validate: (v) => {
      if (!v) return null;
      try { new URL(v); return null; } catch { return 'Enter a valid URL'; }
    },
  },
];

const WithValidation = () => (
  <Form fields={fields} onSubmit={(values) => console.log(values)} submitLabel="Create account" />
);
        `,
      },
    },
  },
  render: () => (
    <Form
      fields={[
        {
          id: 'username',
          label: 'Username',
          component: Input,
          isMandatory: true,
          compProps: { defaultValue: '', placeholder: 'At least 4 characters' },
          validate: minLength(4),
        },
        {
          id: 'password',
          label: 'Password',
          component: Input,
          isMandatory: true,
          compProps: { defaultValue: '', placeholder: 'At least 8 characters', type: 'password' },
          validate: minLength(8),
        },
        {
          id: 'website',
          label: 'Website',
          component: Input,
          compProps: { defaultValue: '', placeholder: 'https://example.com' },
          validate: (v) => {
            if (!v) return null;
            try {
              new URL(v);
              return null;
            } catch {
              return 'Enter a valid URL';
            }
          },
        },
      ]}
      onSubmit={(values) => console.log('submitted:', values)}
      submitLabel='Create account'
    />
  ),
};

export const WithTextarea = {
  name: 'With Textarea',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Any component can be used per field — here `Textarea` is mixed with `Input`. The `component` prop is just a React component reference.',
      },
      source: {
        language: 'jsx',
        code: `
import Form from 'meticulous-ui/components/Form';
import Input from 'meticulous-ui/components/Input';
import Textarea from 'meticulous-ui/components/Input/Textarea';

const fields = [
  {
    id: 'subject',
    label: 'Subject',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'Message subject' },
    validate: (v) => (v.trim() ? null : 'Subject is required'),
  },
  {
    id: 'body',
    label: 'Message',
    component: Textarea,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'Write your message here…', rows: 5 },
    validate: (v) => (v.trim().length >= 10 ? null : 'Message must be at least 10 characters'),
  },
];

const WithTextarea = () => (
  <Form fields={fields} onSubmit={(values) => console.log(values)} submitLabel="Send" />
);
        `,
      },
    },
  },
  render: () => (
    <Form
      fields={[
        {
          id: 'subject',
          label: 'Subject',
          component: Input,
          isMandatory: true,
          compProps: { defaultValue: '', placeholder: 'Message subject' },
          validate: required,
        },
        {
          id: 'body',
          label: 'Message',
          component: Textarea,
          isMandatory: true,
          compProps: { defaultValue: '', placeholder: 'Write your message here…', rows: 5 },
          validate: (v) =>
            v.trim().length >= 10 ? null : 'Message must be at least 10 characters',
        },
      ]}
      onSubmit={(values) => console.log('submitted:', values)}
      submitLabel='Send'
    />
  ),
};

export const ImperativeGetValues = {
  name: 'Imperative getValues()',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'Pass a `ref` to get imperative access to `getValues()`. Useful when submission is triggered outside the form (e.g. a modal footer button).',
      },
      source: {
        language: 'jsx',
        code: `
import { useRef, useState } from 'react';
import Form from 'meticulous-ui/components/Form';
import Input from 'meticulous-ui/components/Input';

const fields = [
  {
    id: 'name',
    label: 'Name',
    component: Input,
    compProps: { defaultValue: '', placeholder: 'Your name' },
  },
  {
    id: 'role',
    label: 'Role',
    component: Input,
    compProps: { defaultValue: '', placeholder: 'Your role' },
  },
];

const ImperativeForm = () => {
  const formRef = useRef(null);
  const [snapshot, setSnapshot] = useState(null);

  return (
    <div>
      <Form ref={formRef} fields={fields} />
      <button
        style={{ marginTop: '1rem' }}
        onClick={() => setSnapshot(formRef.current.getValues())}
      >
        Read values
      </button>
      {snapshot && (
        <pre style={{ marginTop: '0.5rem' }}>{JSON.stringify(snapshot, null, 2)}</pre>
      )}
    </div>
  );
};
        `,
      },
    },
  },
  render: () => {
    const formRef = useRef(null);
    const [snapshot, setSnapshot] = useState(null);

    return (
      <div>
        <Form
          ref={formRef}
          fields={[
            {
              id: 'name',
              label: 'Name',
              component: Input,
              compProps: { defaultValue: '', placeholder: 'Your name' },
            },
            {
              id: 'role',
              label: 'Role',
              component: Input,
              compProps: { defaultValue: '', placeholder: 'Your role' },
            },
          ]}
        />
        <Button
          style={{ marginTop: '1rem' }}
          onClick={() => setSnapshot(formRef.current?.getValues())}
        >
          Read values
        </Button>
        {snapshot && (
          <pre style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            {JSON.stringify(snapshot, null, 2)}
          </pre>
        )}
      </div>
    );
  },
};

export const SharedAllProps = {
  name: 'Shared allProps',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          '`allProps` at the Form level is spread onto every field component. Individual field `allProps` merge on top, letting you override per-field.',
      },
      source: {
        language: 'jsx',
        code: `
import Form from 'meticulous-ui/components/Form';
import Input from 'meticulous-ui/components/Input';

const fields = [
  {
    id: 'first',
    label: 'First Name',
    component: Input,
    compProps: { defaultValue: '', placeholder: 'First name' },
  },
  {
    id: 'last',
    label: 'Last Name',
    component: Input,
    compProps: { defaultValue: '', placeholder: 'Last name' },
  },
  {
    id: 'handle',
    label: 'Handle',
    component: Input,
    allProps: { shade: 'violet' },  // overrides the form-level shade for this field
    compProps: { defaultValue: '', placeholder: '@handle' },
  },
];

const SharedAllProps = () => (
  <Form
    fields={fields}
    allProps={{ shade: 'blue' }}
    onSubmit={(values) => console.log(values)}
    submitLabel="Save"
  />
);
        `,
      },
    },
  },
  render: () => (
    <Form
      fields={[
        {
          id: 'first',
          label: 'First Name',
          component: Input,
          compProps: { defaultValue: '', placeholder: 'First name' },
        },
        {
          id: 'last',
          label: 'Last Name',
          component: Input,
          compProps: { defaultValue: '', placeholder: 'Last name' },
        },
        {
          id: 'handle',
          label: 'Handle',
          component: Input,
          allProps: { shade: 'violet' },
          compProps: { defaultValue: '', placeholder: '@handle' },
        },
      ]}
      allProps={{ shade: 'blue' }}
      onSubmit={(values) => console.log('submitted:', values)}
      submitLabel='Save'
    />
  ),
};

// ─── All Components ───────────────────────────────────────────────────────────

const COUNTRY_OPTIONS = [
  { label: 'India', value: 'india' },
  { label: 'United States', value: 'us' },
  { label: 'Germany', value: 'germany' },
  { label: 'Japan', value: 'japan' },
  { label: 'Brazil', value: 'brazil' },
];

const ROLE_OPTIONS = [
  { label: 'Engineer', value: 'engineer' },
  { label: 'Designer', value: 'designer' },
  { label: 'Product', value: 'product' },
  { label: 'Marketing', value: 'marketing' },
];

const SKILL_OPTIONS = [
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'node' },
  { label: 'Python', value: 'python' },
  { label: 'Go', value: 'go' },
];

const ALL_FIELDS = [
  {
    id: 'fullName',
    label: 'Full Name',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'John Doe' },
    validate: (v) => (v.trim() ? null : 'Name is required'),
  },
  {
    id: 'email',
    label: 'Email',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'john@example.com', type: 'email' },
    validate: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Enter a valid email'),
  },
  {
    id: 'password',
    label: 'Password',
    component: Input,
    isMandatory: true,
    compProps: { defaultValue: '', placeholder: 'At least 8 characters', type: 'password' },
    validate: (v) => (v.length >= 8 ? null : 'Min 8 characters'),
  },
  {
    id: 'website',
    label: 'Website',
    component: Input,
    compProps: { defaultValue: '', placeholder: 'https://example.com' },
    validate: (v) => {
      if (!v) return null;
      try {
        new URL(v);
        return null;
      } catch {
        return 'Enter a valid URL';
      }
    },
  },
  {
    id: 'bio',
    label: 'Bio',
    component: Textarea,
    compProps: { defaultValue: '', placeholder: 'Tell us about yourself…', rows: 4 },
    validate: (v) => (v.length <= 300 ? null : 'Max 300 characters'),
  },
  {
    id: 'otp',
    label: 'OTP',
    component: OtpInput,
    isMandatory: true,
    compProps: { defaultValue: '', length: 6 },
    validate: (v) => (v.length === 6 ? null : 'Enter all 6 digits'),
  },
  {
    id: 'country',
    label: 'Country',
    component: Dropdown,
    isMandatory: true,
    compProps: { defaultValue: null, options: COUNTRY_OPTIONS, placeholder: 'Select country' },
    validate: (v) => (v ? null : 'Select a country'),
  },
  {
    id: 'skills',
    label: 'Skills',
    component: Selectbox,
    compProps: { defaultValue: [], options: SKILL_OPTIONS, placeholder: 'Select skills' },
  },
  {
    id: 'role',
    label: 'Role',
    component: RadioGroup,
    isMandatory: true,
    compProps: { defaultValue: '', options: ROLE_OPTIONS, inline: true },
    validate: (v) => (v ? null : 'Select a role'),
  },
  {
    id: 'dob',
    label: 'Date of Birth',
    component: DatePicker,
    compProps: {
      defaultValue: null,
      showFooter: false,
      showModeToggle: false,
      showSelectedDisplay: false,
    },
  },
  {
    id: 'notifications',
    label: 'Enable Notifications',
    component: Switch,
    compProps: { defaultValue: false },
  },
  {
    id: 'terms',
    label: 'I agree to the terms',
    component: Checkbox,
    isMandatory: true,
    compProps: { defaultValue: false },
    validate: (v) => (v ? null : 'You must accept the terms'),
  },
];

export const AllComponents = {
  name: 'All Components',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story:
          'A single form covering every supported input type: text, email, password, URL, textarea, OTP, dropdown (single-select), selectbox (multi-select), radio group, date picker, switch, and checkbox.',
      },
      source: {
        language: 'jsx',
        code: `
import Form from 'meticulous-ui/components/Form';
import Input from 'meticulous-ui/components/Input';
import Textarea from 'meticulous-ui/components/Input/Textarea';
import Checkbox from 'meticulous-ui/components/Input/Checkbox';
import RadioGroup from 'meticulous-ui/components/Input/RadioGroup';
import Switch from 'meticulous-ui/components/Switch';
import Dropdown from 'meticulous-ui/components/Dropdown';
import Selectbox from 'meticulous-ui/components/Selectbox';
import DatePicker from 'meticulous-ui/components/DatePicker';
import OtpInput from 'meticulous-ui/components/OtpInput';

const fields = [
  { id: 'fullName',      label: 'Full Name',            component: Input,      isMandatory: true, compProps: { defaultValue: '', placeholder: 'John Doe' },                               validate: (v) => (v.trim() ? null : 'Name is required') },
  { id: 'email',         label: 'Email',                component: Input,      isMandatory: true, compProps: { defaultValue: '', placeholder: 'john@example.com', type: 'email' },       validate: (v) => (/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) ? null : 'Enter a valid email') },
  { id: 'password',      label: 'Password',             component: Input,      isMandatory: true, compProps: { defaultValue: '', placeholder: 'At least 8 characters', type: 'password' }, validate: (v) => (v.length >= 8 ? null : 'Min 8 characters') },
  { id: 'website',       label: 'Website',              component: Input,                         compProps: { defaultValue: '', placeholder: 'https://example.com' } },
  { id: 'bio',           label: 'Bio',                  component: Textarea,                      compProps: { defaultValue: '', placeholder: 'Tell us about yourself…', rows: 4 } },
  { id: 'otp',           label: 'OTP',                  component: OtpInput,   isMandatory: true, compProps: { defaultValue: '', length: 6 },                                             validate: (v) => (v.length === 6 ? null : 'Enter all 6 digits') },
  { id: 'country',       label: 'Country',              component: Dropdown,   isMandatory: true, compProps: { defaultValue: null, options: COUNTRY_OPTIONS, placeholder: 'Select country' }, validate: (v) => (v ? null : 'Select a country') },
  { id: 'skills',        label: 'Skills',               component: Selectbox,                     compProps: { defaultValue: [], options: SKILL_OPTIONS, placeholder: 'Select skills' } },
  { id: 'role',          label: 'Role',                 component: RadioGroup, isMandatory: true, compProps: { defaultValue: '', options: ROLE_OPTIONS, inline: true },                   validate: (v) => (v ? null : 'Select a role') },
  { id: 'dob',           label: 'Date of Birth',        component: DatePicker,                    compProps: { defaultValue: null, showFooter: false } },
  { id: 'notifications', label: 'Enable Notifications', component: Switch,                        compProps: { defaultValue: false } },
  { id: 'terms',         label: 'I agree to the terms', component: Checkbox,   isMandatory: true, compProps: { defaultValue: false },                                                     validate: (v) => (v ? null : 'You must accept the terms') },
];

const AllComponents = () => (
  <Form fields={fields} onSubmit={(values) => console.log(values)} submitLabel="Submit" />
);
        `,
      },
    },
  },
  render: () => (
    <Form
      fields={ALL_FIELDS}
      onSubmit={(values) => console.log('submitted:', values)}
      submitLabel='Submit'
    />
  ),
};
