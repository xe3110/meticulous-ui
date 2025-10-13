import { useState } from 'react';
import Pagination from '../components/Pagination'; // adjust path as needed
import styled from 'styled-components';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'A simple pagination component to navigate through pages.',
      },
      source: {
        language: 'jsx',
        code: `
          import Pagination from 'meticulous-ui/components/Pagination';

          function Example() {
            const [page, setPage] = useState(1);

            return (
              <Pagination
                totalPages={10}
                pageNumber={page}
                setPageNumber={setPage}
                theme="blue"
                size="medium"
              />
            );
          }
        `,
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: [
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
        'white',
        'black',
        'blueGray',
        'cider',
        'deepOrange',
        'green',
        'index',
        'lightBlue',
        'lime',
        'pink',
        'red',
        'violet',
        'yellow',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    totalPages: {
      control: { type: 'number' },
      description: 'Mandatory numeric prop representing total pages',
      defaultValue: 0,
    },
    pageNumber: {
      control: { type: 'number' },
      description: 'Mandatory numeric prop representing current page',
      defaultValue: 0,
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then disabled',
      defaultValue: false,
    },
    setPageNumber: { action: 'pageChanged' },
  },
};

// Default story
export const Default = (args) => {
  const [pageNumber, setPageNumber] = useState(args.pageNumber || 1);

  const handlePageChange = (num) => {
    setPageNumber(num);
    args.setPageNumber(num);
  };

  return <Pagination {...args} pageNumber={pageNumber} setPageNumber={handlePageChange} />;
};

export const ManyPages = {
  name: 'Many Pages',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 50;

    return (
      <Pagination
        {...{
          pageNumber,
          totalPages,
          setPageNumber,
        }}
      />
    );
  },
};

export const DifferentColors = {
  name: 'Different Colors',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [rPageNumber, setRPageNumber] = useState(1);
    const [bPageNumber, setBPageNumber] = useState(1);
    const [greenPageNumber, setGreenPageNumber] = useState(1);
    const [pPageNumber, setPPageNumber] = useState(1);
    const [greyPageNumber, setGreyPageNumber] = useState(1);
    const [blackPageNumber, setBlackPageNumber] = useState(1);
    const totalPages = 50;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <P>RED</P>
          <Pagination
            {...{ totalPages }}
            pageNumber={rPageNumber}
            setPageNumber={setRPageNumber}
            theme='red'
          />
        </div>
        <div>
          <P>BLUE</P>
          <Pagination
            {...{ totalPages }}
            pageNumber={bPageNumber}
            setPageNumber={setBPageNumber}
            theme='blue'
          />
        </div>
        <div>
          <P>GREEN</P>
          <Pagination
            {...{ totalPages }}
            pageNumber={greenPageNumber}
            setPageNumber={setGreenPageNumber}
            theme='green'
          />
        </div>
        <div>
          <P>PURPLE</P>
          <Pagination
            {...{ totalPages }}
            pageNumber={pPageNumber}
            setPageNumber={setPPageNumber}
            theme='purple'
          />
        </div>
        <div>
          <P>GREY</P>
          <Pagination
            {...{ totalPages }}
            pageNumber={greyPageNumber}
            setPageNumber={setGreyPageNumber}
            theme='grey'
          />
        </div>
        <div>
          <P>BLACK</P>
          <Pagination
            {...{ totalPages }}
            pageNumber={blackPageNumber}
            setPageNumber={setBlackPageNumber}
            theme='black'
          />
        </div>
      </div>
    );
  },
};

export const SmallSize = {
  name: 'Small Size',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 10;

    return (
      <Pagination
        {...{
          pageNumber,
          totalPages,
          setPageNumber,
        }}
        size='small'
      />
    );
  },
};

export const MediumSize = {
  name: 'Medium Size',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 10;

    return (
      <Pagination
        {...{
          pageNumber,
          totalPages,
          setPageNumber,
        }}
        size='medium'
      />
    );
  },
};

export const LargeSize = {
  name: 'Large Size',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 10;

    return (
      <Pagination
        {...{
          pageNumber,
          totalPages,
          setPageNumber,
        }}
        size='large'
      />
    );
  },
};

export const Disabled = {
  name: 'Disabled',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 10;

    return (
      <Pagination
        {...{
          pageNumber,
          totalPages,
          setPageNumber,
        }}
        size='large'
        isDisabled
      />
    );
  },
};

const P = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 1.6rem;
  font-weight: 600;
`;

Default.args = {
  theme: 'blue',
  size: 'medium',
  totalPages: 10,
  pageNumber: 1,
};
