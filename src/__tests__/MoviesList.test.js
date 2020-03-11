import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MoviesList from '../movies/MoviesList';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const movies = {
  results: [
    {
      id: '1',
      title: 'Level Up Rules!',
      poster_path: 'posterpath'
    },
    {
      id: '2',
      title: 'Foobar!',
      poster_path: 'posterpath'
    },
    {
      id: '3',
      title: 'Barfoo!',
      poster_path: 'posterpath'
    }
  ]
};

const movie = movies.results[0];

test('<MoviesList />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));

  const { getByTestId, queryByTestId, queryAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );

  expect(getByTestId('loading')).toBeTruthy();
  await waitForElement(() => queryAllByTestId('movie-link'));
  expect(queryByTestId('loading')).toBeFalsy();
  expect(queryAllByTestId('movie-link').length).toBe(movies.results.length);
});
