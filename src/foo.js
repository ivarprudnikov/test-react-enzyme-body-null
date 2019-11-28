import React, { useState, createRef } from 'react';
import Form from 'react-jsonschema-form';

/**
 * Combination of ref usage in jsx and change of state,
 * In test will throw
 *
 * I do understand this depends of third party dependency `react-jsonschema-form`
 * and needs further investigation.
 * FYI this Error in test gets fixed in v2 alpha release of above dependency.
 */
const Foo = () => {

  const anyRef = createRef();
  const [hasErrors, setHasErrors] = useState(false);

  const handleError = () => {
    // this
    setHasErrors(true);
  };

  const basicSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' }
    },
    required: ['name'] // <- this
  }

  // this
  return (<Form onError={handleError} schema={basicSchema}>
    <span ref={anyRef}>whatever</span>
  </Form>);
};

export default Foo;
