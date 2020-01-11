import React from 'react';
import { Link } from 'react-router-dom';

import styles from './side-nav-items.css'
import FontAwesome from 'react-fontawesome';

function SideNavItems() {
	const items = [
		{
			type: styles.option,
			icon: 'home',
			text: 'Home',
			link: '/',
		},
		{
			type: styles.option,
			icon: 'file-text-o',
			text: 'News',
			link: '/news',
		},
		{
			type: styles.option,
			icon: 'play',
			text: 'Videos',
			link: '/videos',
		},
		{
			type: styles.option,
			icon: 'sign-in',
			text: 'Sign in',
			link: '/sign-in',
		},
		{
			type: styles.option,
			icon: 'sign-out',
			text: 'Sign out',
			link: '/sign-out',
		},
	];

	function _renderItems() {
		return items.map((item, index) => {
			return (
				<div
					key={item.text + index}
					className={item.type}
				>
					<Link to={item.link}>
						<FontAwesome name={item.icon} />
						{item.text}
					</Link>
				</div>
			);
		});
	}

	return (
		<div>
			{_renderItems()}
		</div>
	);
};

export default SideNavItems;