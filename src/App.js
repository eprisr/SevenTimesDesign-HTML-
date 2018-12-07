import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';

class App extends React.Component {
  render() {
    return (
			<div>
				<Route exact path="/" component={Home} />
				<Route path='/portfolio' component={Portfolio} />
			</div>
		);
  }
}

export default App;