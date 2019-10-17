import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './layout.css';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		const {
			children,
		} = this.props;

		return (
			<div>
				Layout

				{children}
			</div>
		);
	}
}

Layout.propTypes = {

};

export default Layout;