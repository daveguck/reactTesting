import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewMovie from '../movies/NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const { getByTestId, queryByTestId, container } = render(<NewMovie />);
  expect(getByTestId('page-title').textContent).toBe('New Movie');
  expect(queryByTestId('movie-form')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
