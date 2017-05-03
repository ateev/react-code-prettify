import React from 'react';
import { shallow } from 'enzyme';
import Code from '../react-code-prettify.jsx';

test('render maeve input', () => {
  const component = shallow(
    <Code />
  );
  expect(component).toMatchSnapshot();
});