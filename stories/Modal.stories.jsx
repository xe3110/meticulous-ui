import { useState } from 'react';
import Modal from '../src/components/Modal/Modal';
import Button from '../src/components/Button/Button';

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
    title: { control: 'text' },
    width: { control: 'text' },
    closeOnOverlayClick: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    footerAlign: { control: 'select', options: ['left', 'center', 'right'] },
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
        <p style={{ marginTop: '1rem', fontSize: '1.6rem', color: '#c62828' }}>Item deleted.</p>
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
