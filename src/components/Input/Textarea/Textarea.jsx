import { useRef, useState } from 'react';
import { TextareaBox, Wrapper, Label, HelperText, Parent } from './styles';
import { LeftIconWrapper, RightIconWrapper } from '../Input/styles';
import { getColor, getIcon } from './helpers';
import white from '../../../colors/white';
import grey from '../../../colors/grey';
import SvgIcon from './SvgIcon';

const Textarea = ({
  label,
  onChange,
  value,
  type,
  hasError,
  name = 'textarea',
  color = 'blue',
  helperText = '',
  background = 'transparent',
  outerBackground = white,
  isDynamic,
  isResizeNone,
  rows = '2',
  cols = '20',
  leftIcon,
  rightIcon,
  placeholder,
  ...params
}) => {
  const [$isFocused, setIsFocused] = useState(false);
  const $shade = getColor(color);
  const textAreaRef = useRef(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    if (isDynamic) {
      const element = textAreaRef.current;
      if (element) {
        element.style.height = '0px';
        const scrollHeight = element.scrollHeight;
        element.style.height = `${scrollHeight}px`;
      }
    }
    onChange(e);
  };

  const iconStyles = { color: grey.m500, size: 20 };
  const leftIconRef = getIcon(leftIcon);
  const rightIconRef = getIcon(rightIcon);
  const $hasLeftIcon = !!leftIconRef;
  const $hasRightIcon = !!rightIconRef;
  const $hasError = hasError;
  const $isDynamic = isDynamic;
  const $background = background;
  const rowsObj = isDynamic ? {} : { rows };
  const textareaId = `textarea-${name}`;
  const helperId = helperText ? `${textareaId}-helper` : undefined;

  return (
    <Wrapper>
      <TextareaBox
        {...{
          type,
          name,
          $hasError,
          value,
          $isFocused,
          $shade,
          $isDynamic,
          $background,
          cols,
          $hasLeftIcon,
          $hasRightIcon,
          $isResizeNone: isResizeNone,
          ...rowsObj,
        }}
        id={textareaId}
        aria-invalid={$hasError ? true : undefined}
        aria-describedby={helperId}
        ref={textAreaRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...params}
      />
      {leftIconRef && (
        <LeftIconWrapper aria-hidden='true' style={{ top: '1.2rem', transform: 'none' }}>
          <SvgIcon svgIcon={leftIconRef} iconStyles={iconStyles} />
        </LeftIconWrapper>
      )}

      {rightIconRef && (
        <RightIconWrapper aria-hidden='true' style={{ top: '1.2rem', transform: 'none' }}>
          <SvgIcon svgIcon={rightIconRef} iconStyles={iconStyles} />
        </RightIconWrapper>
      )}
      <Parent>
        {(label || (placeholder && !value)) && (
          <Label
            as='label'
            htmlFor={textareaId}
            {...{
              $hasError,
              $isFocused,
              $shade,
              $value: value,
              $outerBackground: $isFocused || !!value ? outerBackground : background,
              $hasLeftIcon,
              $hasRightIcon,
              $onlyPh: placeholder && !label,
            }}
          >
            {label || placeholder}
          </Label>
        )}
        {helperText && (
          <HelperText id={helperId} {...{ $hasError, $isFocused, $shade, $hasLeftIcon }}>
            {helperText}
          </HelperText>
        )}
      </Parent>
    </Wrapper>
  );
};

export default Textarea;
