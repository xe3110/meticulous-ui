import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import colors from '../../colors/colorMap';

const resolveColor = (theme, shade) => {
  const palette = colors[theme];
  return palette ? palette[shade] : theme;
};

const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ $color }) => $color};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ $color }) => $color};
    transition: width 0.3s ease;
  }

  ${({ $underline }) =>
    $underline &&
    css`
      &:hover::after,
      &:focus-visible::after {
        width: 100%;
      }
    `}

  &:focus,
  &:focus-visible,
  &:hover {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.45;
      pointer-events: none;
      cursor: not-allowed;
    `}
`;

const Arrow = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 0.75em;
  transform: translateX(0);
  transition: transform 0.3s ease;

  ${Anchor}:hover &,
  ${Anchor}:focus-visible & {
    transform: translateX(5px);
  }
`;

const Link = ({
  label,
  theme = 'red',
  shade = 'm500',
  href = '#',
  target,
  rel,
  disabled = false,
  underline = false,
  onClick,
  ...rest
}) => {
  const color = resolveColor(theme, shade);
  const safeRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;

  return (
    <Anchor
      href={disabled ? undefined : href}
      target={target}
      rel={safeRel}
      $color={color}
      $underline={underline}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {label}
      <Arrow aria-hidden='true'>&#9658;</Arrow>
    </Anchor>
  );
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'red',
    'orange',
    'deepOrange',
    'amber',
    'yellow',
    'lime',
    'lightGreen',
    'green',
    'teal',
    'cyan',
    'lightBlue',
    'blue',
    'indigo',
    'deepPurple',
    'purple',
    'pink',
    'brown',
    'grey',
    'blueGray',
    'violet',
    'cider',
  ]),
  shade: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  disabled: PropTypes.bool,
  underline: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Link;
