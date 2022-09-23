import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from './index';

class App extends Component {
  render(){
    return(
      <div>
          <Axios />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
