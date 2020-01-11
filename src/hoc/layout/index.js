import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './layout.css';

import Header from '../../components/header';
import Footer from '../../components/footer';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showNav: false,
		};
	}

	_handleOpenNav = () => {
		this.setState({
			showNav: true,
		});
	}

	_handleHideNav = () => {
		this.setState({
			showNav: false,
		});
	}

	render() {
		const {
			_handleOpenNav,
			_handleHideNav,
		} = this;

		const {
			children,
		} = this.props;

		const {
			showNav,
		} = this.state;

		return (
			<div>
				<Header
					showNav={showNav}
					onOpenNav={_handleOpenNav}
					onHideNav={_handleHideNav}
				/>

				{children}

				<Footer />
			</div>
		);
	}
}

Layout.propTypes = {

};

export default Layout;