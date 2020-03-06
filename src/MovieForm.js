import React, { Component } from 'react';

export default class MovieForm extends Component {
  state = {
    text: ''
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;
    return (
      <form data-testid='movie-form' onSubmit={() => console.log('clicked')}>
        <input type='text' />
        <button>Submit</button>
      </form>
    );
  }
}
