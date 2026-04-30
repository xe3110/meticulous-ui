import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import indigo from '../src/colors/indigo';
import teal from '../src/colors/teal';
import green from '../src/colors/green';
import red from '../src/colors/red';
import orange from '../src/colors/orange';
import white from '../src/colors/white';

import isFeatureEnabled from '../src/utils/isFeatureEnabled';
import getVariant from '../src/utils/getVariant';

// ─── Layout ───────────────────────────────────────────────────────────────────

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

const Card = styled.div`
  background: ${white};
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

const Code = styled.code`
  background: ${blueGray.m50};
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  font-size: 1.25rem;
  color: ${blueGray.m800};
`;

const Pre = styled.pre`
  background: ${blueGray.m900};
  color: ${blueGray.m100};
  border-radius: 10px;
  padding: 2rem 2.4rem;
  font-size: 1.25rem;
  line-height: 1.8;
  overflow-x: auto;
  margin: 0;
`;

const DemoButton = styled.button`
  padding: 1rem 2.4rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg};
  color: ${white};
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.7;
  }
`;

const DemoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.4rem;
  border-radius: 999px;
  font-size: 1.3rem;
  font-weight: 700;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`;

const OutputBox = styled.div`
  margin-top: 1.4rem;
  padding: 1.4rem 1.8rem;
  border-radius: 10px;
  font-size: 1.3rem;
  line-height: 1.7;
  background: ${({ $bg }) => $bg};
  border: 1.5px solid ${({ $border }) => $border};
  color: ${({ $color }) => $color};
  font-family: monospace;
  white-space: pre-wrap;
`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

const FLAGS_KEY = 'feature_flags';
const VARIANTS_KEY = 'ab_variants';

const readFlags = () => {
  try {
    return JSON.parse(localStorage.getItem(FLAGS_KEY) ?? '{}');
  } catch {
    return {};
  }
};

const writeFlags = (flags) => localStorage.setItem(FLAGS_KEY, JSON.stringify(flags));

const readVariants = () => {
  try {
    return JSON.parse(localStorage.getItem(VARIANTS_KEY) ?? '{}');
  } catch {
    return {};
  }
};

const writeVariants = (variants) => localStorage.setItem(VARIANTS_KEY, JSON.stringify(variants));

// ═════════════════════════════════════════════════════════════════════════════
// isFeatureEnabled — indigo
// ═════════════════════════════════════════════════════════════════════════════

const DEMO_FLAGS = ['dark_mode', 'new_dashboard', 'beta_editor', 'referral_program'];

const IsFeatureEnabledPage = () => {
  const [flags, setFlags] = useState(() => readFlags());

  const toggle = (flag) => {
    const next = { ...flags, [flag]: !flags[flag] };
    writeFlags(next);
    setFlags(next);
  };

  const clearAll = () => {
    writeFlags({});
    setFlags({});
  };

  return (
    <StoryPage $bg={indigo.m50}>
      <MaxWidth>
        <Card $accent={indigo.m500}>
          <CardHeader $bg={white} $border={indigo.m100}>
            <div>
              <FnName $color={indigo.m900} $bg={indigo.m100}>
                isFeatureEnabled
              </FnName>
              <Signature>(flag, key = &apos;feature_flags&apos;) → boolean</Signature>
            </div>
            <Description>
              Reads a JSON map stored under <Code>key</Code> in <Code>localStorage</Code> and
              returns <Code>true</Code> only when the named flag is explicitly set to{' '}
              <Code>true</Code>. Safe against missing keys, malformed JSON, and SSR — always returns{' '}
              <Code>false</Code> on any error.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={indigo.m700}>
                Demo — toggle flags and watch isFeatureEnabled() react
              </SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {DEMO_FLAGS.map((flag) => {
                  const enabled = isFeatureEnabled(flag);
                  return (
                    <div
                      key={flag}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.2rem',
                        padding: '1rem 1.4rem',
                        borderRadius: 10,
                        background: enabled ? indigo.m50 : white,
                        border: `2px solid ${enabled ? indigo.m300 : blueGray.m100}`,
                        transition: 'background 0.15s, border-color 0.15s',
                      }}
                    >
                      {/* toggle pill */}
                      <div
                        onClick={() => toggle(flag)}
                        style={{
                          width: '4.4rem',
                          height: '2.4rem',
                          borderRadius: '999px',
                          background: enabled ? indigo.m500 : blueGray.m200,
                          position: 'relative',
                          cursor: 'pointer',
                          flexShrink: 0,
                          transition: 'background 0.2s',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '0.3rem',
                            left: enabled ? '2.2rem' : '0.3rem',
                            width: '1.8rem',
                            height: '1.8rem',
                            borderRadius: '50%',
                            background: white,
                            transition: 'left 0.2s',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                          }}
                        />
                      </div>
                      <Code style={{ flex: 1 }}>{flag}</Code>
                      <Badge
                        $bg={enabled ? indigo.m100 : blueGray.m100}
                        $color={enabled ? indigo.m800 : blueGray.m500}
                      >
                        {enabled ? 'enabled' : 'disabled'}
                      </Badge>
                      <span
                        style={{
                          fontSize: '1.2rem',
                          color: blueGray.m400,
                          fontFamily: 'monospace',
                        }}
                      >
                        → {String(enabled)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <DemoRow style={{ marginTop: '1.4rem' }}>
                <DemoButton $bg={blueGray.m400} onClick={clearAll}>
                  Clear all flags
                </DemoButton>
              </DemoRow>
              <OutputBox $bg={blueGray.m50} $border={blueGray.m200} $color={blueGray.m700}>
                localStorage[&quot;{FLAGS_KEY}&quot;] = {JSON.stringify(flags, null, 2)}
              </OutputBox>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
              <Pre>{`import isFeatureEnabled from 'meticulous-ui/utils/isFeatureEnabled';

// conditionally render a feature
{isFeatureEnabled('new_dashboard') && <NewDashboard />}

// guard an action
const handleExport = () => {
  if (!isFeatureEnabled('csv_export')) return;
  exportToCSV(data);
};

// custom storage key (e.g. from a remote config payload)
isFeatureEnabled('dark_mode', 'remote_flags');`}</Pre>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Source</SectionLabel>
              <Pre>{`const isFeatureEnabled = (flag, key = 'feature_flags') => {
  try {
    const flags = JSON.parse(localStorage.getItem(key) ?? '{}');
    return flags[flag] === true;
  } catch {
    return false;
  }
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// getVariant — teal
// ═════════════════════════════════════════════════════════════════════════════

const AB_TESTS = [
  {
    name: 'checkout_flow',
    variants: ['control', 'one_page', 'multi_step'],
    description: 'Which checkout layout to show',
  },
  {
    name: 'cta_button',
    variants: ['control', 'green', 'pulsing'],
    description: 'CTA button style experiment',
  },
  {
    name: 'pricing_page',
    variants: ['control', 'annual_first', 'highlight_pro'],
    description: 'Pricing page layout test',
  },
];

const VARIANT_PREVIEWS = {
  checkout_flow: {
    control: { label: 'Classic multi-page checkout', bg: blueGray.m50, color: blueGray.m700 },
    one_page: { label: 'Everything on one scrollable page', bg: teal.m50, color: teal.m800 },
    multi_step: { label: 'Guided step-by-step wizard', bg: indigo.m50, color: indigo.m800 },
  },
  cta_button: {
    control: { label: 'Standard grey button', bg: blueGray.m100, color: blueGray.m700 },
    green: { label: 'Bold green "Get started" button', bg: green.m50, color: green.m800 },
    pulsing: { label: 'Animated pulsing orange button', bg: orange.m50, color: orange.m800 },
  },
  pricing_page: {
    control: { label: 'Balanced grid — all plans equal', bg: blueGray.m50, color: blueGray.m700 },
    annual_first: {
      label: 'Annual billing tab selected by default',
      bg: teal.m50,
      color: teal.m800,
    },
    highlight_pro: { label: 'Pro plan visually elevated', bg: indigo.m50, color: indigo.m800 },
  },
};

const GetVariantPage = () => {
  const [variants, setVariants] = useState(() => readVariants());

  const assign = (testName, variant) => {
    const next = { ...variants, [testName]: variant };
    writeVariants(next);
    setVariants(next);
  };

  const unassign = (testName) => {
    const next = { ...variants };
    delete next[testName];
    writeVariants(next);
    setVariants(next);
  };

  return (
    <StoryPage $bg={teal.m50}>
      <MaxWidth>
        <Card $accent={teal.m500}>
          <CardHeader $bg={white} $border={teal.m100}>
            <div>
              <FnName $color={teal.m900} $bg={teal.m100}>
                getVariant
              </FnName>
              <Signature>(testName, key = &apos;ab_variants&apos;) → string | null</Signature>
            </div>
            <Description>
              Reads a JSON map stored under <Code>key</Code> in <Code>localStorage</Code> and
              returns the variant string assigned to <Code>testName</Code>, or <Code>null</Code>{' '}
              when the test has no assignment. Typically the variant is set server-side or by an A/B
              platform SDK on first load.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={teal.m700}>
                Demo — assign variants and see what getVariant() returns
              </SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {AB_TESTS.map(({ name, variants: opts, description }) => {
                  const active = getVariant(name);
                  const preview = active && VARIANT_PREVIEWS[name]?.[active];
                  return (
                    <div
                      key={name}
                      style={{
                        padding: '1.6rem',
                        borderRadius: 10,
                        background: white,
                        border: `1.5px solid ${active ? teal.m200 : blueGray.m100}`,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '0.8rem',
                        }}
                      >
                        <Code style={{ fontSize: '1.4rem' }}>{name}</Code>
                        <span style={{ fontSize: '1.25rem', color: blueGray.m500 }}>
                          {description}
                        </span>
                      </div>
                      <DemoRow style={{ marginBottom: '0.8rem' }}>
                        {opts.map((v) => (
                          <DemoButton
                            key={v}
                            $bg={active === v ? teal.m600 : teal.m300}
                            onClick={() => assign(name, v)}
                            style={{ fontSize: '1.25rem', padding: '0.7rem 1.6rem' }}
                          >
                            {v}
                          </DemoButton>
                        ))}
                        <DemoButton
                          $bg={blueGray.m400}
                          onClick={() => unassign(name)}
                          style={{ fontSize: '1.25rem', padding: '0.7rem 1.4rem' }}
                        >
                          unassign
                        </DemoButton>
                      </DemoRow>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span
                          style={{
                            fontSize: '1.2rem',
                            color: blueGray.m400,
                            fontFamily: 'monospace',
                          }}
                        >
                          getVariant(&apos;{name}&apos;) →
                        </span>
                        <Badge
                          $bg={active ? teal.m100 : blueGray.m100}
                          $color={active ? teal.m800 : blueGray.m500}
                        >
                          {active ? `"${active}"` : 'null'}
                        </Badge>
                      </div>
                      {preview && (
                        <div
                          style={{
                            marginTop: '0.8rem',
                            padding: '0.9rem 1.2rem',
                            borderRadius: 8,
                            background: preview.bg,
                            color: preview.color,
                            fontSize: '1.3rem',
                            fontWeight: 500,
                          }}
                        >
                          {preview.label}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <OutputBox
                $bg={blueGray.m50}
                $border={blueGray.m200}
                $color={blueGray.m700}
                style={{ marginTop: '1.6rem' }}
              >
                localStorage[&quot;{VARIANTS_KEY}&quot;] = {JSON.stringify(variants, null, 2)}
              </OutputBox>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Usage</SectionLabel>
              <Pre>{`import getVariant from 'meticulous-ui/utils/getVariant';

// render a different UI per variant
const variant = getVariant('checkout_flow');

if (variant === 'one_page')   return <OnePageCheckout />;
if (variant === 'multi_step') return <MultiStepCheckout />;
return <DefaultCheckout />;   // control or null

// custom storage key (set by your A/B SDK)
getVariant('hero_banner', 'optimizely_variants');`}</Pre>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Source</SectionLabel>
              <Pre>{`const getVariant = (testName, key = 'ab_variants') => {
  try {
    const variants = JSON.parse(localStorage.getItem(key) ?? '{}');
    return variants[testName] ?? null;
  } catch {
    return null;
  }
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// Story config
// ═════════════════════════════════════════════════════════════════════════════

export default {
  title: 'Utilities/Feature Flag Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const IsFeatureEnabled = () => <IsFeatureEnabledPage />;
IsFeatureEnabled.storyName = 'isFeatureEnabled';

export const GetVariant = () => <GetVariantPage />;
GetVariant.storyName = 'getVariant';
