import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/home';

class Routes extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
			</Layout>
		);
	}
}

export default Routes;
