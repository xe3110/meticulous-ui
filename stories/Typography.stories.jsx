import { H1, H2, H3, H4, H5, H6 } from '../src/components/Typography/Headings';
import P from '../src/components/Typography/P';
import red from '../src/colors/red';

const TypographyWrapper = () => {
  return (
    <>
      <H1 color={red.m600}>This is Heading H1</H1>
      <H2 color={red.m600}>This is Heading H2</H2>
      <H3 color={red.m600}>This is Heading H3</H3>
      <H4 color={red.m600}>This is Heading H4</H4>
      <H5 color={red.m600}>This is Heading H5</H5>
      <H6 color={red.m600}>This is Heading H6</H6>
      <P color={red.m600} size={'0.8rem'}>
        This is Paragraph P
      </P>
    </>
  );
};

export default {
  title: 'Components/Typography',
  component: TypographyWrapper,
  parameters: {
    docs: {
      description: {
        component: 'Typography input.',
      },
      source: {
        language: 'jsx',
        code: `
          import { H1, H2, H3, H4, H5, H6 } from 'meticulous-ui/components/Typography/Headings';
          import P from 'meticulous-ui/components/Typography/P';
          import red from 'meticulous-ui/colors/red';

          const TypographyWrapper = () => {
            return (
              <>
                <H1 color={red.m600}>This is Heading H1</H1>
                <H2 color={red.m600}>This is Heading H2</H2>
                <H3 color={red.m600}>This is Heading H3</H3>
                <H4 color={red.m600}>This is Heading H4</H4>
                <H5 color={red.m600}>This is Heading H5</H5>
                <H6 color={red.m600}>This is Heading H6</H6>
                <P color={red.m600} size='0.8rem'>This is Paragraph P</P>
              </>
            );
          };
        `,
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  return <TypographyWrapper />;
};

Default.storyName = 'Typography';
