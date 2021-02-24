import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, InputHTML } from './styles';

function Input({ name, label, width, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container width={width}>
      <label>
        {label}
      </label>
      {error && <span style={{ color: '#F00' }}>{error}</span>}

      <InputHTML ref={inputRef} {...rest} />
    </Container>
  );
}

export default Input;
