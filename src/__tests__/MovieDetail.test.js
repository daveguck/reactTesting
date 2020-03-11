import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import MovieDetail from '../movies/MovieDetail';
import { POSTER_PATH } from '../movies/MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: '1'
  }
};

console.error = jest.fn();

const movie = {
  id: '1',
  title: 'Level Up Rules!',
  backdrop_path: 'backdroppath',
  poster_path: 'posterpath',
  release_date: '2/10/20'
};

test('<MovieDetail />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movie));

  const { debug, getByTestId } = render(<MovieDetail match={match} />);

  await waitForElement(() => getByTestId('movie-title'));

  expect(getByTestId('movie-title').textContent).toBe(movie.title);
  // expect(getByTestId('backdrop').getAttribute('backdrop')).toBe(
  //   `${BACKDROP_PATH}${movie.backdrop_path}`
  // );
  expect(getByTestId('poster').getAttribute('src')).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
  expect(getByTestId('release-date').textContent).toBe(movie.release_date);
});
