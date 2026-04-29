import { useRef } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import green from '../src/colors/green';
import red from '../src/colors/red';
import indigo from '../src/colors/indigo';
import amber from '../src/colors/amber';

// ─── Page wrapper ─────────────────────────────────────────────────────────────

const StoryPage = styled.div`
  min-height: 100vh;
  padding: 6.4rem 4rem;
  background: ${({ $bg }) => $bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const MaxWidth = styled.div`
  width: 100%;
  max-width: 760px;
`;

// ─── Card ─────────────────────────────────────────────────────────────────────

const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  border-left: 6px solid ${({ $accent }) => $accent};
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.09);
  overflow: hidden;
`;

const CardHeader = styled.div`
  background: ${({ $bg }) => $bg};
  border-bottom: 2px solid ${({ $border }) => $border};
  padding: 2.8rem 3.2rem;
`;

const FnName = styled.code`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  padding: 0.35rem 1rem;
  border-radius: 6px;
`;

const Signature = styled.code`
  font-size: 1.3rem;
  color: ${blueGray.m400};
  margin-left: 1.2rem;
`;

const Description = styled.p`
  margin: 1.4rem 0 0;
  font-size: 1.45rem;
  line-height: 1.8;
  color: ${blueGray.m600};
`;

const CardBody = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

const SectionLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ $color }) => $color};
  margin: 0 0 1.2rem;
`;

// ─── Param table ──────────────────────────────────────────────────────────────

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.3rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem 1.4rem;
  background: ${blueGray.m50};
  color: ${blueGray.m500};
  font-weight: 600;
  font-size: 1.2rem;
  border: 1px solid ${blueGray.m100};
`;

const Td = styled.td`
  padding: 1rem 1.4rem;
  border: 1px solid ${blueGray.m100};
  vertical-align: top;
`;

const Code = styled.code`
  background: ${blueGray.m50};
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  font-size: 1.25rem;
  color: ${blueGray.m800};
`;

const ParamsTable = ({ rows }) => (
  <Table>
    <thead>
      <tr>
        <Th>Parameter</Th>
        <Th>Type</Th>
        <Th>Default</Th>
        <Th>Description</Th>
      </tr>
    </thead>
    <tbody>
      {rows.map(({ name, type, defaultVal, description }, i) => (
        <tr key={i}>
          <Td>
            <Code>{name}</Code>
          </Td>
          <Td style={{ color: blueGray.m500 }}>{type}</Td>
          <Td style={{ color: blueGray.m400 }}>{defaultVal ?? '—'}</Td>
          <Td style={{ color: blueGray.m600, fontSize: '1.2rem' }}>{description}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

// ─── Source block ─────────────────────────────────────────────────────────────

const Pre = styled.pre`
  background: ${blueGray.m900};
  color: #e2e8f0;
  border-radius: 10px;
  padding: 2rem 2.4rem;
  font-size: 1.25rem;
  line-height: 1.8;
  overflow-x: auto;
  margin: 0;
`;

// ─── Demo helpers ─────────────────────────────────────────────────────────────

const DemoBox = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const DemoTarget = styled.div`
  width: 120px;
  height: 64px;
  border-radius: 8px;
  background: ${({ $bg }) => $bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
`;

const DemoBtn = styled.button`
  padding: 0.7rem 1.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg};
  color: #fff;
`;

// ═════════════════════════════════════════════════════════════════════════════
// fadeIn — green
// ═════════════════════════════════════════════════════════════════════════════

const FadeInDemo = () => {
  const ref = useRef(null);

  const run = () => {
    const el = ref.current;
    el.style.display = '';
    el.style.opacity = '0';
    el.style.transition = 'opacity 300ms ease';
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.opacity = '1';
      })
    );
  };

  return (
    <DemoBox $bg={green.m50}>
      <DemoTarget ref={ref} $bg={green.m500}>
        Box
      </DemoTarget>
      <DemoBtn $bg={green.m600} onClick={run}>
        Fade In
      </DemoBtn>
    </DemoBox>
  );
};

const FadeInPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg='#fff' $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              fadeIn
            </FnName>
            <Signature>(element: HTMLElement, duration?: number) → void</Signature>
          </div>
          <Description>
            Fades an element in by transitioning its <Code>opacity</Code> from <Code>0</Code> to{' '}
            <Code>1</Code>. Sets <Code>display</Code> to <Code>''</Code> before animating so hidden
            elements reappear correctly.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Parameters</SectionLabel>
            <ParamsTable
              rows={[
                { name: 'element', type: 'HTMLElement', description: 'The DOM element to fade in' },
                {
                  name: 'duration',
                  type: 'number',
                  defaultVal: '300',
                  description: 'Transition duration in milliseconds',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Demo</SectionLabel>
            <FadeInDemo />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import fadeIn from 'meticulous-ui/utils/fadeIn';

const modal = document.getElementById('modal');
fadeIn(modal);          // 300 ms default
fadeIn(modal, 500);     // 500 ms`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const fadeIn = (element, duration = 300) => {
  element.style.opacity = '0';
  element.style.display = '';
  element.style.transition = \`opacity \${duration}ms ease\`;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.opacity = '1';
    });
  });
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// fadeOut — red
// ═════════════════════════════════════════════════════════════════════════════

const FadeOutDemo = () => {
  const ref = useRef(null);

  const fadeOutEl = () => {
    const el = ref.current;
    el.style.transition = 'opacity 300ms ease';
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.display = 'none';
    }, 300);
  };

  const reset = () => {
    const el = ref.current;
    el.style.display = '';
    el.style.opacity = '1';
  };

  return (
    <DemoBox $bg={red.m50}>
      <DemoTarget ref={ref} $bg={red.m400}>
        Box
      </DemoTarget>
      <DemoBtn $bg={red.m500} onClick={fadeOutEl}>
        Fade Out
      </DemoBtn>
      <DemoBtn $bg={blueGray.m500} onClick={reset}>
        Reset
      </DemoBtn>
    </DemoBox>
  );
};

const FadeOutPage = () => (
  <StoryPage $bg={red.m50}>
    <MaxWidth>
      <Card $accent={red.m500}>
        <CardHeader $bg='#fff' $border={red.m100}>
          <div>
            <FnName $color={red.m900} $bg={red.m100}>
              fadeOut
            </FnName>
            <Signature>(element: HTMLElement, duration?: number) → void</Signature>
          </div>
          <Description>
            Fades an element out by transitioning its <Code>opacity</Code> to <Code>0</Code>, then
            sets <Code>display: none</Code> after the transition completes so it no longer occupies
            layout space.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={red.m700}>Parameters</SectionLabel>
            <ParamsTable
              rows={[
                {
                  name: 'element',
                  type: 'HTMLElement',
                  description: 'The DOM element to fade out',
                },
                {
                  name: 'duration',
                  type: 'number',
                  defaultVal: '300',
                  description: 'Transition duration in milliseconds',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={red.m700}>Demo</SectionLabel>
            <FadeOutDemo />
          </div>
          <div>
            <SectionLabel $color={red.m700}>Usage</SectionLabel>
            <Pre>{`import fadeOut from 'meticulous-ui/utils/fadeOut';

const tooltip = document.getElementById('tooltip');
fadeOut(tooltip);        // 300 ms default
fadeOut(tooltip, 600);   // 600 ms`}</Pre>
          </div>
          <div>
            <SectionLabel $color={red.m700}>Source</SectionLabel>
            <Pre>{`const fadeOut = (element, duration = 300) => {
  element.style.transition = \`opacity \${duration}ms ease\`;
  element.style.opacity = '0';
  setTimeout(() => {
    element.style.display = 'none';
  }, duration);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// smoothScroll — indigo
// ═════════════════════════════════════════════════════════════════════════════

const SmoothScrollPage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg='#fff' $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              smoothScroll
            </FnName>
            <Signature>(target: number | Element | string, duration?: number) → void</Signature>
          </div>
          <Description>
            Animates <Code>window.scrollY</Code> to a <Code>target</Code> using a cubic ease-out
            curve. <Code>target</Code> can be a pixel offset, an <Code>Element</Code>, or a CSS
            selector string. The original <Code>scrollIntoView</Code> smooth mode is not supported
            in all browsers — this util fills that gap.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Parameters</SectionLabel>
            <ParamsTable
              rows={[
                {
                  name: 'target',
                  type: 'number | Element | string',
                  description: 'Scroll destination — pixel offset, DOM element, or CSS selector',
                },
                {
                  name: 'duration',
                  type: 'number',
                  defaultVal: '500',
                  description: 'Animation duration in milliseconds',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import smoothScroll from 'meticulous-ui/utils/smoothScroll';

// Scroll to a pixel offset
smoothScroll(800);

// Scroll to an element
smoothScroll(document.getElementById('section-2'));

// Scroll to a CSS selector
smoothScroll('#contact', 600);`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const smoothScroll = (target, duration = 500) => {
  const start = window.scrollY;
  const end =
    typeof target === 'number'
      ? target
      : (target instanceof Element
          ? target
          : document.querySelector(target)
        )?.getBoundingClientRect().top + window.scrollY ?? 0;
  const distance = end - start;
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, start + distance * ease);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// waitForTransitionEnd — amber
// ═════════════════════════════════════════════════════════════════════════════

const WaitForTransitionEndDemo = () => {
  const ref = useRef(null);
  const logRef = useRef(null);

  const run = async () => {
    const el = ref.current;
    const log = logRef.current;
    log.textContent = 'Transition started…';
    el.style.transition = 'transform 600ms ease';
    el.style.transform = el.style.transform === 'translateX(120px)' ? '' : 'translateX(120px)';

    await new Promise((resolve) => {
      const handler = (e) => {
        el.removeEventListener('transitionend', handler);
        resolve(e);
      };
      el.addEventListener('transitionend', handler);
    });

    log.textContent = 'transitionend fired ✓';
  };

  return (
    <DemoBox $bg={amber.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
        <DemoTarget ref={ref} $bg={amber.m600}>
          Box
        </DemoTarget>
        <DemoBtn $bg={amber.m700} onClick={run}>
          Run
        </DemoBtn>
      </div>
      <code ref={logRef} style={{ fontSize: '1.2rem', color: amber.m800, marginTop: '0.8rem' }} />
    </DemoBox>
  );
};

const WaitForTransitionEndPage = () => (
  <StoryPage $bg={amber.m50}>
    <MaxWidth>
      <Card $accent={amber.m700}>
        <CardHeader $bg='#fff' $border={amber.m200}>
          <div>
            <FnName $color={amber.m900} $bg={amber.m200}>
              waitForTransitionEnd
            </FnName>
            <Signature>
              (element: HTMLElement, property?: string) → Promise&lt;TransitionEvent&gt;
            </Signature>
          </div>
          <Description>
            Returns a <Code>Promise</Code> that resolves when the element's{' '}
            <Code>transitionend</Code> event fires. Pass an optional <Code>property</Code> name
            (e.g. <Code>'opacity'</Code>) to wait only for that specific CSS property to finish
            transitioning.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={amber.m800}>Parameters</SectionLabel>
            <ParamsTable
              rows={[
                {
                  name: 'element',
                  type: 'HTMLElement',
                  description: 'The element whose transition to await',
                },
                {
                  name: 'property',
                  type: 'string',
                  defaultVal: 'undefined',
                  description:
                    'CSS property name to filter on — if omitted the first transitionend resolves',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Demo</SectionLabel>
            <WaitForTransitionEndDemo />
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Usage</SectionLabel>
            <Pre>{`import fadeOut from 'meticulous-ui/utils/fadeOut';
import waitForTransitionEnd from 'meticulous-ui/utils/waitForTransitionEnd';

async function removeAfterFade(el) {
  fadeOut(el, 400);
  await waitForTransitionEnd(el, 'opacity');
  el.remove();
}

// Without a property filter — resolves on the first transitionend
await waitForTransitionEnd(panel);
doNextStep();`}</Pre>
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Source</SectionLabel>
            <Pre>{`const waitForTransitionEnd = (element, property) =>
  new Promise((resolve) => {
    const handler = (e) => {
      if (property && e.propertyName !== property) return;
      element.removeEventListener('transitionend', handler);
      resolve(e);
    };
    element.addEventListener('transitionend', handler);
  });`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// Story config
// ═════════════════════════════════════════════════════════════════════════════

export default {
  title: 'Utilities/Animation Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const FadeIn = () => <FadeInPage />;
FadeIn.storyName = 'fadeIn';

export const FadeOut = () => <FadeOutPage />;
FadeOut.storyName = 'fadeOut';

export const SmoothScroll = () => <SmoothScrollPage />;
SmoothScroll.storyName = 'smoothScroll';

export const WaitForTransitionEnd = () => <WaitForTransitionEndPage />;
WaitForTransitionEnd.storyName = 'waitForTransitionEnd';
