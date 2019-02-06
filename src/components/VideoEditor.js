import React, { Component } from 'react';


export default class VideoEditor extends Component {
  state = {
    url: ''
  };

  handleChange = ({ target }) => {
    const { name, defaultValue } = target;
    this.setState({ [name]: defaultValue });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.url);
    // this.setState({ url: '' });
  };

  render() {
    const { url } = this.state;

    return (  
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          defaultValue={url}
          onChange={this.handleChange}
        />
        <button>Go</button>
      </form>
      
    );
  }
}
