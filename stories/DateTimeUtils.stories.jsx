import { useState, useEffect } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import teal from '../src/colors/teal';
import blue from '../src/colors/blue';
import violet from '../src/colors/violet';
import green from '../src/colors/green';
import orange from '../src/colors/orange';
import indigo from '../src/colors/indigo';
import pink from '../src/colors/pink';
import yellow from '../src/colors/yellow';
import purple from '../src/colors/purple';

import formatDate from '../src/utils/formatDate';
import formatTime from '../src/utils/formatTime';
import timeAgo from '../src/utils/timeAgo';
import isToday from '../src/utils/isToday';
import isPast from '../src/utils/isPast';
import addDays from '../src/utils/addDays';
import differenceInDays from '../src/utils/differenceInDays';
import getGreetingByTime from '../src/utils/getGreetingByTime';
import countdown from '../src/utils/countdown';

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

// ─── Examples table ───────────────────────────────────────────────────────────

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

const Output = styled.code`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

const ExamplesTable = ({ rows, outputColor }) => (
  <Table>
    <thead>
      <tr>
        <Th>Input</Th>
        <Th>Output</Th>
        <Th>Notes</Th>
      </tr>
    </thead>
    <tbody>
      {rows.map(({ input, output, note }, i) => (
        <tr key={i}>
          <Td>
            <Code>{input}</Code>
          </Td>
          <Td>
            <Output $color={outputColor}>{output}</Output>
          </Td>
          <Td style={{ color: blueGray.m400, fontSize: '1.2rem' }}>{note ?? ''}</Td>
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

// ─── Live demo controls ───────────────────────────────────────────────────────

const LiveRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ResultBadge = styled.span`
  font-size: 1.55rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border-radius: 7px;
  padding: 0.45rem 1.4rem;
  font-family: monospace;
`;

// ─── Countdown display ────────────────────────────────────────────────────────

const CountdownGrid = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const CountdownUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 1.6rem 2.4rem;
  min-width: 8rem;
`;

const CountdownValue = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  font-family: monospace;
  line-height: 1;
`;

const CountdownLabel = styled.span`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${blueGray.m400};
  margin-top: 0.6rem;
`;

const DateInput = styled.input`
  font-size: 1.3rem;
  padding: 0.5rem 0.9rem;
  border: 2px solid ${({ $border }) => $border};
  border-radius: 6px;
  outline: none;
  &:focus {
    border-color: ${({ $focus }) => $focus};
  }
`;

// ═════════════════════════════════════════════════════════════════════════════
// formatDate — teal
// ═════════════════════════════════════════════════════════════════════════════

const FormatDatePage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg='#fff' $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              formatDate
            </FnName>
            <Signature>(date: Date | string, locale?: string) → string</Signature>
          </div>
          <Description>
            Formats a date as a human-readable string using <Code>Intl.DateTimeFormat</Code>.
            Accepts a <Code>Date</Code> object or any string parseable by <Code>new Date()</Code>.
            Defaults to <Code>en-US</Code> long format.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={teal.m700}
              rows={[
                {
                  input: `formatDate(new Date('2026-04-28'))`,
                  output: `'April 28, 2026'`,
                },
                {
                  input: `formatDate('2024-01-01')`,
                  output: `'January 1, 2024'`,
                  note: 'String input accepted',
                },
                {
                  input: `formatDate(new Date('2026-04-28'), 'en-IN')`,
                  output: `'28 April 2026'`,
                  note: 'en-IN — day first',
                },
                {
                  input: `formatDate('invalid')`,
                  output: `''`,
                  note: 'Invalid date → empty string',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import formatDate from 'meticulous-ui/utils/formatDate';

formatDate(post.createdAt);              // → 'April 28, 2026'
formatDate(post.createdAt, 'en-IN');     // → '28 April 2026'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const formatDate = (date, locale = 'en-US') => {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(d);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// formatTime — blue
// ═════════════════════════════════════════════════════════════════════════════

const FormatTimePage = () => (
  <StoryPage $bg={blue.m50}>
    <MaxWidth>
      <Card $accent={blue.m500}>
        <CardHeader $bg='#fff' $border={blue.m100}>
          <div>
            <FnName $color={blue.m900} $bg={blue.m100}>
              formatTime
            </FnName>
            <Signature>(date: Date | string, locale?: string) → string</Signature>
          </div>
          <Description>
            Formats the time portion of a date as a 12-hour clock string with AM/PM. Uses{' '}
            <Code>Intl.DateTimeFormat</Code> with <Code>hour12: true</Code>.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blue.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={blue.m700}
              rows={[
                {
                  input: `formatTime(new Date('2026-04-28T09:05:00'))`,
                  output: `'9:05 AM'`,
                },
                {
                  input: `formatTime(new Date('2026-04-28T15:30:00'))`,
                  output: `'3:30 PM'`,
                  note: 'Afternoon',
                },
                {
                  input: `formatTime(new Date('2026-04-28T00:00:00'))`,
                  output: `'12:00 AM'`,
                  note: 'Midnight',
                },
                {
                  input: `formatTime(new Date('2026-04-28T12:00:00'))`,
                  output: `'12:00 PM'`,
                  note: 'Noon',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Usage</SectionLabel>
            <Pre>{`import formatTime from 'meticulous-ui/utils/formatTime';

formatTime(message.sentAt);   // → '3:30 PM'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Source</SectionLabel>
            <Pre>{`const formatTime = (date, locale = 'en-US') => {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '';
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric', minute: '2-digit', hour12: true,
  }).format(d);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// timeAgo — violet
// ═════════════════════════════════════════════════════════════════════════════

const TimeAgoPage = () => (
  <StoryPage $bg={violet.m50}>
    <MaxWidth>
      <Card $accent={violet.m500}>
        <CardHeader $bg='#fff' $border={violet.m100}>
          <div>
            <FnName $color={violet.m900} $bg={violet.m100}>
              timeAgo
            </FnName>
            <Signature>(date: Date | string) → string</Signature>
          </div>
          <Description>
            Returns a human-readable relative time string like <Code>"2 hours ago"</Code> or{' '}
            <Code>"in 3 days"</Code>. Uses <Code>Intl.RelativeTimeFormat</Code> for natural phrasing
            — works for both past and future dates.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={violet.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={violet.m700}
              rows={[
                {
                  input: `timeAgo(new Date(Date.now() - 30_000))`,
                  output: `'30 seconds ago'`,
                },
                {
                  input: `timeAgo(new Date(Date.now() - 3_600_000))`,
                  output: `'1 hour ago'`,
                },
                {
                  input: `timeAgo(new Date(Date.now() - 86_400_000 * 3))`,
                  output: `'3 days ago'`,
                },
                {
                  input: `timeAgo(new Date(Date.now() + 86_400_000 * 2))`,
                  output: `'in 2 days'`,
                  note: 'Future date',
                },
                {
                  input: `timeAgo(new Date(Date.now() - 86_400_000 * 400))`,
                  output: `'last year'`,
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Usage</SectionLabel>
            <Pre>{`import timeAgo from 'meticulous-ui/utils/timeAgo';

timeAgo(comment.createdAt);   // → '5 minutes ago'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Source</SectionLabel>
            <Pre>{`const timeAgo = (date) => {
  const d = date instanceof Date ? date : new Date(date);
  const seconds = Math.floor((Date.now() - d.getTime()) / 1000);
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const abs = Math.abs(seconds);
  if (abs < 60) return rtf.format(-Math.round(seconds), 'second');
  const minutes = Math.round(seconds / 60);
  if (Math.abs(minutes) < 60) return rtf.format(-minutes, 'minute');
  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) return rtf.format(-hours, 'hour');
  const days = Math.round(hours / 24);
  if (Math.abs(days) < 30) return rtf.format(-days, 'day');
  const months = Math.round(days / 30);
  if (Math.abs(months) < 12) return rtf.format(-months, 'month');
  return rtf.format(-Math.round(months / 12), 'year');
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isToday — green
// ═════════════════════════════════════════════════════════════════════════════

const IsTodayPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg='#fff' $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              isToday
            </FnName>
            <Signature>(date: Date | string) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> if the given date falls on today's calendar date (year, month,
            and day all match). Time of day is ignored.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={green.m700}
              rows={[
                {
                  input: `isToday(new Date())`,
                  output: `true`,
                  note: 'Right now',
                },
                {
                  input: `isToday(new Date('2020-01-01'))`,
                  output: `false`,
                  note: 'Past date',
                },
                {
                  input: `isToday(new Date(Date.now() + 86_400_000))`,
                  output: `false`,
                  note: 'Tomorrow',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import isToday from 'meticulous-ui/utils/isToday';

if (isToday(task.dueDate)) showTodayBadge();`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const isToday = (date) => {
  const d = date instanceof Date ? date : new Date(date);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  );
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isPast — orange
// ═════════════════════════════════════════════════════════════════════════════

const IsPastPage = () => (
  <StoryPage $bg={orange.m50}>
    <MaxWidth>
      <Card $accent={orange.m600}>
        <CardHeader $bg='#fff' $border={orange.m100}>
          <div>
            <FnName $color={orange.m900} $bg={orange.m100}>
              isPast
            </FnName>
            <Signature>(date: Date | string) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> if the given date is strictly in the past (before{' '}
            <Code>Date.now()</Code>). Millisecond precision — a date one second ago is past, a date
            one second in the future is not.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={orange.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={orange.m700}
              rows={[
                {
                  input: `isPast(new Date('2020-01-01'))`,
                  output: `true`,
                },
                {
                  input: `isPast(new Date('2099-12-31'))`,
                  output: `false`,
                  note: 'Future date',
                },
                {
                  input: `isPast(new Date(Date.now() - 1000))`,
                  output: `true`,
                  note: '1 second ago',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Usage</SectionLabel>
            <Pre>{`import isPast from 'meticulous-ui/utils/isPast';

if (isPast(subscription.expiresAt)) showRenewalBanner();`}</Pre>
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Source</SectionLabel>
            <Pre>{`const isPast = (date) => {
  const d = date instanceof Date ? date : new Date(date);
  return d.getTime() < Date.now();
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// addDays — indigo
// ═════════════════════════════════════════════════════════════════════════════

const AddDaysPage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg='#fff' $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              addDays
            </FnName>
            <Signature>(date: Date | string, n: number) → Date</Signature>
          </div>
          <Description>
            Returns a new <Code>Date</Code> that is <Code>n</Code> days after the given date. Passing
            a negative <Code>n</Code> subtracts days. The original date is never mutated.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={indigo.m700}
              rows={[
                {
                  input: `addDays(new Date('2026-04-28'), 7)`,
                  output: `May 5, 2026`,
                  note: '+7 days',
                },
                {
                  input: `addDays(new Date('2026-04-28'), -3)`,
                  output: `April 25, 2026`,
                  note: 'Subtract days',
                },
                {
                  input: `addDays(new Date('2026-01-30'), 3)`,
                  output: `February 2, 2026`,
                  note: 'Rolls over month boundary',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import addDays from 'meticulous-ui/utils/addDays';

const expiry = addDays(new Date(), 30);   // 30 days from today
const prev   = addDays(selectedDate, -1); // previous day`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const addDays = (date, n) => {
  const d = date instanceof Date ? new Date(date) : new Date(date);
  d.setDate(d.getDate() + n);
  return d;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// differenceInDays — pink
// ═════════════════════════════════════════════════════════════════════════════

const DifferenceInDaysPage = () => (
  <StoryPage $bg={pink.m50}>
    <MaxWidth>
      <Card $accent={pink.m500}>
        <CardHeader $bg='#fff' $border={pink.m100}>
          <div>
            <FnName $color={pink.m900} $bg={pink.m100}>
              differenceInDays
            </FnName>
            <Signature>(a: Date | string, b: Date | string) → number</Signature>
          </div>
          <Description>
            Returns the number of days from <Code>a</Code> to <Code>b</Code> (i.e.{' '}
            <Code>b − a</Code>). Positive when <Code>b</Code> is after <Code>a</Code>, negative when
            before.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={pink.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={pink.m700}
              rows={[
                {
                  input: `differenceInDays('2026-04-01', '2026-04-28')`,
                  output: `27`,
                },
                {
                  input: `differenceInDays('2026-04-28', '2026-04-01')`,
                  output: `-27`,
                  note: 'Negative when b is before a',
                },
                {
                  input: `differenceInDays('2026-01-01', '2027-01-01')`,
                  output: `365`,
                  note: 'Full year',
                },
                {
                  input: `differenceInDays('2026-04-28', '2026-04-28')`,
                  output: `0`,
                  note: 'Same date',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Usage</SectionLabel>
            <Pre>{`import differenceInDays from 'meticulous-ui/utils/differenceInDays';

const daysLeft = differenceInDays(new Date(), deadline);
// → 14  (two weeks remaining)`}</Pre>
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Source</SectionLabel>
            <Pre>{`const differenceInDays = (a, b) => {
  const da = a instanceof Date ? a : new Date(a);
  const db = b instanceof Date ? b : new Date(b);
  return Math.round((db.getTime() - da.getTime()) / (1000 * 60 * 60 * 24));
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// getGreetingByTime — yellow
// ═════════════════════════════════════════════════════════════════════════════

const GetGreetingByTimePage = () => {
  const current = getGreetingByTime();
  const hour = new Date().getHours();

  return (
    <StoryPage $bg={yellow.m50}>
      <MaxWidth>
        <Card $accent={yellow.m800}>
          <CardHeader $bg='#fff' $border={yellow.m200}>
            <div>
              <FnName $color={yellow.m900} $bg={yellow.m200}>
                getGreetingByTime
              </FnName>
              <Signature>() → string</Signature>
            </div>
            <Description>
              Returns a time-appropriate greeting based on the current local hour.{' '}
              <Code>Good morning</Code> before noon, <Code>Good afternoon</Code> until 5 PM,{' '}
              <Code>Good evening</Code> after that.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={yellow.m800}>Examples</SectionLabel>
              <ExamplesTable
                outputColor={yellow.m800}
                rows={[
                  {
                    input: `getGreetingByTime()  // called at 8:00`,
                    output: `'Good morning'`,
                    note: 'hour < 12',
                  },
                  {
                    input: `getGreetingByTime()  // called at 14:00`,
                    output: `'Good afternoon'`,
                    note: '12 ≤ hour < 17',
                  },
                  {
                    input: `getGreetingByTime()  // called at 20:00`,
                    output: `'Good evening'`,
                    note: 'hour ≥ 17',
                  },
                ]}
              />
            </div>
            <div>
              <SectionLabel $color={yellow.m800}>Live value</SectionLabel>
              <LiveRow>
                <ResultBadge $color={yellow.m900} $bg={yellow.m100}>
                  {current}
                </ResultBadge>
                <span style={{ fontSize: '1.3rem', color: blueGray.m400 }}>
                  (current hour: {hour})
                </span>
              </LiveRow>
            </div>
            <div>
              <SectionLabel $color={yellow.m800}>Usage</SectionLabel>
              <Pre>{`import getGreetingByTime from 'meticulous-ui/utils/getGreetingByTime';

<h1>{getGreetingByTime()}, {user.firstName}!</h1>
// → 'Good morning, Alex!'`}</Pre>
            </div>
            <div>
              <SectionLabel $color={yellow.m800}>Source</SectionLabel>
              <Pre>{`const getGreetingByTime = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// countdown — purple
// ═════════════════════════════════════════════════════════════════════════════

const pad = (n) => String(n).padStart(2, '0');

const CountdownPage = () => {
  const defaultTarget = () => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().slice(0, 10);
  };

  const [targetStr, setTargetStr] = useState(defaultTarget);
  const [tick, setTick] = useState(() => countdown(targetStr));

  useEffect(() => {
    setTick(countdown(targetStr));
    const id = setInterval(() => setTick(countdown(targetStr)), 1000);
    return () => clearInterval(id);
  }, [targetStr]);

  return (
    <StoryPage $bg={purple.m50}>
      <MaxWidth>
        <Card $accent={purple.m500}>
          <CardHeader $bg='#fff' $border={purple.m100}>
            <div>
              <FnName $color={purple.m900} $bg={purple.m100}>
                countdown
              </FnName>
              <Signature>(targetDate: Date | string) → {'{ days, hours, minutes, seconds }'}</Signature>
            </div>
            <Description>
              Returns the time remaining until <Code>targetDate</Code> as a plain object with{' '}
              <Code>days</Code>, <Code>hours</Code>, <Code>minutes</Code>, and <Code>seconds</Code>.
              All values are <Code>0</Code> once the target is reached.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={purple.m700}>Examples</SectionLabel>
              <ExamplesTable
                outputColor={purple.m700}
                rows={[
                  {
                    input: `countdown('2026-12-31')`,
                    output: `{ days: 247, hours: 8, minutes: 32, seconds: 11 }`,
                    note: 'Approx — depends on call time',
                  },
                  {
                    input: `countdown(new Date(Date.now() + 90_000))`,
                    output: `{ days: 0, hours: 0, minutes: 1, seconds: 30 }`,
                    note: '90 seconds from now',
                  },
                  {
                    input: `countdown(new Date(Date.now() - 5000))`,
                    output: `{ days: 0, hours: 0, minutes: 0, seconds: 0 }`,
                    note: 'Past target → all zeros',
                  },
                ]}
              />
            </div>
            <div>
              <SectionLabel $color={purple.m700}>Live Demo</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <LiveRow>
                  <label style={{ fontSize: '1.35rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    Target date
                    <DateInput
                      type='date'
                      value={targetStr}
                      onChange={(e) => setTargetStr(e.target.value)}
                      $border={purple.m200}
                      $focus={purple.m500}
                    />
                  </label>
                </LiveRow>
                <CountdownGrid>
                  {[
                    { label: 'Days', value: tick.days },
                    { label: 'Hours', value: pad(tick.hours) },
                    { label: 'Minutes', value: pad(tick.minutes) },
                    { label: 'Seconds', value: pad(tick.seconds) },
                  ].map(({ label, value }) => (
                    <CountdownUnit key={label} $bg={purple.m50}>
                      <CountdownValue $color={purple.m700}>{value}</CountdownValue>
                      <CountdownLabel>{label}</CountdownLabel>
                    </CountdownUnit>
                  ))}
                </CountdownGrid>
              </div>
            </div>
            <div>
              <SectionLabel $color={purple.m700}>Usage</SectionLabel>
              <Pre>{`import countdown from 'meticulous-ui/utils/countdown';

const { days, hours, minutes, seconds } = countdown(event.startsAt);
// Re-call every second with setInterval to drive a live timer`}</Pre>
            </div>
            <div>
              <SectionLabel $color={purple.m700}>Source</SectionLabel>
              <Pre>{`const countdown = (targetDate) => {
  const target = targetDate instanceof Date ? targetDate : new Date(targetDate);
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
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
  title: 'Utils/Date-Time Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const FormatDate = () => <FormatDatePage />;
FormatDate.storyName = 'formatDate';

export const FormatTime = () => <FormatTimePage />;
FormatTime.storyName = 'formatTime';

export const TimeAgo = () => <TimeAgoPage />;
TimeAgo.storyName = 'timeAgo';

export const IsToday = () => <IsTodayPage />;
IsToday.storyName = 'isToday';

export const IsPast = () => <IsPastPage />;
IsPast.storyName = 'isPast';

export const AddDays = () => <AddDaysPage />;
AddDays.storyName = 'addDays';

export const DifferenceInDays = () => <DifferenceInDaysPage />;
DifferenceInDays.storyName = 'differenceInDays';

export const GetGreetingByTime = () => <GetGreetingByTimePage />;
GetGreetingByTime.storyName = 'getGreetingByTime';

export const Countdown = () => <CountdownPage />;
Countdown.storyName = 'countdown';
