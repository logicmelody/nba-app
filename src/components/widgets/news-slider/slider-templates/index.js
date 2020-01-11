import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slick from 'react-slick';

import styles from './slider-templates.css';

function SliderTemplates({
	data,
	type,
}) {
	const settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	function _renderItems() {
		switch (type) {
			case 'featured':
				return data.map((item, index) => {
					return (
						<div key={index}>
							<div className={styles.featured_item}>
								<div
									className={styles.featured_image}
									style={{
										background: `url(../images/articles/${item.image})`,
									}}
								>
									<Link to={`/articles/${item.id}`}>
										<div className={styles.featured_caption}>
											{item.title}
										</div>
									</Link>
								</div>

							</div>
						</div>
					);
				});
	
			default:
				return null;
		}
	}

	return (
		<Slick
			{...settings}
		>
			{_renderItems()}
		</Slick>
	);
};

SliderTemplates.propTypes = {
	data: PropTypes.array,
};

SliderTemplates.defaultProps = {
	data: [],
};

export default SliderTemplates;
