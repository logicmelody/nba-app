import React from 'react';

import SideNav from 'react-simple-sidenav';
import SideNavItems from './side-nav-items';

function SideNavigation({
	showNav,
	onOpenNav,
	onHideNav,
}) {
	return (
		<div>
			<SideNav
				showNav={showNav}
				onOpenNav={onOpenNav}
				onHideNav={onHideNav}
				navStyle={{
					background: '#242424',
					maxWidth: '220px',
				}}
			>
				<SideNavItems />
			</SideNav>
		</div>
	);
};

export default SideNavigation;
