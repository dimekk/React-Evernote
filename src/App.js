import React from 'react';
import './index.css';

const firebase = require('firebase');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  render() {
    return(
      <div>hello</div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot();
  }
}

export default App;
