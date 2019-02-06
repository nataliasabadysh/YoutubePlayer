import React, { Component } from 'react';

export default class NoteEditor extends Component {
  state = {
    url: ''
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.url);

    this.setState({ url: '' });
  };

  render() {
    const { url } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          value={url}
          onChange={this.handleChange}
        />
        <button>Go</button>
      </form>
    );
  }
}
