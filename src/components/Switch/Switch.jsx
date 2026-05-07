import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import grey from '../../colors/grey';
import green from '../../colors/green';
import white from '../../colors/white';

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
  border: 0.094rem solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
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

  background-color: ${({ $checked, $onColor, $offColor, $disabled }) => {
    if ($disabled) return grey.m300;
    return $checked ? $onColor || green.m500 : $offColor || grey.m400;
  }};

  &:focus-visible {
    outline: 0.188rem solid ${({ $onColor }) => ($onColor ? `${$onColor}88` : `${green.m500}88`)};
    outline-offset: 0.125rem;
  }
`;

const Thumb = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 10;

  ${({ $isGlass, $checked }) =>
    $isGlass
      ? css`
          width: ${TRACK_H * 1.55}rem;
          height: ${TRACK_H * 1.9}rem;
          left: -0.75rem;
          transform: translateY(-50%) translateX(${$checked ? 'var(--glass-travel, 0rem)' : '0'});
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;

          /* transparent center, rim-only glass */
          background: radial-gradient(
            circle at 50% 50%,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 55%,
            rgba(255, 255, 255, 0.04) 80%,
            rgba(255, 255, 255, 0.1) 100%
          );

          border: 0.094rem solid rgba(255, 255, 255, 0.28);

          box-shadow:
            0 0.25rem 1rem rgba(0, 0, 0, 0.35),
            0 0 0 0.125rem rgba(255, 255, 255, 0.06),
            inset 0 0.0625rem 0.125rem rgba(255, 255, 255, 0.2),
            inset 0 -0.0625rem 0.125rem rgba(0, 0, 0, 0.3);

          /* subtle top specular rim */
          &::before {
            content: '';
            position: absolute;
            top: 6%;
            left: 15%;
            width: 40%;
            height: 18%;
            background: radial-gradient(
              circle,
              rgba(255, 255, 255, 0.35) 0%,
              rgba(255, 255, 255, 0) 80%
            );
            border-radius: 50%;
            transform: rotate(-10deg);
            filter: blur(0.0625rem);
          }

          &::after {
            display: none;
          }
        `
      : css`
          width: ${THUMB_D}rem;
          height: ${THUMB_D}rem;
          left: ${$checked ? `calc(100% - ${THUMB_ZONE}rem)` : `${THUMB_PAD}rem`};
          background: ${white};
          box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.25);
        `}
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
  padding: ${({ $isGlass, $checked }) =>
    $isGlass ? ($checked ? '0 1.6rem 0 0.6rem' : '0 0.6rem 0 1.6rem') : `0 ${LABEL_PAD}rem`};
  color: rgba(255, 255, 255, 0.95);
`;

const GlassIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg path {
    stroke-width: 2.5;
  }

  filter: drop-shadow(0 0 0.25rem ${({ $color }) => $color || white})
    drop-shadow(0 0 0.625rem ${({ $color }) => $color || white})
    drop-shadow(0 0 1.25rem ${({ $color }) => $color || white})
    drop-shadow(0 0 2.5rem ${({ $color }) => ($color ? `${$color}99` : `${grey.m100}99`)})
    drop-shadow(0 0 3.75rem ${({ $color }) => ($color ? `${$color}4D` : `${grey.m200}4D`)});
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
  isGlass,
  ...rest
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const trackRef = useRef(null);
  const lastKeyPressRef = useRef(0);
  const [glassTravel, setGlassTravel] = useState(null);

  useEffect(() => {
    if (!isGlass || !trackRef.current) return;
    const el = trackRef.current;
    const update = () => {
      const rootFs = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const travel = el.getBoundingClientRect().width / rootFs - (TRACK_H * 1.2 + 0.1 - 0.75);
      setGlassTravel(`${travel.toFixed(4)}rem`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isGlass]);

  const handleToggle = (e) => {
    e.preventDefault();
    if (disabled) return;
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.repeat) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      if (!disabled) {
        const next = !checked;
        if (!isControlled) setInternalChecked(next);
        onChange?.(next);
      }
    }
  };

  const hasIcons = onIcon != null || offIcon != null;
  const hasLabel = onLabel != null || offLabel != null;
  const currentIcon = checked ? onIcon : offIcon;
  const currentLabel = checked ? onLabel : offLabel;

  return (
    <Track
      {...rest}
      ref={trackRef}
      id={id}
      type='button'
      role='switch'
      aria-checked={checked}
      aria-label={label || currentLabel || undefined}
      aria-disabled={disabled || undefined}
      onClick={handleToggle}
      onKeyDown={keyDownHandler}
      $checked={checked}
      $disabled={disabled}
      $onColor={onColor}
      $offColor={offColor}
      $hasLabel={hasLabel}
      style={glassTravel != null ? { ...rest.style, '--glass-travel': glassTravel } : rest.style}
    >
      <Thumb aria-hidden='true' $checked={checked} $isGlass={isGlass}>
        {isGlass ? (
          <GlassIcon $color={checked ? onColor : offColor}>{currentIcon}</GlassIcon>
        ) : (
          hasIcons && currentIcon
        )}
      </Thumb>

      {hasLabel && currentLabel && (
        <InnerLabel $isGlass={isGlass} $checked={checked} aria-live='polite' aria-atomic='true'>
          {currentLabel}
        </InnerLabel>
      )}
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
  isGlass: PropTypes.bool,
};

export default Switch;
