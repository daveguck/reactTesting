import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MovieDetail from './MovieDetail';

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

test('<MovieDetail />', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: '1',
        title: 'Level Up Rules!'
      }
    })
  );

  const { debug } = render(<MovieDetail match={match} />);
  debug();
});
