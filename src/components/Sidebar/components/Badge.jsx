import React from 'react';
import styled from 'styled-components';
import { grey, white } from '../../../colors';

const BadgeEl = styled.span`
  background: ${({ $isDark }) => ($isDark ? grey.m600 : grey.m900)};
  color: ${white};
  font-size: 11px;
  font-weight: 600;
  border-radius: 4px;
  padding: 1px 6px;
  min-width: 20px;
  text-align: center;
  line-height: 18px;
  display: inline-block;
`;

const Badge = ({ count, isDark }) => <BadgeEl $isDark={isDark}>{count}</BadgeEl>;

export default Badge;
