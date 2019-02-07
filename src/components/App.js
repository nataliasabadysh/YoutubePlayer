import React, { Component } from 'react';
import v4 from 'uuid/v4';
// 
import VideoList from './VideoList';
import VideoEditor from './VideoEditor';

// Instruments
import '../styles.module.css';

export default class App extends Component {
  state = {
    histories: [],
  };

  handleAddNote = url => {
    this.setState(prevState => ({
      histories: [{ id: v4(), url }, ...prevState.histories]
    }));
  };
  render() {
    const { histories} = this.state;

    return (
      <div>
        <h1>Play Video</h1>
        <VideoEditor onSubmit={this.handleAddNote} />
        <VideoList histories={histories} />
      </div>
    );
  }
}