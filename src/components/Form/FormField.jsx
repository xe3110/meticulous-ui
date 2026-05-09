import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import red from '../../colors/red';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const LabelWrapper = styled.div`
  margin-bottom: ${({ $labelMarginBottom }) => $labelMarginBottom};
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

const Required = styled.span`
  color: ${red.m600};
  vertical-align: super;
`;

const ErrorText = styled.span`
  font-size: 1.4rem;
  color: red;
`;

const FormFieldInner = forwardRef(
  (
    {
      label,
      component: Component,
      isMandatory,
      compProps,
      validate,
      onValueChange,
      onValidityChange,
      labelMarginBottom = '0.4rem',
      sharedAllProps,
      allProps,
    },
    ref
  ) => {
    const mergedAllProps = useMemo(
      () => ({ ...sharedAllProps, ...allProps }),
      [sharedAllProps, allProps]
    );

    const { defaultValue, onChange: compOnChange, ...restCompProps } = compProps || {};

    const [value, setValue] = useState(defaultValue ?? '');
    const [error, setError] = useState(null);

    // Keep a ref so triggerValidation always sees the latest value
    const valueRef = useRef(defaultValue ?? '');
    const wrapperRef = useRef(null);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    const onValueChangeRef = useRef(onValueChange);
    onValueChangeRef.current = onValueChange;
    const onValidityChangeRef = useRef(onValidityChange);
    onValidityChangeRef.current = onValidityChange;
    const compOnChangeRef = useRef(compOnChange);
    compOnChangeRef.current = compOnChange;

    useImperativeHandle(ref, () => ({
      triggerValidation: () => {
        const err = validateRef.current?.(valueRef.current) ?? null;
        setError(err);
        return err === null;
      },
      scrollIntoView: () =>
        wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    }));

    const handleChange = useCallback((newValue) => {
      const val = newValue?.target !== undefined ? newValue.target.value : newValue;
      valueRef.current = val;
      setValue(val);
      compOnChangeRef.current?.(val);
      onValueChangeRef.current?.(val);
    }, []);

    return (
      <Wrapper ref={wrapperRef}>
        <LabelWrapper $labelMarginBottom={labelMarginBottom}>
          <Label>
            {label}
            {isMandatory && <Required aria-hidden='true'> *</Required>}
          </Label>
        </LabelWrapper>
        <Component {...mergedAllProps} {...restCompProps} value={value} onChange={handleChange} />
        {error && <ErrorText role='alert'>{error}</ErrorText>}
      </Wrapper>
    );
  }
);

FormFieldInner.displayName = 'FormField';

const FormField = memo(FormFieldInner);

export default FormField;
