import React from 'react';
import Display from './Display';


class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Display title="Hello" message="Some message"/>
      </div>
    )
  }
}

export default App;
