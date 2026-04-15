import { useRef } from 'react';
import _get from 'lodash-es/get';
import { UploadBtnContainer, Wrapper, PWrapper, HiddenInput } from './styles';
import white from '../../../colors/white';
import blue from '../../../colors/blue';
import grey from '../../../colors/grey';
import Link from '../../Icons/Link';
import colors from '../../../colors';
import Ripple from '../../Ripple';
import { MEDIUM, SIZE } from './constants';

const Rippled = ({ theme, children }) => <Ripple rippleColor={theme['m100']}>{children}</Ripple>;

const FileUploader = ({
  label,
  labelColor,
  theme = blue,
  size = MEDIUM,
  width,
  isLoading,
  disabled,
  prefixIcon: PrefixIcon = Link,
  suffixIcon: SuffixIcon,
  type = 'file',
  accept,
  isMultiple,
  onChange,
}) => {
  const inputRef = useRef(null);
  const { m400: $selectedColor, m500: $hoverColor, m600: $activeColor } = _get(colors, theme, blue);
  const { height: $height, width: $width, font: $font } = SIZE[size] || {};
  const txtClr = labelColor || ['white', 'yellow'].includes(theme) ? grey.m600 : white;

  const lastKeyPressRef = useRef(0);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const now = Date.now();
      if (now - lastKeyPressRef.current < 500) {
        e.stopPropagation();
        return;
      }
      lastKeyPressRef.current = now;
      if (!disabled && !isLoading) inputRef.current?.click();
    }
  };

  const btnChild = (
    <Wrapper
      {...{
        $selectedColor,
        $hoverColor,
        $height,
        $width: width || $width,
        $activeColor,
        disabled,
        $isLoading: isLoading,
      }}
      role='button'
      tabIndex={0}
      aria-disabled={disabled}
      aria-busy={isLoading}
      onKeyDown={handleKeyDown}
    >
      <HiddenInput
        ref={inputRef}
        type={type}
        accept={accept}
        multiple={isMultiple}
        disabled={disabled}
        onChange={onChange}
        tabIndex={-1}
      />
      {PrefixIcon && <PrefixIcon color={txtClr} size={$font + 19} />}
      <PWrapper
        color={txtClr}
        size={`${$font}rem`}
        $prefixIcon={!!PrefixIcon}
        $suffixIcon={!!SuffixIcon}
        $iconSize={$font + 19}
        title={label}
      >
        {label}
      </PWrapper>
      {SuffixIcon && <SuffixIcon color={txtClr} size={$font + 19} />}
    </Wrapper>
  );

  return (
    <UploadBtnContainer {...{ $height, $width: width || $width, disabled, $isLoading: isLoading }}>
      {isLoading ? btnChild : <Rippled theme={theme}>{btnChild}</Rippled>}
    </UploadBtnContainer>
  );
};

export default FileUploader;
