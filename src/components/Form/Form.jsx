import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import FormField from './FormField';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`;

const SubmitWrapper = styled.div`
  align-self: flex-start;
`;

const getInitialValidity = (fields) =>
  Object.fromEntries(
    fields.map(({ id, validate, compProps }) => {
      if (!validate) return [id, true];
      return [id, validate(compProps?.defaultValue ?? '') === null];
    })
  );

const Form = forwardRef(
  (
    {
      fields = [],
      allProps: sharedAllProps = {},
      onSubmit,
      submitLabel = 'Submit',
      disableUntilValid = false,
      gap = '2rem',
      labelMarginBottom = '0.4rem',
      ...rest
    },
    ref
  ) => {
    const valuesRef = useRef(
      Object.fromEntries(fields.map(({ id, compProps }) => [id, compProps?.defaultValue ?? '']))
    );

    // Stable per-field value callbacks
    const fieldCallbacksRef = useRef({});
    const getFieldCallback = useCallback((id) => {
      if (!fieldCallbacksRef.current[id]) {
        fieldCallbacksRef.current[id] = (value) => {
          valuesRef.current[id] = value;
        };
      }
      return fieldCallbacksRef.current[id];
    }, []);

    // Validity tracking (drives disableUntilValid)
    const [validityMap, setValidityMap] = useState(() => getInitialValidity(fields));
    const isAllValid = Object.values(validityMap).every(Boolean);

    const validityCallbacksRef = useRef({});
    const getValidityCallback = useCallback((id) => {
      if (!validityCallbacksRef.current[id]) {
        validityCallbacksRef.current[id] = (isValid) => {
          setValidityMap((prev) => ({ ...prev, [id]: isValid }));
        };
      }
      return validityCallbacksRef.current[id];
    }, []);

    // Per-field imperative refs (for submit-time validation + scroll)
    const fieldRefsMap = useRef({});
    const getFieldRef = useCallback((id) => {
      if (!fieldRefsMap.current[id]) {
        fieldRefsMap.current[id] = { current: null };
      }
      return fieldRefsMap.current[id];
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        getValues: () => ({ ...valuesRef.current }),
      }),
      []
    );

    const handleSubmit = useCallback(
      (e) => {
        e.preventDefault();

        let firstInvalidId = null;
        const newValidity = {};

        for (const { id } of fields) {
          const fieldRef = fieldRefsMap.current[id];
          const isValid = fieldRef?.current?.triggerValidation() ?? true;
          newValidity[id] = isValid;
          if (!isValid && !firstInvalidId) firstInvalidId = id;
        }

        setValidityMap(newValidity);

        if (firstInvalidId) {
          const fieldRef = fieldRefsMap.current[firstInvalidId]?.current;
          fieldRef?.scrollIntoView();
          setTimeout(() => fieldRef?.triggerShake(), 500);
          return;
        }

        onSubmit?.({ ...valuesRef.current });
      },
      [fields, onSubmit]
    );

    return (
      <StyledForm onSubmit={handleSubmit} $gap={gap} noValidate {...rest}>
        {fields.map(({ id, label, component, isMandatory, allProps, compProps, validate }) => (
          <FormField
            key={id}
            ref={getFieldRef(id)}
            label={label}
            component={component}
            isMandatory={isMandatory}
            sharedAllProps={sharedAllProps}
            allProps={allProps}
            compProps={compProps}
            validate={validate}
            onValueChange={getFieldCallback(id)}
            onValidityChange={getValidityCallback(id)}
            labelMarginBottom={labelMarginBottom}
          />
        ))}
        {onSubmit && (
          <SubmitWrapper>
            <Button type='submit' disabled={disableUntilValid && !isAllValid}>
              {submitLabel}
            </Button>
          </SubmitWrapper>
        )}
      </StyledForm>
    );
  }
);

Form.displayName = 'Form';

export default Form;
