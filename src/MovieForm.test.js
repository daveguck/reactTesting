import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm />', () => {
  const { queryByTestId, getByText, getByLabelText, debug } = render(
    <MovieForm submitForm={onSubmit} />
  );
  expect(queryByTestId('movie-form')).toBeTruthy();

  fireEvent.change(getByLabelText('Text'), {
    target: { value: 'foobar!' }
  });

  fireEvent.click(getByText('Submit'));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith('foobar!');
});
