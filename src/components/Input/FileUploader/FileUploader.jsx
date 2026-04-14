import { useRef } from 'react';
import _get from 'lodash-es/get';
import { UploadBtnContainer, Wrapper, PWrapper, HiddenInput } from './styles';
import white from '../../../colors/white';
import blue from '../../../colors/blue';
import Link from '../../Icons/Link';
import colors from '../../../colors';
import Ripple from '../../Ripple';
import { MEDIUM, SIZE } from './constants';

const Rippled = ({ theme, children }) => <Ripple rippleColor={theme['m100']}>{children}</Ripple>;

const FileUploader = ({
  label,
  labelColor = white,
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

  const handleClick = () => {
    if (!disabled && !isLoading) inputRef.current?.click();
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
        isLoading,
      }}
      type='button'
      onClick={handleClick}
    >
      {PrefixIcon && <PrefixIcon color={labelColor} size={$font + 19} />}
      <PWrapper
        color={labelColor}
        size={`${$font}rem`}
        $prefixIcon={!!PrefixIcon}
        $suffixIcon={!!SuffixIcon}
        $iconSize={$font + 19}
        title={label}
      >
        {label}
      </PWrapper>
      {SuffixIcon && <SuffixIcon color={labelColor} size={$font + 19} />}
    </Wrapper>
  );

  return (
    <UploadBtnContainer {...{ $height, $width: width || $width, disabled, $isLoading: isLoading }}>
      <HiddenInput
        ref={inputRef}
        type={type}
        accept={accept}
        multiple={isMultiple}
        disabled={disabled}
        onChange={onChange}
      />
      {isLoading ? btnChild : <Rippled theme={theme}>{btnChild}</Rippled>}
    </UploadBtnContainer>
  );
};

export default FileUploader;
