import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Foo from './foo';

it('should not throw and complain about null body', () => {
  const wrapper = mount(<Foo />);
  const form = wrapper.find('form');
  expect(form).toHaveLength(1);
  act(() => {
    form.simulate('submit');
  });
  // at this point there will be
  //
  // ~/test-react-enzyme-body-null/node_modules/react-dom/cjs/react-dom.development.js:12212
  //   throw error;
  //   ^
  // TypeError: Cannot read property 'body' of null
});
