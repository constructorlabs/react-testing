import React from 'react';
import DisplayMovie from './DisplayMovie';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <DisplayMovie />
      </div>
    )
  }
}

export default App;
