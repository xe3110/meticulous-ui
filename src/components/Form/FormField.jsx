import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled, { keyframes } from 'styled-components';
import red from '../../colors/red';

const shake = keyframes`
  0%   { transform: translateX(0); }
  20%  { transform: translateX(-6px); }
  40%  { transform: translateX(6px); }
  60%  { transform: translateX(-4px); }
  80%  { transform: translateX(4px); }
  100% { transform: translateX(0); }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  animation: ${({ $shake }) => ($shake ? shake : 'none')} 0.35s ease;
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
    const [shakeKey, setShakeKey] = useState(0);
    const errorRef = useRef(null);

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
        errorRef.current = err;
        setError(err);
        return err === null;
      },
      triggerShake: () => setShakeKey((k) => k + 1),
      scrollIntoView: () =>
        wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    }));

    const handleChange = useCallback((newValue) => {
      const val = newValue?.target !== undefined ? newValue.target.value : newValue;
      valueRef.current = val;
      setValue(val);
      compOnChangeRef.current?.(val);
      onValueChangeRef.current?.(val);

      if (errorRef.current !== null) {
        errorRef.current = null;
        setError(null);
        onValidityChangeRef.current?.(true);
      }
    }, []);

    return (
      <Wrapper ref={wrapperRef} key={shakeKey} $shake={shakeKey > 0}>
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
