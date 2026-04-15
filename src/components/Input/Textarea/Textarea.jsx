import _omit from 'lodash-es/omit';
import { useRef, useState } from 'react';
import { TextareaBox, Wrapper, Label, HelperText, Parent } from './styles';
import { getColor } from './helpers';
import white from '../../../colors/white';

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
        // 1. Reset height to a small value so scrollHeight can re-calculate
        // based on the actual text content inside.
        element.style.height = '0px';

        // 2. Get the scrollHeight (the "natural" height of the text)
        const scrollHeight = element.scrollHeight;

        // 3. Set the height to match the scrollHeight
        element.style.height = `${scrollHeight}px`;
      }
    }

    onChange(e);
  };

  const { placeholder } = params;

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
        {..._omit(params, 'placeholder')}
      />
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
              $onlyPh: placeholder && !label,
            }}
          >
            {label || placeholder}
          </Label>
        )}
        {helperText && (
          <HelperText id={helperId} {...{ $hasError, $isFocused, $shade }}>
            {helperText}
          </HelperText>
        )}
      </Parent>
    </Wrapper>
  );
};

export default Textarea;
