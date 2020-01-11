import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.css';
import FontAwesome from 'react-fontawesome';

import SideNavigation from './side-navigation';

function Header({
	showNav,
	onOpenNav,
	onHideNav,
}) {
	function _renderNavBars() {
		return (
			<div className={styles.bars}>
				<FontAwesome
					name='bars'
					style={{
						color: '#ffffff',
						padding: '10px',
						cursor: 'pointer',
					}}
					onClick={onOpenNav}
				/>
			</div>
		);
	}

	function _renderLogo() {
		return (
			<Link to='/' className={styles.logo}>
				<img src='/images/nba_logo.png' alt='nba logo' />
			</Link>
		);
	}

	return (
		<header className={styles.header}>
			<SideNavigation
				showNav={showNav}
				onOpenNav={onOpenNav}
				onHideNav={onHideNav}
			/>

			<div className={styles.headerOpt}>
				{_renderNavBars()}
				{_renderLogo()}
			</div>
		</header>
	);
};

export default Header;
