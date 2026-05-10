import React from 'react';
import styled from 'styled-components';
import { grey, white } from '../../../colors';

const BadgeEl = styled.span`
  background: ${({ $isDark }) => ($isDark ? grey.m600 : grey.m900)};
  color: ${white};
  font-size: 0.6875rem;
  font-weight: 600;
  border-radius: 0.25rem;
  padding: 1px 0.375rem;
  min-width: 1.25rem;
  text-align: center;
  line-height: 1.125rem;
  display: inline-block;
`;

const Badge = ({ count, isDark }) => (
  <BadgeEl $isDark={isDark} aria-label={`${count} items`}>
    {count}
  </BadgeEl>
);

export default Badge;
