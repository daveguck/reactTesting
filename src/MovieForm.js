import React, { useState } from 'react';

const MovieForm = ({ submitForm }) => {
  const [text, setText] = useState('');

  return (
    <form data-testid='movie-form' onSubmit={() => submitForm(text)}>
      <label htmlFor='text'>
        Text
        <input type='text' id='text' onChange={e => setText(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default MovieForm;
