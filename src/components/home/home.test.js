// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {render, cleanup, getByTestId} from 'react-testing-library';
import 'jest-dom/extend-expect'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('Home written on the page', () => {
  const {getByTestId} = render(
    <p data-testid="home">home</p>,
  );

  expect(getByTestId('home')).toHaveTextContent('home');

});