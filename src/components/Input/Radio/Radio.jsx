import P from '../../Typography/P';
import blue from '../../../colors/blue';
import styled, { css } from 'styled-components';
import grey from '../../../colors/grey';

const Circle = styled.div`
  position: absolute;
  width: 1.12rem;
  height: 1.12rem;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ $isSelected, $shade }) => ($isSelected ? $shade : 'transparent')};
  transition: background-color 0.35s ease;
`;

const CircleBorder = styled.div`
  width: 1.76rem;
  height: 1.76rem;
  border: 1px solid ${({ $isSelected, $shade }) => ($isSelected ? $shade : grey.m900)};
  border-radius: 50%;
  position: relative;
  transition:
    border-color 0.5s ease,
    box-shadow 0.5s ease;
`;

const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  opacity: 0;
  margin: 0;
`;

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1.28rem;
  width: max-content;

  &:focus-within ${CircleBorder} {
    box-shadow: 0 0 0 1px ${({ $focusShade }) => $focusShade || grey.m900};
  }

  ${({ $disabled }) =>
    $disabled
      ? css`
          pointer-events: none;
          opacity: 0.4;
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
        `}
`;

const Radio = ({
  label,
  value,
  name,
  color,
  textColor,
  isSelected,
  disabled,
  onChange,
  ...rest
}) => {
  const innerShade = color?.m500 ?? blue.m500;
  const outerShade = color?.m800 ?? blue.m800;

  const changeHandler = () => onChange(value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!disabled) onChange(value);
    }
  };

  return (
    <Wrapper $disabled={disabled} $focusShade={outerShade} {...rest}>
      <HiddenInput
        type='radio'
        name={name}
        value={value}
        checked={isSelected}
        disabled={disabled}
        onChange={changeHandler}
        onKeyDown={handleKeyDown}
      />
      <CircleBorder aria-hidden='true' $isSelected={isSelected} $shade={outerShade}>
        <Circle $isSelected={isSelected} $shade={innerShade} />
      </CircleBorder>
      <P color={textColor} size='1.92rem'>
        {label}
      </P>
    </Wrapper>
  );
};

export default Radio;
