import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, RadioHTML } from './styles';

function Radio({ name,  option, width, ...rest }) {
  const buttonRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: buttonRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container width={width}>

      <label>
        {option}
        {error && <span style={{ color: '#F00' }}>{error}</span>}
      </label>

      <RadioHTML ref={buttonRef} {...rest} />

    </Container>
  );
}

export default Radio;
