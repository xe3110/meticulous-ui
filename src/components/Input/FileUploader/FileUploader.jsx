import { useRef } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../Spinner/Spinner';
import {
  UploadBtnContainer,
  Wrapper,
  PWrapper,
  HiddenInput,
  SpinnerWrapper,
  ContentWrapper,
} from './styles';
import white from '../../../colors/white';
import blue from '../../../colors/blue';
import grey from '../../../colors/grey';
import Link from '../../Icons/Link';
import colors from '../../../colors/colorMap';
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
  ...rest
}) => {
  const inputRef = useRef(null);
  const { m400: $selectedColor, m500: $hoverColor, m600: $activeColor } = colors[theme] ?? blue;
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
      tabIndex={0}
      aria-disabled={disabled}
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
      <SpinnerWrapper $isLoading={isLoading}>
        <Spinner size='small' color={txtClr} />
      </SpinnerWrapper>
      <ContentWrapper $isLoading={isLoading}>
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
      </ContentWrapper>
    </Wrapper>
  );

  return (
    <UploadBtnContainer {...{ $height, disabled, $isLoading: isLoading }} {...rest}>
      {isLoading || disabled ? btnChild : <Rippled theme={theme}>{btnChild}</Rippled>}
    </UploadBtnContainer>
  );
};

FileUploader.propTypes = {
  /** Button label text */
  label: PropTypes.string,
  /** Override the label text color */
  labelColor: PropTypes.string,
  /** Color theme key. Defaults to 'blue' */
  theme: PropTypes.string,
  /** Button size variant: 'small', 'medium', 'large', or 'ex-large'. Defaults to 'medium' */
  size: PropTypes.string,
  /** Override the button width */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Shows a spinner and disables interaction while true */
  isLoading: PropTypes.bool,
  /** Disables the file uploader */
  disabled: PropTypes.bool,
  /** Icon component rendered before the label. Defaults to the Link icon */
  prefixIcon: PropTypes.elementType,
  /** Icon component rendered after the label */
  suffixIcon: PropTypes.elementType,
  /** Input type attribute. Defaults to 'file' */
  type: PropTypes.string,
  /** Accepted file types (passed to the hidden input) */
  accept: PropTypes.string,
  /** Allows selecting multiple files */
  isMultiple: PropTypes.bool,
  /** Called when files are selected */
  onChange: PropTypes.func,
};

export default FileUploader;
