import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import grey from '../../colors/grey';
import green from '../../colors/green';

const THUMB_D = 1.9;
const THUMB_PAD = 0.28;
const TRACK_H = THUMB_D + THUMB_PAD * 2;
const LABEL_PAD = 0.7;
const THUMB_ZONE = THUMB_PAD + THUMB_D;

const Track = styled.button`
  position: relative;
  isolation: isolate;
  height: ${TRACK_H}rem;
  width: ${({ $hasLabel }) => ($hasLabel ? 'max-content' : '4.8rem')};
  min-width: 4.8rem;
  max-width: 20rem;
  border-radius: ${TRACK_H / 2}rem;
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  outline: none;

  padding-left: ${({ $checked, $hasLabel }) =>
    $hasLabel ? ($checked ? `${THUMB_PAD}rem` : `${THUMB_ZONE}rem`) : '0'};
  padding-right: ${({ $checked, $hasLabel }) =>
    $hasLabel ? ($checked ? `${THUMB_ZONE}rem` : `${THUMB_PAD}rem`) : '0'};

  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    padding-left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    padding-right 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  background-color: ${({ $checked, $onColor, $offColor, disabled }) => {
    if (disabled) return grey.m300;
    return $checked ? $onColor || green.m500 : $offColor || grey.m400;
  }};

  &:focus-visible {
    outline: 3px solid ${({ $onColor }) => ($onColor ? `${$onColor}88` : `${green.m500}88`)};
    outline-offset: 2px;
  }
`;

const Thumb = styled.div`
  position: absolute;
  top: calc(50% - ${THUMB_D / 2}rem);
  left: ${({ $checked }) =>
    $checked ? `calc(100% - ${THUMB_D + THUMB_PAD}rem)` : `${THUMB_PAD}rem`};
  width: ${THUMB_D}rem;
  height: ${THUMB_D}rem;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const InnerLabel = styled.span`
  position: relative;
  z-index: 2;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  pointer-events: none;
  padding: 0 ${LABEL_PAD}rem;
  color: rgba(255, 255, 255, 0.95);
`;

const Switch = ({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  onIcon,
  offIcon,
  onColor,
  offColor,
  onLabel,
  offLabel,
  label,
  id,
  disabled = false,
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = (e) => {
    e.preventDefault();
    if (disabled) return;
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  const hasIcons = onIcon != null || offIcon != null;
  const hasLabel = onLabel != null || offLabel != null;
  const currentIcon = checked ? onIcon : offIcon;
  const currentLabel = checked ? onLabel : offLabel;

  return (
    <Track
      id={id}
      type='button'
      role='switch'
      aria-checked={checked}
      aria-label={label}
      aria-disabled={disabled}
      onClick={handleToggle}
      disabled={disabled}
      $checked={checked}
      $onColor={onColor}
      $offColor={offColor}
      $hasLabel={hasLabel}
    >
      <Thumb aria-hidden='true' $checked={checked}>
        {hasIcons && currentIcon}
      </Thumb>

      {hasLabel && currentLabel && <InnerLabel>{currentLabel}</InnerLabel>}
    </Track>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onIcon: PropTypes.node,
  offIcon: PropTypes.node,
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Switch;
