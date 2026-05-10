import { useState } from 'react';
import Sidebar from '../src/components/Sidebar/Sidebar';
import { grey } from '../src/colors';

const LogoIcon = () => (
  <svg width='36' height='36' viewBox='0 0 36 36' fill='none'>
    <rect width='36' height='36' rx='8' fill={grey.m900} />
    <path
      d='M18 8l8 4.5v9L18 26l-8-4.5v-9L18 8z'
      stroke='#fff'
      strokeWidth='1.5'
      strokeLinejoin='round'
    />
    <path d='M18 8v10M10 12.5l8 5.5M26 12.5l-8 5.5' stroke='#fff' strokeWidth='1.5' />
  </svg>
);

const Icon = ({ d }) => (
  <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
    <path
      d={d}
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ICONS = {
  products: <Icon d='M2 2h5v5H2zM11 2h5v5h-5zM2 11h5v5H2zM11 11h5v5h-5z' />,
  analytics: <Icon d='M2 14l4-5 3 3 4-6 3 3' />,
  transactions: <Icon d='M3 9h12M9 3l6 6-6 6' />,
  orders: <Icon d='M4 3h10l1 3H3L4 3zM3 6l1 10h10l1-10' />,
  subscribers: <Icon d='M6 7a3 3 0 106 0 3 3 0 00-6 0zM2 16a7 7 0 0114 0' />,
  payouts: <Icon d='M2 5h14v10H2zM2 9h14M6 13h2' />,
  posts: <Icon d='M3 3h12M3 7h12M3 11h8M3 15h5' />,
  pages: <Icon d='M4 2h10l2 3v11H4V2zM8 8h5M8 11h3' />,
  performance: <Icon d='M9 2a7 7 0 100 14A7 7 0 009 2zM9 6v3l2 2' />,
  team: <Icon d='M7 8a3 3 0 106 0 3 3 0 00-6 0zM2 16a7 7 0 0114 0' />,
  customize: <Icon d='M9 2l1.5 4.5H15l-3.75 2.75 1.5 4.5L9 11l-3.75 2.75 1.5-4.5L3 6.5h4.5z' />,
  bell: <Icon d='M9 2a5 5 0 00-5 5v3l-1.5 2.5h13L14 10V7a5 5 0 00-5-5zM7 14.5a2 2 0 004 0' />,
  settings: (
    <Icon d='M9 11a2 2 0 100-4 2 2 0 000 4zM15.5 9a6.5 6.5 0 01-.4 2.2l1.5 1.1-1.5 2.6-1.8-.7a6.5 6.5 0 01-1.9 1.1l-.3 1.9h-3l-.3-1.9a6.5 6.5 0 01-1.9-1.1l-1.8.7L2.4 12.3l1.5-1.1A6.5 6.5 0 013.5 9c0-.8.1-1.5.4-2.2L2.4 5.7l1.5-2.6 1.8.7A6.5 6.5 0 017.6 2.7L7.9.8h3l.3 1.9a6.5 6.5 0 011.9 1.1l1.8-.7 1.5 2.6-1.5 1.1c.3.7.4 1.4.4 2.2z' />
  ),
};

const NAV_ITEMS = [
  { id: 'products', label: 'Products', icon: ICONS.products },
  { id: 'analytics', label: 'Analytics', icon: ICONS.analytics },
  { id: 'transactions', label: 'Transactions', icon: ICONS.transactions },
  { id: 'orders', label: 'Orders', icon: ICONS.orders },
  { id: 'subscribers', label: 'Subscribers', icon: ICONS.subscribers },
  { id: 'payouts', label: 'Payouts', icon: ICONS.payouts },
  {
    id: 'posts',
    label: 'Posts',
    icon: ICONS.posts,
    onAdd: () => alert('Add post'),
    children: [
      { id: 'drafts', label: 'Drafts', badge: 10 },
      { id: 'scheduled', label: 'Scheduled', badge: 2 },
      { id: 'published', label: 'Published', badge: 28 },
    ],
  },
  { id: 'pages', label: 'Pages', icon: ICONS.pages, onAdd: () => alert('Add page') },
  { id: 'performance', label: 'Performance', icon: ICONS.performance },
  { id: 'team', label: 'Team management', icon: ICONS.team },
  { id: 'customize', label: 'Customize', icon: ICONS.customize },
];

const BOTTOM_ITEMS = [
  { id: 'bell', label: 'Notifications', icon: ICONS.bell },
  { id: 'settings', label: 'Settings', icon: ICONS.settings },
];

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Minimal sidebar navigation inspired by Untitled UI. Supports collapsed mode, dark theme, collapsible nav sections, badges, and icon-only bottom actions.',
      },
    },
  },
  argTypes: {
    logo: { table: { disable: true } },
    storeName: { control: 'text', description: 'Primary store or app name shown next to the logo' },
    storeUrl: { control: 'text', description: 'Secondary line shown below the store name' },
    onSwitchStore: { table: { disable: true } },
    navItems: { control: 'object', description: 'Ordered list of NavItem objects' },
    activeId: { control: 'text', description: 'id of the currently active nav item' },
    onNavChange: { table: { disable: true } },
    bottomItems: { control: 'object', description: 'Icon actions pinned to the bottom' },
    collapsed: {
      control: 'boolean',
      description: 'Renders a narrow 68px icon-only sidebar when true',
    },
    hoverExpand: {
      control: 'boolean',
      description: 'Stays collapsed and expands on hover; collapses again after any nav action',
    },
    showStoreInfo: {
      control: 'boolean',
      description:
        'Shows logo, store name, store URL and small hamburger in the header. When false (default), shows a large hamburger beside the logo only.',
    },
    onCollapseToggle: { table: { disable: true } },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Color scheme for the sidebar',
    },
  },
};

const Wrapper = ({ children, bg }) => (
  <div style={{ display: 'flex', minHeight: '100vh', background: bg || grey.m100 }}>
    {children}
    <div style={{ flex: 1, padding: 32, color: grey.m600, fontSize: 14 }}>Main content area</div>
  </div>
);

export const Default = ({
  storeName,
  storeUrl,
  collapsed: initialCollapsed,
  theme,
  activeId: initialActiveId,
  navItems,
  bottomItems,
}) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [activeId, setActiveId] = useState(initialActiveId);
  return (
    <Wrapper bg={theme === 'dark' ? grey.m900 : grey.m100}>
      <Sidebar
        logo={<LogoIcon />}
        storeName={storeName}
        storeUrl={storeUrl}
        navItems={navItems}
        activeId={activeId}
        onNavChange={setActiveId}
        bottomItems={bottomItems}
        collapsed={collapsed}
        onCollapseToggle={() => setCollapsed((c) => !c)}
        theme={theme}
      />
    </Wrapper>
  );
};
Default.args = {
  storeName: 'Untitled UI',
  storeUrl: 'store.untitleui.com',
  activeId: 'analytics',
  collapsed: false,
  theme: 'light',
  navItems: NAV_ITEMS,
  bottomItems: BOTTOM_ITEMS,
};

export const LightExpanded = () => {
  const [active, setActive] = useState('analytics');
  return (
    <Wrapper>
      <Sidebar
        logo={<LogoIcon />}
        storeName='Untitled UI'
        storeUrl='store.untitleui.com'
        onSwitchStore={() => alert('Switch stores')}
        navItems={NAV_ITEMS}
        activeId={active}
        onNavChange={setActive}
        bottomItems={BOTTOM_ITEMS}
        theme='light'
      />
    </Wrapper>
  );
};
LightExpanded.storyName = 'Light – Expanded';
LightExpanded.parameters = { controls: { disable: true }, actions: { disable: true } };

export const DarkExpanded = () => {
  const [active, setActive] = useState('analytics');
  return (
    <Wrapper bg={grey.m900}>
      <Sidebar
        logo={<LogoIcon />}
        storeName='Untitled UI'
        storeUrl='store.untitleui.com'
        onSwitchStore={() => alert('Switch stores')}
        navItems={NAV_ITEMS}
        activeId={active}
        onNavChange={setActive}
        bottomItems={BOTTOM_ITEMS}
        theme='dark'
      />
    </Wrapper>
  );
};
DarkExpanded.storyName = 'Dark – Expanded';
DarkExpanded.parameters = { controls: { disable: true }, actions: { disable: true } };

export const LightCollapsed = () => {
  const [active, setActive] = useState('analytics');
  return (
    <Wrapper>
      <Sidebar
        logo={<LogoIcon />}
        navItems={NAV_ITEMS}
        activeId={active}
        onNavChange={setActive}
        bottomItems={BOTTOM_ITEMS}
        collapsed
        theme='light'
      />
    </Wrapper>
  );
};
LightCollapsed.storyName = 'Light – Collapsed';
LightCollapsed.parameters = { controls: { disable: true }, actions: { disable: true } };

export const DarkCollapsed = () => {
  const [active, setActive] = useState('analytics');
  return (
    <Wrapper bg={grey.m900}>
      <Sidebar
        logo={<LogoIcon />}
        navItems={NAV_ITEMS}
        activeId={active}
        onNavChange={setActive}
        bottomItems={BOTTOM_ITEMS}
        collapsed
        theme='dark'
      />
    </Wrapper>
  );
};
DarkCollapsed.storyName = 'Dark – Collapsed';
DarkCollapsed.parameters = { controls: { disable: true }, actions: { disable: true } };

export const Toggleable = () => {
  const [active, setActive] = useState('analytics');
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  return (
    <Wrapper bg={theme === 'dark' ? grey.m900 : grey.m100}>
      <Sidebar
        logo={<LogoIcon />}
        storeName='Untitled UI'
        storeUrl='store.untitleui.com'
        onSwitchStore={() => alert('Switch stores')}
        navItems={NAV_ITEMS}
        activeId={active}
        onNavChange={setActive}
        bottomItems={BOTTOM_ITEMS}
        collapsed={collapsed}
        onCollapseToggle={() => setCollapsed((c) => !c)}
        theme={theme}
      />
      <div style={{ flex: 1, padding: 32 }}>
        <button
          onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
          style={{
            padding: '8px 16px',
            borderRadius: 6,
            border: `1px solid ${grey.m300}`,
            background: theme === 'dark' ? grey.m800 : grey.m50,
            color: theme === 'dark' ? grey.m100 : grey.m900,
            cursor: 'pointer',
            fontSize: 13,
          }}
        >
          Toggle {theme === 'light' ? 'dark' : 'light'} theme
        </button>
        <p style={{ color: grey.m500, fontSize: 13, marginTop: 16 }}>
          Active: <strong style={{ color: grey.m700 }}>{active}</strong>
          {' · '}
          Mode: <strong style={{ color: grey.m700 }}>{collapsed ? 'collapsed' : 'expanded'}</strong>
        </p>
      </div>
    </Wrapper>
  );
};
Toggleable.parameters = { controls: { disable: true }, actions: { disable: true } };

export const HoverExpand = () => {
  const [active, setActive] = useState('analytics');
  return (
    <Wrapper>
      <Sidebar
        logo={<LogoIcon />}
        storeName='Untitled UI'
        storeUrl='store.untitleui.com'
        navItems={NAV_ITEMS}
        activeId={active}
        onNavChange={setActive}
        bottomItems={BOTTOM_ITEMS}
        hoverExpand
        theme='light'
      />
    </Wrapper>
  );
};
HoverExpand.storyName = 'Hover Expand';
HoverExpand.parameters = { controls: { disable: true }, actions: { disable: true } };
