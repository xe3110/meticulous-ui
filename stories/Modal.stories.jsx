import { useState } from 'react';
import Modal from '../src/components/Modal/Modal';
import Button from '../src/components/Button/Button';
import green from '../src/colors/green';
import red from '../src/colors/red';
import grey from '../src/colors/grey';
import white from '../src/colors/white';

export default {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          'A Modal component that renders in a portal over the page. Supports title, body, footer, keyboard dismissal (Esc), and overlay click to close.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Modal from 'meticulous-ui/components/Modal';
import Button from 'meticulous-ui/components/Button';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        footer={
          <>
            <Button theme="grey" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>Modal body content goes here.</p>
      </Modal>
    </>
  );
};
        `,
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
  argTypes: {
    title: { description: 'Modal header title — string or React element', control: 'text' },
    width: { description: 'CSS width of the modal dialog', control: 'text' },
    closeOnOverlayClick: { description: 'Closes the modal when the backdrop is clicked', control: 'boolean' },
    showCloseButton: { description: 'Shows the × close button in the header', control: 'boolean' },
    footerAlign: { description: "Horizontal alignment of footer content: `'left'`, `'center'`, or `'right'`", control: 'select', options: ['left', 'center', 'right'] },
    isOpen: { description: 'Controls whether the modal is visible' },
    onClose: { description: 'Called when the modal requests to close (Escape key, overlay click, or close button)' },
    children: { description: 'Modal body content' },
    footer: { description: 'Content rendered in the modal footer (e.g. action buttons)' },
    isFullOnMobile: { description: 'Expands the modal to full-screen on small viewports' },
  },
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Example Modal'
        footer={
          <>
            <Button theme='grey' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          This is the modal body. You can put any content here — forms, messages, confirmations,
          etc.
        </p>
        <p style={{ marginBottom: 0, fontSize: '1.6rem' }}>
          Press <strong>Esc</strong> or click the backdrop to close.
        </p>
      </Modal>
    </>
  );
};

Default.storyName = 'Default';

export const NoTitle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open (No Title)</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
      >
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          A modal without a title — just body content and a footer.
        </p>
      </Modal>
    </>
  );
};

NoTitle.storyName = 'No Title';

export const NoFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} width='5rem'>
        Open (No Footer)
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title='Info'>
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          This modal has no footer. Close it via the ✕ button or Esc.
        </p>
      </Modal>
    </>
  );
};

NoFooter.storyName = 'No Footer';

export const CustomTitleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const TitleWithBadge = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <span style={{ fontSize: '2.4rem', fontWeight: 600 }}>Team Settings</span>
      <span
        style={{
          fontSize: '1.2rem',
          fontWeight: 600,
          padding: '0.2rem 0.6rem',
          borderRadius: '999px',
          background: green.m50,
          color: green.m800,
        }}
      >
        Pro
      </span>
    </div>
  );

  return (
    <>
      <Button onClick={() => setIsOpen(true)} width='5rem'>
        Open (Custom Title)
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={TitleWithBadge}
        footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
      >
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          The title prop accepts a React element, so you can render badges, icons, or any custom
          markup alongside the heading.
        </p>
      </Modal>
    </>
  );
};

CustomTitleComponent.storyName = 'Custom Title Component';

export const FooterAlignment = () => {
  const [align, setAlign] = useState('right');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
        {['left', 'center', 'right'].map((a) => (
          <button
            key={a}
            onClick={() => {
              setAlign(a);
              setIsOpen(true);
            }}
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', textTransform: 'capitalize' }}
          >
            {a} footer
          </button>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={`Footer aligned: ${align}`}
        footerAlign={align}
        footer={
          <>
            <Button theme='grey' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>OK</Button>
          </>
        }
      >
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          The footer buttons are aligned to the <strong>{align}</strong>.
        </p>
      </Modal>
    </>
  );
};

FooterAlignment.storyName = 'Footer Alignment';

export const CustomWidth = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} width='5rem'>
        Open Wide Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Wide Modal'
        width='56rem'
        footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
      >
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          This modal uses a custom <code>width="56rem"</code>. You can pass any valid CSS width.
        </p>
      </Modal>
    </>
  );
};

CustomWidth.storyName = 'Custom Width';

export const OverlayClickDisabled = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} width='5rem'>
        Open (Overlay Click Disabled)
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Persistent Modal'
        closeOnOverlayClick={false}
        footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
      >
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          Clicking the backdrop won't close this modal — only the ✕ button, Esc, or the footer
          button will.
        </p>
      </Modal>
    </>
  );
};

OverlayClickDisabled.storyName = 'Overlay Click Disabled';

export const ConfirmDelete = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleConfirm = () => {
    setDeleted(true);
    setIsOpen(false);
  };

  return (
    <>
      <Button theme='red' onClick={() => setIsOpen(true)}>
        Delete Item
      </Button>
      {deleted && (
        <p style={{ marginTop: '1rem', fontSize: '1.6rem', color: red.m800 }}>Item deleted.</p>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Confirm Deletion'
        closeOnOverlayClick={false}
        footer={
          <>
            <Button theme='grey' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button theme='red' onClick={handleConfirm}>
              Delete
            </Button>
          </>
        }
      >
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          Are you sure you want to delete this item? This action <strong>cannot be undone</strong>.
        </p>
      </Modal>
    </>
  );
};

ConfirmDelete.storyName = 'Confirm Delete';

export const FullOnMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} width='5rem'>
        Open Full-Screen on Mobile
      </Button>
      <p style={{ marginTop: '0.75rem', fontSize: '1.4rem', color: grey.m600 }}>
        Resize the viewport below 640 px to see the bottom-sheet behaviour.
      </p>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Mobile Sheet'
        isFullOnMobile
        footer={
          <>
            <Button theme='grey' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p style={{ margin: 0, fontSize: '1.6rem' }}>
          On mobile this sheet slides up from the bottom and covers the full width of the screen. On
          desktop it behaves like a regular centered modal.
        </p>
      </Modal>
    </>
  );
};

FullOnMobile.storyName = 'Full On Mobile';

export const ScrollableContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} width='5rem'>
        Open Tall Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Scrollable Content'
        isFullOnMobile
        width='80rem'
        footer={
          <>
            <Button theme='grey' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </>
        }
      >
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 1rem', fontSize: '1.6rem' }}>
            Paragraph {i + 1} — When content exceeds the modal's max height (90 vh), the body
            scrolls independently while the header and footer stay fixed.
          </p>
        ))}
      </Modal>
    </>
  );
};

ScrollableContent.storyName = 'Scrollable Content';
