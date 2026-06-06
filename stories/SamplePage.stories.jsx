import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

// ─── Components ───────────────────────────────────────────────────────────────
import RootComponent from '../src/components/RootComponent/RootComponent';
import Button from '../src/components/Button/Button';
import { H1, H2, H3, H4, H5, H6 } from '../src/components/Typography/Headings';
import P from '../src/components/Typography/P';
import Carousel from '../src/components/Carousel/Carousel';
import Modal from '../src/components/Modal/Modal';
import Switch from '../src/components/Switch/Switch';
import Dropdown from '../src/components/Dropdown/Dropdown';
import Toast, { ToastContainer } from '../src/components/Toast/Toast';
import Timer from '../src/components/Timer/Timer';
import Shimmer from '../src/components/Shimmer/Shimmer';
import Pagination from '../src/components/Pagination/Pagination';
import Input from '../src/components/Input/Input/Input';
import Link from '../src/components/Link/Link';
import Spinner from '../src/components/Spinner/Spinner';
import { SUCCESS, INFO, WARNING, ERROR } from '../src/components/Toast/constants';
import Accordion from '../src/components/Accordion/Accordion';

// ─── Icons ────────────────────────────────────────────────────────────────────
import Check from '../src/components/Icons/Check';
import StarFilled from '../src/components/Icons/StarFilled';
import StarOutline from '../src/components/Icons/StarOutline';
import ShieldCheckFilled from '../src/components/Icons/ShieldCheckFilled';
import BellFilled from '../src/components/Icons/BellFilled';
import WalletFilled from '../src/components/Icons/WalletFilled';
import BoxFilled from '../src/components/Icons/BoxFilled';
import ThumbsUpFilled from '../src/components/Icons/ThumbsUpFilled';
import ChevronRight from '../src/components/Icons/ChevronRight';
import ArrowRight from '../src/components/Icons/ArrowRight';
import FilterList from '../src/components/Icons/FilterList';
import Download from '../src/components/Icons/Download';
import HeartFilled from '../src/components/Icons/HeartFilled';
import EmailFilled from '../src/components/Icons/EmailFilled';
import HomeFilled from '../src/components/Icons/HomeFilled';
import MoneyBriefcaseFilled from '../src/components/Icons/MoneyBriefcaseFilled';
import PaymentCardFilled from '../src/components/Icons/PaymentCardFilled';
import InfoCircleFilled from '../src/components/Icons/InfoCircleFilled';
import LockKeyhole from '../src/components/Icons/LockKeyhole';

// ─── Hooks ────────────────────────────────────────────────────────────────────
import useToggle from '../src/hooks/useToggle';
import useOnlineStatus from '../src/hooks/useOnlineStatus';
import useLocalStorage from '../src/hooks/useLocalStorage';
import useInterval from '../src/hooks/useInterval';
import useCopyToClipboard from '../src/hooks/useCopyToClipboard';
import useWindowSize from '../src/hooks/useWindowSize';
import useTimeout from '../src/hooks/useTimeout';

// ─── Utils ────────────────────────────────────────────────────────────────────
import formatCompactNumber from '../src/utils/formatCompactNumber';
import formatCurrency from '../src/utils/formatCurrency';
import timeAgo from '../src/utils/timeAgo';
import truncate from '../src/utils/truncate';
import getGreetingByTime from '../src/utils/getGreetingByTime';
import capitalize from '../src/utils/capitalize';

// ─── Colors ───────────────────────────────────────────────────────────────────
import indigo from '../src/colors/indigo';
import cyan from '../src/colors/cyan';
import blueGray from '../src/colors/blueGray';
import white from '../src/colors/white';
import green from '../src/colors/green';
import amber from '../src/colors/amber';
import red from '../src/colors/red';
import purple from '../src/colors/purple';
import teal from '../src/colors/teal';
import violet from '../src/colors/violet';
import grey from '../src/colors/grey';
import lime from '../src/colors/lime';

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(2rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;

const shimmerSlide = keyframes`
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

// ─── Theme helpers ────────────────────────────────────────────────────────────
const dk =
  (dark, light) =>
  ({ $dark }) =>
    $dark ? dark : light;

// ─── Layout primitives ────────────────────────────────────────────────────────
const Page = styled.div`
  min-height: 100vh;
  background: ${dk(blueGray.m900, blueGray.m50)};
  color: ${dk(white, blueGray.m900)};
  font-family:
    'Segoe UI',
    system-ui,
    -apple-system,
    sans-serif;
  transition:
    background 0.3s ease,
    color 0.3s ease;
`;

const Section = styled.section`
  padding: ${({ $compact }) => ($compact ? '4rem 3.2rem' : '8rem 3.2rem')};
  max-width: 120rem;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: ${({ $align }) => $align || 'center'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  gap: ${({ $gap }) => $gap || '1.6rem'};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  flex-direction: ${({ $col }) => ($col ? 'column' : 'row')};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols || 'repeat(auto-fit, minmax(28rem, 1fr))'};
  gap: ${({ $gap }) => $gap || '2.4rem'};
`;

const Card = styled.div`
  background: ${dk(blueGray.m800, white)};
  border-radius: 1.6rem;
  border: 1px solid ${dk(blueGray.m700, blueGray.m100)};
  padding: ${({ $p }) => $p || '2.8rem'};
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease,
    background 0.3s ease;

  ${({ $hoverable }) =>
    $hoverable &&
    css`
      cursor: pointer;
      &:hover {
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        transform: translateY(-2px);
      }
    `}
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.2rem;
  border-radius: 10rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg || indigo.m100};
  color: ${({ $color }) => $color || indigo.m700};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${dk(blueGray.m700, blueGray.m100)};
  margin: 0;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, ${indigo.m500}, ${cyan.m400});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const IconBox = styled.div`
  width: ${({ $size }) => $size || '4.8rem'};
  height: ${({ $size }) => $size || '4.8rem'};
  border-radius: 1.2rem;
  background: ${({ $bg }) => $bg || indigo.m100};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $color }) => $color || indigo.m600};
  font-size: 2.2rem;
`;

const OnlineDot = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: ${({ $online }) => ($online ? green.m500 : red.m400)};
  animation: ${({ $online }) =>
    $online
      ? css`
          ${pulse} 2s ease-in-out infinite
        `
      : 'none'};
  display: inline-block;
`;

const PromoBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  background: ${dk(blueGray.m800, white)};
  border: 1px dashed ${dk(indigo.m400, indigo.m300)};
  border-radius: 1rem;
  padding: 0.8rem 1.6rem;
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${dk(indigo.m300, indigo.m700)};
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${indigo.m500};
  }
`;

const StatCard = styled.div`
  background: ${dk(blueGray.m800, white)};
  border-radius: 1.6rem;
  border: 1px solid ${dk(blueGray.m700, blueGray.m100)};
  padding: 2.4rem;
  text-align: center;
  flex: 1;
  min-width: 16rem;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ $delay }) => $delay || '0s'};
`;

const PricingCard = styled(Card)`
  position: relative;
  ${({ $featured, $dark }) =>
    $featured &&
    css`
      border: 2px solid ${indigo.m500};
      box-shadow: 0 0 0 4px ${$dark ? indigo.m900 : indigo.m50};
    `}
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -1.4rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${indigo.m500};
  color: ${white};
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.4rem 1.6rem;
  border-radius: 10rem;
  white-space: nowrap;
`;

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ $dark }) => ($dark ? `${blueGray.m900}f0` : `${white}f0`)};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${dk(blueGray.m700, blueGray.m100)};
  padding: 0 3.2rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: background 0.3s ease;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 0.8rem;
  font-size: 1.45rem;
  font-weight: 500;
  cursor: pointer;
  color: ${dk(blueGray.m300, blueGray.m600)};
  transition:
    background 0.15s,
    color 0.15s;
  &:hover {
    background: ${dk(blueGray.m800, blueGray.m100)};
    color: ${dk(white, blueGray.m900)};
  }
`;

const HeroSection = styled.div`
  padding: 10rem 3.2rem 8rem;
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeUp} 0.6s ease both;
`;

const RotatingText = styled.span`
  display: inline-block;
  color: ${cyan.m500};
  transition: opacity 0.4s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

const ChangelogItem = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${dk(blueGray.m700, blueGray.m100)};
  align-items: flex-start;
  animation: ${fadeUp} 0.4s ease both;
`;

const VersionTag = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 0.6rem;
  background: ${({ $type }) =>
    $type === 'feature' ? green.m100 : $type === 'fix' ? amber.m100 : indigo.m100};
  color: ${({ $type }) =>
    $type === 'feature' ? green.m700 : $type === 'fix' ? amber.m700 : indigo.m700};
  flex-shrink: 0;
  margin-top: 0.4rem;
  width: 9rem;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
`;

const TestimonialCard = styled.div`
  background: ${dk(blueGray.m800, white)};
  border: 1px solid ${dk(blueGray.m700, blueGray.m100)};
  border-radius: 1.6rem;
  padding: 3.2rem;
  height: 100%;
`;

const Avatar = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background: ${({ $bg }) => $bg || indigo.m500};
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const NewsletterBox = styled.div`
  background: linear-gradient(135deg, ${indigo.m600}, ${cyan.m600});
  border-radius: 2.4rem;
  padding: 6rem 4rem;
  text-align: center;
  color: ${white};
`;

const EmailRow = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.4rem;
`;

const EmailInput = styled.input`
  flex: 1;
  min-width: 24rem;
  max-width: 36rem;
  padding: 1.2rem 1.8rem;
  border-radius: 1rem;
  border: none;
  font-size: 1.6rem;
  background: rgba(255, 255, 255, 0.15);
  color: ${white};
  outline: none;
  backdrop-filter: blur(4px);
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Footer = styled.footer`
  background: ${dk(blueGray.m900, blueGray.m900)};
  color: ${blueGray.m400};
  padding: 6rem 3.2rem 3.2rem;
`;

const FooterGrid = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FooterLink = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 0.4rem 0;
  color: ${blueGray.m400};
  font-size: 1.4rem;
  cursor: pointer;
  text-align: left;
  transition: color 0.15s;
  &:hover {
    color: ${white};
  }
`;

/* Forces the Input component's inner Wrapper (width: fit-content) to fill its parent.
   !important is needed because styled-components insertion order can cause the
   component's own width: fit-content rule to appear later in the stylesheet. */
const FullWidthInput = styled.div`
  width: 100%;
  & > div {
    width: 100% !important;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const ROTATING_WORDS = ['faster', 'smarter', 'together', 'reliably', 'at scale'];

const FEATURES = [
  {
    icon: <ShieldCheckFilled />,
    color: indigo.m100,
    iconColor: indigo.m600,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified. End-to-end encryption, SSO, and fine-grained RBAC out of the box.',
  },
  {
    icon: <BellFilled />,
    color: cyan.m100,
    iconColor: cyan.m700,
    title: 'Real-time Alerts',
    desc: 'Instant anomaly detection with configurable thresholds and multi-channel notifications.',
  },
  {
    icon: <BoxFilled />,
    color: purple.m100,
    iconColor: purple.m600,
    title: 'Data Warehouse',
    desc: 'Petabyte-scale storage with sub-second query performance across 50+ data connectors.',
  },
  {
    icon: <FilterList />,
    color: green.m100,
    iconColor: green.m700,
    title: 'Smart Filtering',
    desc: 'AI-powered data pipelines that auto-clean, deduplicate, and enrich your raw data streams.',
  },
  {
    icon: <Download />,
    color: amber.m100,
    iconColor: amber.m700,
    title: 'One-click Exports',
    desc: 'Export to CSV, Parquet, JSON, or push directly to Snowflake, BigQuery, and Redshift.',
  },
  {
    icon: <MoneyBriefcaseFilled />,
    color: teal.m100,
    iconColor: teal.m700,
    title: 'Revenue Analytics',
    desc: 'MRR, churn, LTV and cohort analysis. Built-in Stripe and Chargebee integrations.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Head of Data, Amplitude',
    rating: 5,
    avatar: 'SC',
    bg: indigo.m500,
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    text: 'Axion completely transformed how our team handles analytics. The real-time dashboards and sub-second query performance are unlike anything we have used before.',
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO, Stripe',
    rating: 5,
    avatar: 'MR',
    bg: teal.m500,
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    text: 'We evaluated eight platforms before choosing Axion. The enterprise security posture and the quality of the API were the deciding factors. Our team shipped 3x faster.',
  },
  {
    name: 'Priya Nair',
    role: 'VP Engineering, Notion',
    rating: 5,
    avatar: 'PN',
    bg: violet.m500,
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    text: 'Migrating 4 years of data in a weekend sounds impossible. Axion made it trivial. The import wizard and validation tools are incredibly well thought out.',
  },
  {
    name: 'Alex Kim',
    role: 'Lead Analyst, Figma',
    rating: 4,
    avatar: 'AK',
    bg: green.m600,
    date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
    text: 'The cohort analysis and retention charts alone justify the cost. We cancelled two other subscriptions the week we went live.',
  },
];

const CHANGELOG = [
  {
    version: 'v3.10',
    type: 'feature',
    title: 'QR code export for any dataset',
    desc: 'Export any query result as a scannable QR code for quick sharing on mobile.',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    version: 'v3.9',
    type: 'feature',
    title: 'AI-powered anomaly detection',
    desc: 'New ML-based alerting that learns your data patterns and surfaces true anomalies.',
    date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
  },
  {
    version: 'v3.8',
    type: 'fix',
    title: 'Pagination performance at 1M+ rows',
    desc: 'Fixed a cursor leak that caused slowdowns when paginating very large result sets.',
    date: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000),
  },
  {
    version: 'v3.7',
    type: 'feature',
    title: 'Snowflake native connector',
    desc: 'Zero-copy integration with Snowflake — no ETL pipeline required.',
    date: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000),
  },
  {
    version: 'v3.6',
    type: 'improvement',
    title: 'Dark mode across all dashboards',
    desc: 'System-preference aware dark mode, persisted per user account.',
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  },
  {
    version: 'v3.5',
    type: 'fix',
    title: 'Timezone handling in time-series charts',
    desc: 'Corrected DST edge cases when rendering data across timezone boundaries.',
    date: new Date(Date.now() - 37 * 24 * 60 * 60 * 1000),
  },
];

const PLANS = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    color: 'blueGray',
    features: [
      '5 users',
      '10 GB storage',
      'Community support',
      '30-day data retention',
      '5 connectors',
    ],
    cta: 'Get started free',
  },
  {
    name: 'Growth',
    monthly: 79,
    annual: 59,
    color: 'indigo',
    featured: true,
    features: [
      '25 users',
      '500 GB storage',
      'Priority support',
      '1-year data retention',
      'Unlimited connectors',
      'Custom alerts',
      'API access',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    monthly: 299,
    annual: 229,
    color: 'violet',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'Dedicated CSM',
      'Unlimited retention',
      'SSO + SAML',
      'SLA guarantee',
      'Custom contracts',
    ],
    cta: 'Contact sales',
  },
];

const FAQ_ITEMS = [
  {
    id: 'free-trial',
    title: 'Is there a free trial?',
    icon: <InfoCircleFilled />,
    iconColor: white,
    iconBackground: indigo.m500,
    content:
      'Yes. Every plan starts with a 14-day free trial — no credit card required. You get full access to all features on the Growth plan during the trial period.',
  },
  {
    id: 'billing',
    title: 'How does billing work?',
    icon: <PaymentCardFilled />,
    iconColor: white,
    iconBackground: teal.m600,
    content:
      'You are billed monthly or annually depending on the cycle you choose at signup. Annual billing gives you up to 26% off. Invoices are sent automatically on renewal and are available in your billing dashboard.',
  },
  {
    id: 'security',
    title: 'How secure is my data?',
    icon: <ShieldCheckFilled />,
    iconColor: white,
    iconBackground: green.m600,
    content:
      'Axion is SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest with AES-256 and in transit over TLS 1.3. We support SSO, SAML, and fine-grained role-based access control on the Enterprise plan.',
  },
  {
    id: 'connectors',
    title: 'Which data connectors are supported?',
    icon: <BoxFilled />,
    iconColor: white,
    iconBackground: purple.m500,
    content:
      'Axion ships with 50+ pre-built connectors including Snowflake, BigQuery, Redshift, PostgreSQL, MySQL, Stripe, Salesforce, and more. Custom connectors can be built using our open Connector SDK.',
  },
  {
    id: 'alerts',
    title: 'Can I get notified when something looks wrong?',
    icon: <BellFilled />,
    iconColor: white,
    iconBackground: amber.m600,
    content:
      'Yes. Axion includes ML-based anomaly detection that learns your data patterns over time. Alerts can be routed to Slack, PagerDuty, email, or any webhook. You can configure thresholds per metric or let the AI decide.',
  },
  {
    id: 'cancel',
    title: 'Can I cancel at any time?',
    icon: <HomeFilled />,
    iconColor: white,
    iconBackground: cyan.m600,
    content:
      'Absolutely. There are no lock-in contracts on Starter or Growth plans. You can cancel from your account settings at any time and your data remains exportable for 30 days after cancellation.',
  },
];

const LANG_OPTIONS = [
  { value: 'en', label: '🇺🇸 English' },
  { value: 'hi', label: '🇮🇳 Hindi' },
  { value: 'fr', label: '🇫🇷 French' },
  { value: 'de', label: '🇩🇪 German' },
  { value: 'ja', label: '🇯🇵 Japanese' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StarRating = ({ rating, max = 5 }) => (
  <Flex $gap='0.4rem'>
    {Array.from({ length: max }, (_, i) =>
      i < rating ? (
        <StarFilled key={i} style={{ color: amber.m400, fontSize: '1.6rem' }} />
      ) : (
        <StarOutline key={i} style={{ color: blueGray.m300, fontSize: '1.6rem' }} />
      )
    )}
  </Flex>
);

const FeatureCheck = ({ $dark }) => (
  <span style={{ color: green.m500, fontSize: '1.6rem', flexShrink: 0 }}>
    <Check />
  </span>
);

// ─── Main Landing Page ────────────────────────────────────────────────────────
const LandingPage = () => {
  // ── Persistence & global state ──
  const [isDark, setIsDark] = useLocalStorage('axion-dark', false);
  const isOnline = useOnlineStatus();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const isMobile = windowWidth < 768;

  // ── Live navbar clock (inline, no Timer widget) ──
  const [navTime, setNavTime] = useState(() =>
    new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  );
  useInterval(() => {
    setNavTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
  }, 10000);

  // ── Hero rotating text ──
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  useInterval(() => {
    setWordVisible(false);
    setTimeout(() => {
      setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
      setWordVisible(true);
    }, 400);
  }, 2800);

  // ── Promo code copy ──
  const [copied, copyToClipboard] = useCopyToClipboard();

  // ── Features shimmer ──
  const [featuresLoaded, setFeaturesLoaded] = useState(false);
  useTimeout(() => setFeaturesLoaded(true), 1400);

  // ── Toasts ──
  const [toasts, setToasts] = useState([]);
  const pushToast = (type, title, subtitle) => {
    const id = `${type}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [
      ...prev,
      { id, type, title, subtitle, onExpire: () => setToasts((p) => p.filter((t) => t.id !== id)) },
    ]);
  };

  // ── Modals ──
  const [demoModalOpen, toggleDemoModal] = useToggle(false);
  const [notifModalOpen, toggleNotifModal] = useToggle(false);

  // ── Dropdown ──
  const [language, setLanguage] = useState(LANG_OPTIONS[0]?.value);

  // ── Pricing ──
  const [isAnnual, toggleAnnual] = useToggle(false);
  const [currency, setCurrency] = useState('USD');

  // ── Demo form state ──
  const [demoForm, setDemoForm] = useState({ name: '', company: '', role: '' });
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const roleOptions = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'product', label: 'Product' },
    { value: 'data', label: 'Data & Analytics' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'executive', label: 'Executive' },
  ];

  // ── Changelog pagination ──
  const [changelogPage, setChangelogPage] = useState(1);
  const PAGE_SIZE = 3;
  const changelogSlice = CHANGELOG.slice(
    (changelogPage - 1) * PAGE_SIZE,
    changelogPage * PAGE_SIZE
  );

  // ── Newsletter ──
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = () => {
    if (!email.includes('@')) {
      pushToast(ERROR, 'Invalid email', 'Please enter a valid email address.');
      return;
    }
    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      setEmail('');
      pushToast(SUCCESS, 'Subscribed!', "You'll get the next release in your inbox.");
    }, 1200);
  };

  const handleDemoSubmit = () => {
    if (!demoForm.name || !demoForm.company) {
      pushToast(WARNING, 'Missing fields', 'Please fill in your name and company.');
      return;
    }
    setDemoSubmitting(true);
    setTimeout(() => {
      setDemoSubmitting(false);
      toggleDemoModal(false);
      pushToast(SUCCESS, 'Demo booked!', `We'll reach out to ${demoForm.name} shortly.`);
      setDemoForm({ name: '', company: '', role: '' });
    }, 1500);
  };

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <RootComponent>
      <Page $dark={isDark}>
        {/* ── Toast stack ── */}
        <ToastContainer toasts={toasts} />

        {/* ── Demo request modal ── */}
        {/* onWheel stop-propagation prevents the Storybook canvas from scrolling while
          the modal (or the dropdown inside it) captures wheel events */}
        <div onWheel={(e) => e.stopPropagation()}>
          <Modal
            isOpen={demoModalOpen}
            onClose={() => toggleDemoModal(false)}
            title='Book a live demo'
            width='52rem'
            footer={
              <Flex $gap='1.2rem' $justify='flex-end'>
                <Button theme='blueGray' size='small' onClick={() => toggleDemoModal(false)}>
                  Cancel
                </Button>
                <Button
                  theme='indigo'
                  size='small'
                  isLoading={demoSubmitting}
                  onClick={handleDemoSubmit}
                >
                  {demoSubmitting ? 'Booking…' : 'Confirm'}
                </Button>
              </Flex>
            }
          >
            <Flex $col $gap='1.6rem' $align='stretch' style={{ padding: '0.4rem 0.8rem' }}>
              <FullWidthInput>
                <Input
                  label='Your name *'
                  name='demo-name'
                  value={demoForm.name}
                  onChange={(e) => setDemoForm((f) => ({ ...f, name: e.target.value }))}
                  color='indigo'
                  outerBackground={white}
                />
              </FullWidthInput>
              <FullWidthInput>
                <Input
                  label='Company *'
                  name='demo-company'
                  value={demoForm.company}
                  onChange={(e) => setDemoForm((f) => ({ ...f, company: e.target.value }))}
                  color='indigo'
                  outerBackground={white}
                />
              </FullWidthInput>
              <div style={{ width: '100%' }}>
                <label
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: blueGray.m600,
                    display: 'block',
                    marginBottom: '0.6rem',
                  }}
                >
                  Your role
                </label>
                <Dropdown
                  options={roleOptions}
                  value={demoForm.role}
                  onChange={(v) => setDemoForm((f) => ({ ...f, role: v }))}
                  placeholder='Select your team'
                  width='23.6rem'
                  theme='indigo'
                  menuHeight='16rem'
                />
              </div>
              <div
                style={{
                  width: '100%',
                  background: indigo.m50,
                  borderRadius: '0.8rem',
                  padding: '1.2rem 1.6rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  boxSizing: 'border-box',
                }}
              >
                <span style={{ color: indigo.m500, fontSize: '1.8rem', marginTop: '0.1rem' }}>
                  <InfoCircleFilled />
                </span>
                <P style={{ fontSize: '1.3rem', color: blueGray.m600, margin: 0 }}>
                  A 30-minute personalised walkthrough with one of our engineers. No sales pressure.
                </P>
              </div>
            </Flex>
          </Modal>
        </div>

        {/* ══════════ NAVBAR ══════════ */}
        <NavBar $dark={isDark}>
          <Flex $gap='1rem'>
            <span
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: isDark ? white : blueGray.m900,
                letterSpacing: '-0.05rem',
              }}
            >
              ⬡ <GradientText>Axion</GradientText>
            </span>
            <Badge
              $bg={isDark ? indigo.m900 : indigo.m50}
              $color={isDark ? indigo.m300 : indigo.m600}
            >
              Beta
            </Badge>
          </Flex>

          <NavLinks $dark={isDark}>
            {['Product', 'Pricing', 'Changelog', 'FAQ', 'Docs'].map((item) => (
              <NavLink key={item} $dark={isDark}>
                {item}
              </NavLink>
            ))}
          </NavLinks>

          <Flex $gap='1.2rem' $align='center'>
            {/* Inline clock + online status */}
            {!isMobile && (
              <Flex
                $gap='0.6rem'
                $align='center'
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '0.8rem',
                  background: isDark ? blueGray.m800 : blueGray.m100,
                }}
              >
                <span
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    fontFamily: 'monospace',
                    color: isDark ? blueGray.m200 : blueGray.m700,
                  }}
                >
                  {navTime}
                </span>
                <span
                  style={{
                    width: '1px',
                    height: '1.4rem',
                    background: isDark ? blueGray.m600 : blueGray.m300,
                  }}
                />
                <OnlineDot $online={isOnline} />
                <span style={{ fontSize: '1.2rem', color: isDark ? blueGray.m400 : blueGray.m500 }}>
                  {isOnline ? 'Live' : 'Offline'}
                </span>
              </Flex>
            )}

            {/* Language */}
            {!isMobile && (
              <Dropdown
                options={LANG_OPTIONS}
                value={language}
                onChange={setLanguage}
                width='14rem'
                theme='blueGray'
              />
            )}

            {/* Divider */}
            {!isMobile && (
              <span
                style={{
                  width: '1px',
                  height: '2rem',
                  background: isDark ? blueGray.m700 : blueGray.m200,
                  flexShrink: 0,
                }}
              />
            )}

            {/* Dark mode */}
            <Switch
              checked={isDark}
              onChange={() => setIsDark(!isDark)}
              onLabel='Dark'
              offLabel='Light'
              onColor={indigo.m600}
            />

            <Button theme='indigo' size='small' width={13} onClick={() => toggleDemoModal(true)}>
              Book demo
            </Button>
          </Flex>
        </NavBar>

        {/* ══════════ HERO ══════════ */}
        <HeroSection>
          <Badge
            $bg={isDark ? cyan.m900 : cyan.m50}
            $color={isDark ? cyan.m300 : cyan.m700}
            style={{ marginBottom: '2.4rem' }}
          >
            <span style={{ fontSize: '1.4rem' }}>✦</span>
            {getGreetingByTime()} — built for modern data teams
          </Badge>

          <H1
            style={{
              fontSize: isMobile ? '3.6rem' : '6.4rem',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.05rem',
              color: isDark ? white : blueGray.m900,
              marginBottom: '1.2rem',
            }}
          >
            Analyse everything,
            <br />
            <RotatingText $visible={wordVisible}>{ROTATING_WORDS[wordIdx]}</RotatingText>
          </H1>

          <P
            style={{
              fontSize: '1.9rem',
              color: isDark ? blueGray.m300 : blueGray.m600,
              maxWidth: '56rem',
              margin: '0 auto 3.6rem',
              lineHeight: 1.7,
            }}
          >
            Axion is the analytics platform that scales from startup to enterprise without changing
            a single query. Real-time, collaborative, and ruthlessly fast.
          </P>

          <Flex $justify='center' $wrap $gap='1.6rem' style={{ marginBottom: '3.2rem' }}>
            <Button
              theme='indigo'
              size='large'
              width={22}
              onClick={() => {
                pushToast(SUCCESS, 'Welcome aboard!', 'Check your inbox for the activation link.');
              }}
            >
              Start for free
            </Button>
            <Button theme='blueGray' size='large' width={22} onClick={() => toggleDemoModal(true)}>
              See it live →
            </Button>
          </Flex>

          {/* Promo code */}
          <Flex $justify='center' $col $gap='0.8rem'>
            <span style={{ fontSize: '1.3rem', color: isDark ? blueGray.m400 : blueGray.m500 }}>
              Use promo code at checkout
            </span>
            <PromoBox
              $dark={isDark}
              onClick={() => {
                copyToClipboard('AXION2026');
                pushToast(INFO, 'Code copied!', '"AXION2026" is on your clipboard.');
              }}
            >
              AXION2026
              <span
                style={{
                  fontSize: '1.2rem',
                  color: copied ? green.m500 : isDark ? blueGray.m500 : blueGray.m400,
                }}
              >
                {copied ? '✓ copied' : 'click to copy'}
              </span>
            </PromoBox>
          </Flex>

          <P
            style={{
              fontSize: '1.25rem',
              color: isDark ? blueGray.m500 : blueGray.m400,
              marginTop: '2.4rem',
            }}
          >
            Window: {windowWidth} × {windowHeight}px · No credit card required · Cancel anytime
          </P>
        </HeroSection>

        <Divider $dark={isDark} />

        {/* ══════════ LIVE METRICS ══════════ */}
        <Section $compact>
          <Flex $wrap $justify='space-between' $gap='1.6rem'>
            {[
              {
                label: 'Active users',
                value: 148200,
                suffix: '',
                icon: <ThumbsUpFilled />,
                color: indigo.m500,
                delay: '0s',
              },
              {
                label: 'Queries / day',
                value: 9400000,
                suffix: '',
                icon: <FilterList />,
                color: cyan.m600,
                delay: '0.1s',
              },
              {
                label: 'Uptime SLA',
                value: 99.99,
                suffix: '%',
                icon: <ShieldCheckFilled />,
                color: green.m600,
                delay: '0.2s',
              },
              {
                label: 'Revenue tracked',
                value: 2800000000,
                suffix: '',
                icon: <MoneyBriefcaseFilled />,
                color: amber.m600,
                delay: '0.3s',
              },
            ].map(({ label, value, suffix, icon, color, delay }) => (
              <StatCard key={label} $dark={isDark} $delay={delay}>
                <span style={{ color, fontSize: '2.4rem' }}>{icon}</span>
                <div
                  style={{
                    fontSize: '3.2rem',
                    fontWeight: 900,
                    color: isDark ? white : blueGray.m900,
                    lineHeight: 1.1,
                    margin: '0.8rem 0 0.4rem',
                  }}
                >
                  {formatCompactNumber(value)}
                  {suffix}
                </div>
                <span style={{ fontSize: '1.3rem', color: isDark ? blueGray.m400 : blueGray.m500 }}>
                  {label}
                </span>
              </StatCard>
            ))}
          </Flex>
        </Section>

        <Divider $dark={isDark} />

        {/* ══════════ FEATURES ══════════ */}
        <Section>
          <div style={{ textAlign: 'center', marginBottom: '5.6rem' }}>
            <Badge
              $bg={isDark ? green.m900 : green.m50}
              $color={isDark ? green.m300 : green.m700}
              style={{ marginBottom: '1.6rem' }}
            >
              Everything you need
            </Badge>
            <H2
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: isDark ? white : blueGray.m900,
                letterSpacing: '-0.03rem',
                marginBottom: '1.2rem',
              }}
            >
              Built for scale, designed for humans
            </H2>
            <P
              style={{
                fontSize: '1.7rem',
                color: isDark ? blueGray.m300 : blueGray.m600,
                maxWidth: '52rem',
                margin: '0 auto',
              }}
            >
              Six years of engineering condensed into one platform. No compromises.
            </P>
          </div>

          <Grid>
            {FEATURES.map(({ icon, color, iconColor, title, desc }, i) =>
              featuresLoaded ? (
                <Card
                  key={title}
                  $dark={isDark}
                  $hoverable
                  style={{
                    animation: `${fadeUp.name} 0.4s ease both`,
                    animationDelay: `${i * 0.07}s`,
                  }}
                >
                  <IconBox
                    $bg={isDark ? blueGray.m700 : color}
                    $color={isDark ? cyan.m300 : iconColor}
                    $size='5.2rem'
                    style={{ marginBottom: '2rem' }}
                  >
                    {icon}
                  </IconBox>
                  <H4
                    style={{
                      color: isDark ? white : blueGray.m900,
                      marginBottom: '0.8rem',
                      fontSize: '1.8rem',
                    }}
                  >
                    {title}
                  </H4>
                  <P
                    style={{
                      fontSize: '1.45rem',
                      color: isDark ? blueGray.m400 : blueGray.m600,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </P>
                </Card>
              ) : (
                <Card key={i} $dark={isDark}>
                  <Shimmer width='5.2rem' height='5.2rem' borderRadius='1.2rem' />
                  <div style={{ marginTop: '2rem' }}>
                    <Shimmer width='60%' height='2rem' borderRadius='0.4rem' />
                    <div style={{ marginTop: '1rem' }}>
                      <Shimmer width='100%' height='1.4rem' borderRadius='0.4rem' />
                    </div>
                    <div style={{ marginTop: '0.6rem' }}>
                      <Shimmer width='80%' height='1.4rem' borderRadius='0.4rem' />
                    </div>
                  </div>
                </Card>
              )
            )}
          </Grid>
        </Section>

        <Divider $dark={isDark} />

        {/* ══════════ TESTIMONIALS ══════════ */}
        <Section>
          <div style={{ textAlign: 'center', marginBottom: '5.6rem' }}>
            <Badge
              $bg={isDark ? amber.m900 : amber.m50}
              $color={isDark ? amber.m300 : amber.m700}
              style={{ marginBottom: '1.6rem' }}
            >
              <HeartFilled style={{ fontSize: '1.2rem' }} /> Loved by data teams
            </Badge>
            <H2
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: isDark ? white : blueGray.m900,
                letterSpacing: '-0.03rem',
                marginBottom: '1.2rem',
              }}
            >
              {formatCompactNumber(4800)}+ teams trust Axion
            </H2>
            <P
              style={{
                fontSize: '1.7rem',
                color: isDark ? blueGray.m300 : blueGray.m600,
                maxWidth: '48rem',
                margin: '0 auto',
              }}
            >
              From seed-stage startups to Fortune 500 enterprises.
            </P>
          </div>

          <Carousel
            data={TESTIMONIALS}
            visibleSlides={isMobile ? 1 : 2}
            hasArrow
            loop
            dragToSlide
            showProgress
            autoSlide
            autoSlideSec={5}
            renderCarousel={(item) => (
              <div style={{ padding: '0.8rem', height: '100%', boxSizing: 'border-box' }}>
                <TestimonialCard $dark={isDark}>
                  <Flex $justify='space-between' style={{ marginBottom: '1.6rem' }}>
                    <StarRating rating={item.rating} />
                    <span style={{ fontSize: '2rem', color: amber.m400 }}>
                      <ThumbsUpFilled />
                    </span>
                  </Flex>
                  <P
                    style={{
                      fontSize: '1.55rem',
                      color: isDark ? blueGray.m200 : blueGray.m700,
                      lineHeight: 1.8,
                      marginBottom: '2.4rem',
                    }}
                  >
                    "{truncate(item.text, 160)}"
                  </P>
                  <Flex $gap='1.2rem'>
                    <Avatar $bg={item.bg}>{item.avatar}</Avatar>
                    <div>
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: isDark ? white : blueGray.m900,
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        style={{
                          fontSize: '1.25rem',
                          color: isDark ? blueGray.m400 : blueGray.m500,
                        }}
                      >
                        {item.role}
                      </div>
                      <div
                        style={{
                          fontSize: '1.1rem',
                          color: isDark ? blueGray.m500 : blueGray.m400,
                          marginTop: '0.2rem',
                        }}
                      >
                        {timeAgo(item.date)}
                      </div>
                    </div>
                  </Flex>
                </TestimonialCard>
              </div>
            )}
          />
        </Section>

        <Divider $dark={isDark} />

        {/* ══════════ PRICING ══════════ */}
        <Section>
          <div style={{ textAlign: 'center', marginBottom: '5.6rem' }}>
            <Badge
              $bg={isDark ? violet.m900 : violet.m50}
              $color={isDark ? violet.m300 : violet.m700}
              style={{ marginBottom: '1.6rem' }}
            >
              <WalletFilled style={{ fontSize: '1.2rem' }} /> Simple pricing
            </Badge>
            <H2
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: isDark ? white : blueGray.m900,
                letterSpacing: '-0.03rem',
                marginBottom: '2rem',
              }}
            >
              Pay for what you use
            </H2>
            <Flex $col $align='center' $gap='1rem'>
              <Switch
                checked={isAnnual}
                onChange={toggleAnnual}
                onLabel='Annual'
                offLabel='Monthly'
                onColor={indigo.m600}
              />
              <span
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: green.m600,
                  visibility: isAnnual ? 'visible' : 'hidden',
                  minHeight: '1.8rem',
                }}
              >
                ✓ Save up to 26% with annual billing
              </span>
            </Flex>
          </div>

          <Grid $cols='repeat(auto-fit, minmax(30rem, 1fr))'>
            {PLANS.map(({ name, monthly, annual, color, featured, features, cta }) => {
              const price = isAnnual ? annual : monthly;
              return (
                <PricingCard key={name} $dark={isDark} $featured={featured} $p='3.2rem'>
                  {featured && <FeaturedBadge>Most popular</FeaturedBadge>}
                  <H4 style={{ color: isDark ? white : blueGray.m900, marginBottom: '0.4rem' }}>
                    {name}
                  </H4>
                  <div style={{ margin: '1.6rem 0 2.4rem' }}>
                    <span
                      style={{
                        fontSize: '4.8rem',
                        fontWeight: 900,
                        color: isDark ? white : blueGray.m900,
                        lineHeight: 1,
                      }}
                    >
                      {price === 0 ? 'Free' : formatCurrency(price)}
                    </span>
                    {price > 0 && (
                      <span
                        style={{
                          fontSize: '1.4rem',
                          color: isDark ? blueGray.m400 : blueGray.m500,
                        }}
                      >
                        / mo
                      </span>
                    )}
                    {isAnnual && price > 0 && (
                      <div style={{ fontSize: '1.3rem', color: green.m600, marginTop: '0.4rem' }}>
                        {formatCurrency(price * 12)} billed annually
                      </div>
                    )}
                  </div>
                  <Button
                    theme={featured ? color : 'blueGray'}
                    width='100%'
                    style={{ marginBottom: '2.4rem' }}
                    onClick={() => {
                      if (name === 'Enterprise') {
                        toggleDemoModal(true);
                      } else {
                        pushToast(
                          SUCCESS,
                          `${name} plan selected!`,
                          price === 0
                            ? 'Your account is ready.'
                            : `You saved ${isAnnual ? '26%' : '0%'} with annual billing.`
                        );
                      }
                    }}
                  >
                    {cta}
                  </Button>
                  <Flex $col $gap='1.2rem'>
                    {features.map((f) => (
                      <Flex key={f} $gap='1rem' $align='center'>
                        <FeatureCheck />
                        <span
                          style={{
                            fontSize: '1.4rem',
                            color: isDark ? blueGray.m300 : blueGray.m700,
                          }}
                        >
                          {f}
                        </span>
                      </Flex>
                    ))}
                  </Flex>
                </PricingCard>
              );
            })}
          </Grid>

          <div style={{ textAlign: 'center', marginTop: '3.2rem' }}>
            <Flex $justify='center' $gap='0.8rem'>
              <LockKeyhole
                style={{ color: isDark ? blueGray.m400 : blueGray.m500, fontSize: '1.6rem' }}
              />
              <span style={{ fontSize: '1.35rem', color: isDark ? blueGray.m400 : blueGray.m500 }}>
                256-bit AES encryption · SOC 2 Type II · GDPR compliant
              </span>
            </Flex>
          </div>
        </Section>

        <Divider $dark={isDark} />

        {/* ══════════ CHANGELOG ══════════ */}
        <Section>
          <Flex $justify='space-between' $wrap $gap='1.6rem' style={{ marginBottom: '4rem' }}>
            <div>
              <H2
                style={{
                  fontSize: '3.2rem',
                  fontWeight: 800,
                  color: isDark ? white : blueGray.m900,
                  marginBottom: '0.6rem',
                }}
              >
                Changelog
              </H2>
              <P
                style={{
                  fontSize: '1.5rem',
                  color: isDark ? blueGray.m400 : blueGray.m500,
                  margin: 0,
                }}
              >
                What shipped recently. {capitalize('updated')} every sprint.
              </P>
            </div>
            <Button
              theme='blueGray'
              size='small'
              width={13}
              onClick={() =>
                pushToast(INFO, 'RSS feed', 'Subscribe via https://axion.app/changelog.rss')
              }
            >
              RSS Feed
            </Button>
          </Flex>

          {changelogSlice.map((item) => (
            <ChangelogItem key={item.version} $dark={isDark}>
              <VersionTag $type={item.type}>{item.type}</VersionTag>
              <div style={{ flex: 1 }}>
                <Flex
                  $justify='space-between'
                  $wrap
                  $gap='0.8rem'
                  style={{ marginBottom: '0.4rem' }}
                >
                  <H5
                    style={{ color: isDark ? white : blueGray.m900, margin: 0, fontSize: '1.6rem' }}
                  >
                    {item.version} — {item.title}
                  </H5>
                  <span
                    style={{ fontSize: '1.2rem', color: isDark ? blueGray.m500 : blueGray.m400 }}
                  >
                    {timeAgo(item.date)}
                  </span>
                </Flex>
                <P
                  style={{
                    color: isDark ? blueGray.m400 : blueGray.m600,
                    fontSize: '1.45rem',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </P>
              </div>
            </ChangelogItem>
          ))}

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.2rem' }}>
            <Pagination
              pageNumber={changelogPage}
              setPageNumber={setChangelogPage}
              totalPages={Math.ceil(CHANGELOG.length / PAGE_SIZE)}
              theme='indigo'
            />
          </div>
        </Section>

        <Divider $dark={isDark} />

        {/* ══════════ FAQ ══════════ */}
        <Section>
          <div style={{ textAlign: 'center', marginBottom: '5.6rem' }}>
            <Badge
              $bg={isDark ? indigo.m900 : indigo.m50}
              $color={isDark ? indigo.m300 : indigo.m600}
              style={{ marginBottom: '1.6rem' }}
            >
              <InfoCircleFilled style={{ fontSize: '1.2rem' }} /> Frequently asked
            </Badge>
            <H2
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: isDark ? white : blueGray.m900,
                letterSpacing: '-0.03rem',
                marginBottom: '1.2rem',
              }}
            >
              Questions we hear a lot
            </H2>
            <P
              style={{
                fontSize: '1.7rem',
                color: isDark ? blueGray.m300 : blueGray.m600,
                maxWidth: '48rem',
                margin: '0 auto',
              }}
            >
              Can't find what you're looking for?{' '}
              <span
                style={{ color: indigo.m500, cursor: 'pointer' }}
                onClick={() => pushToast(INFO, 'Support', 'Opening chat…')}
              >
                Chat with us
              </span>
              .
            </P>
          </div>

          <div style={{ maxWidth: '76rem', margin: '0 auto' }}>
            <Accordion
              items={FAQ_ITEMS}
              allowMultiple
              itemBackground={isDark ? blueGray.m800 : '#fff'}
              itemBorderColor={isDark ? blueGray.m600 : undefined}
              activeBackground={isDark ? blueGray.m700 : indigo.m50}
              titleColor={isDark ? white : undefined}
              bodyColor={isDark ? blueGray.m300 : undefined}
            />
          </div>
        </Section>

        <Divider $dark={isDark} />

        {/* ══════════ NEWSLETTER ══════════ */}
        <Section>
          <NewsletterBox>
            <Badge $bg='rgba(255,255,255,0.2)' $color={white} style={{ marginBottom: '1.6rem' }}>
              <EmailFilled style={{ fontSize: '1.2rem' }} /> Stay in the loop
            </Badge>
            <H2
              style={{ color: white, fontSize: '3.6rem', fontWeight: 800, marginBottom: '0.8rem' }}
            >
              Get release notes in your inbox
            </H2>
            <P style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.6rem', margin: 0 }}>
              One email per sprint. No noise. Unsubscribe any time.
            </P>
            <EmailRow>
              <EmailInput
                type='email'
                placeholder='you@company.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              />
              <Button
                theme='white'
                size='medium'
                isLoading={subscribing}
                onClick={handleSubscribe}
                textColor={indigo.m700}
              >
                Subscribe
              </Button>
            </EmailRow>
            <P
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '1.2rem',
                marginTop: '1.6rem',
                marginBottom: 0,
              }}
            >
              Joined by {formatCompactNumber(12400)} engineers already.
            </P>
          </NewsletterBox>
        </Section>

        {/* ══════════ FOOTER ══════════ */}
        <Footer>
          <FooterGrid>
            <div>
              <span
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: white,
                  letterSpacing: '-0.05rem',
                }}
              >
                ⬡ <GradientText>Axion</GradientText>
              </span>
              <P
                style={{
                  color: blueGray.m400,
                  fontSize: '1.4rem',
                  marginTop: '1.2rem',
                  lineHeight: 1.8,
                }}
              >
                The analytics platform for teams that can't afford downtime. Built in public since
                2020.
              </P>
              <Flex $gap='1.2rem' style={{ marginTop: '2rem' }}>
                <Timer isDigital color='indigo' size={14} showTime showTimeWithSec={false} />
                <Flex $gap='0.4rem'>
                  <OnlineDot $online={isOnline} />
                  <span style={{ fontSize: '1.2rem', color: blueGray.m500 }}>
                    All systems {isOnline ? 'operational' : 'checking…'}
                  </span>
                </Flex>
              </Flex>
            </div>

            {[
              { heading: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'API'] },
              { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Legal'] },
              { heading: 'Support', links: ['Docs', 'Status', 'Community', 'Contact', 'Security'] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <div
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: blueGray.m200,
                    marginBottom: '1.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {heading}
                </div>
                {links.map((l) => (
                  <FooterLink key={l} onClick={() => pushToast(INFO, l, `Navigating to ${l}…`)}>
                    {l}
                  </FooterLink>
                ))}
              </div>
            ))}
          </FooterGrid>

          <div
            style={{
              maxWidth: '120rem',
              margin: '4rem auto 0',
              paddingTop: '3.2rem',
              borderTop: `1px solid ${blueGray.m800}`,
            }}
          >
            <Flex $justify='space-between' $wrap $gap='1.6rem'>
              <span style={{ fontSize: '1.3rem', color: blueGray.m600 }}>
                © 2026 Axion, Inc. All rights reserved.
              </span>
              <Flex $gap='0.4rem'>
                {['Privacy', 'Terms', 'Cookies'].map((l) => (
                  <FooterLink
                    key={l}
                    style={{ fontSize: '1.3rem' }}
                    onClick={() => pushToast(INFO, l + ' Policy', 'Opening document…')}
                  >
                    {l}
                  </FooterLink>
                ))}
              </Flex>
            </Flex>
          </div>
        </Footer>
      </Page>
    </RootComponent>
  );
};

// ─── Story config ─────────────────────────────────────────────────────────────
export default {
  title: 'Foundation/SamplePage',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A full-featured interactive landing page built entirely with meticulous-ui components, hooks, utilities, icons, and color tokens. Demonstrates real-world composition: sticky navbar, hero section, live metrics, feature grid with shimmer loading, testimonial carousel, pricing toggle, changelog pagination, FAQ accordion, newsletter, and footer — all with dark-mode support persisted via useLocalStorage.',
      },
      source: {
        language: 'jsx',
        code: `
import RootComponent from 'meticulous-ui/components/RootComponent';
import Button from 'meticulous-ui/components/Button';
import { H1, H2, H4, H5 } from 'meticulous-ui/components/Typography/Headings';
import P from 'meticulous-ui/components/Typography/P';
import Carousel from 'meticulous-ui/components/Carousel';
import Modal from 'meticulous-ui/components/Modal';
import Switch from 'meticulous-ui/components/Switch';
import Dropdown from 'meticulous-ui/components/Dropdown';
import { ToastContainer } from 'meticulous-ui/components/Toast';
import Shimmer from 'meticulous-ui/components/Shimmer';
import Pagination from 'meticulous-ui/components/Pagination';
import Timer from 'meticulous-ui/components/Timer';
import Accordion from 'meticulous-ui/components/Accordion';

import useLocalStorage from 'meticulous-ui/hooks/useLocalStorage';
import useToggle from 'meticulous-ui/hooks/useToggle';
import useInterval from 'meticulous-ui/hooks/useInterval';
import useTimeout from 'meticulous-ui/hooks/useTimeout';
import useCopyToClipboard from 'meticulous-ui/hooks/useCopyToClipboard';
import useOnlineStatus from 'meticulous-ui/hooks/useOnlineStatus';
import useWindowSize from 'meticulous-ui/hooks/useWindowSize';

import formatCompactNumber from 'meticulous-ui/utils/formatCompactNumber';
import formatCurrency from 'meticulous-ui/utils/formatCurrency';
import timeAgo from 'meticulous-ui/utils/timeAgo';
import truncate from 'meticulous-ui/utils/truncate';
import getGreetingByTime from 'meticulous-ui/utils/getGreetingByTime';
import capitalize from 'meticulous-ui/utils/capitalize';

// RootComponent is included inside the page itself — no external wrapper needed.
const App = () => <LandingPage />;
        `,
      },
    },
  },
};

export const Default = {
  name: 'Axion Analytics — Full Landing Page',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
    docs: {
      source: {
        language: 'jsx',
        // Source shown in the Docs tab — a representative excerpt of the page structure.
        code: `
import RootComponent from 'meticulous-ui/components/RootComponent';
import Button from 'meticulous-ui/components/Button';
import Switch from 'meticulous-ui/components/Switch';
import Modal from 'meticulous-ui/components/Modal';
import Dropdown from 'meticulous-ui/components/Dropdown';
import { ToastContainer } from 'meticulous-ui/components/Toast';
import Carousel from 'meticulous-ui/components/Carousel';
import Shimmer from 'meticulous-ui/components/Shimmer';
import Pagination from 'meticulous-ui/components/Pagination';
import Timer from 'meticulous-ui/components/Timer';
import { H1, H2, H4 } from 'meticulous-ui/components/Typography/Headings';
import P from 'meticulous-ui/components/Typography/P';

import useLocalStorage from 'meticulous-ui/hooks/useLocalStorage';
import useToggle from 'meticulous-ui/hooks/useToggle';
import useInterval from 'meticulous-ui/hooks/useInterval';
import useTimeout from 'meticulous-ui/hooks/useTimeout';
import useCopyToClipboard from 'meticulous-ui/hooks/useCopyToClipboard';
import useOnlineStatus from 'meticulous-ui/hooks/useOnlineStatus';
import useWindowSize from 'meticulous-ui/hooks/useWindowSize';

import formatCompactNumber from 'meticulous-ui/utils/formatCompactNumber';
import formatCurrency from 'meticulous-ui/utils/formatCurrency';
import timeAgo from 'meticulous-ui/utils/timeAgo';
import truncate from 'meticulous-ui/utils/truncate';
import getGreetingByTime from 'meticulous-ui/utils/getGreetingByTime';
import capitalize from 'meticulous-ui/utils/capitalize';

import indigo from 'meticulous-ui/colors/indigo';
import cyan from 'meticulous-ui/colors/cyan';
import blueGray from 'meticulous-ui/colors/blueGray';
import green from 'meticulous-ui/colors/green';
import white from 'meticulous-ui/colors/white';

// RootComponent is self-contained inside the page component.
// Dark-mode preference is persisted across sessions via useLocalStorage.
const LandingPage = () => {
  const [isDark, setIsDark] = useLocalStorage('axion-dark', false);
  const isOnline = useOnlineStatus();
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth < 768;

  const [isAnnual, toggleAnnual] = useToggle(false);
  const [demoModalOpen, toggleDemoModal] = useToggle(false);
  const [toasts, setToasts] = useState([]);

  const pushToast = (type, title, subtitle) => {
    const id = \`\${type}-\${Math.random().toString(16).slice(2)}\`;
    setToasts((prev) => [
      ...prev,
      { id, type, title, subtitle, onExpire: () => setToasts((p) => p.filter((t) => t.id !== id)) },
    ]);
  };

  return (
    <RootComponent>
      <ToastContainer toasts={toasts} />
      <div onWheel={(e) => e.stopPropagation()}>
        <Modal isOpen={demoModalOpen} onClose={() => toggleDemoModal(false)} title="Book a live demo" width="52rem">
          <Dropdown options={roleOptions} value={role} onChange={setRole} placeholder="Select your team" width="100%" theme="indigo" menuHeight="16rem" />
        </Modal>
      </div>
      {/* Sticky Navbar */}
      <nav>
        <Switch checked={isDark} onChange={() => setIsDark(!isDark)} onLabel="Dark" offLabel="Light" onColor={indigo.m600} />
        <Button theme="indigo" size="small" width={13} onClick={() => toggleDemoModal(true)}>Book demo</Button>
      </nav>
      {/* Hero */}
      <section>
        <H1>{getGreetingByTime()} — Analyse everything</H1>
        <P>The analytics platform built for modern data teams.</P>
        <Button theme="indigo" size="large" onClick={() => pushToast('success', 'Welcome!', 'Check your inbox.')}>
          Start for free
        </Button>
      </section>
      {/* Metrics bar */}
      <section>
        <div>{formatCompactNumber(148200)} active users</div>
        <div>{formatCompactNumber(9400000)} queries / day</div>
      </section>
      {/* Testimonials */}
      <Carousel data={testimonials} visibleSlides={isMobile ? 1 : 2} hasArrow loop autoSlide autoSlideSec={5}
        renderCarousel={(item) => (
          <P>"{truncate(item.text, 160)}" — {item.name} · {timeAgo(item.date)}</P>
        )}
      />
      {/* Pricing */}
      <section>
        <Switch checked={isAnnual} onChange={toggleAnnual} onLabel="Annual" offLabel="Monthly" />
        <span style={{ visibility: isAnnual ? 'visible' : 'hidden' }}>Save up to 26% with annual billing</span>
        {plans.map(({ name, monthly, annual }) => (
          <div key={name}>
            <H4>{name}</H4>
            <span>{isAnnual ? formatCurrency(annual) : formatCurrency(monthly)} / mo</span>
          </div>
        ))}
      </section>
      {/* Changelog */}
      <section>
        <P>{capitalize('updated')} every sprint.</P>
        <Pagination pageNumber={page} setPageNumber={setPage} totalPages={3} theme="indigo" />
      </section>
      {/* Footer */}
      <footer>
        <Timer isDigital color="indigo" size={14} showTime showTimeWithSec={false} />
        <span>{isOnline ? 'All systems operational' : 'Checking…'}</span>
      </footer>
    </RootComponent>
  );
};
        `,
      },
    },
  },
  render: () => <LandingPage />,
};
