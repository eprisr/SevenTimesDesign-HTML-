import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        {/* <Portfolio /> */}
      </React.Fragment>
    );
  }
}

export default App;