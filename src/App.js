import React from 'react';
import './index.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null;
      selectedNote: null;
      notes: null;
    }
  }

  render() {
    return(
      <div>hello</div>
    );
  }
}

export default App;
