import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider-templates';

class NewsSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			news: [],
		};
	}

	render() {
		return (
			<div>
				<SliderTemplates
					data={this.state.news}
					type='featured'
				/>
			</div>
		);
	}

	componentDidMount() {
		axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
			.then(response => {
				this.setState({
					news: response.data,
				})
			});
	}
}

export default NewsSlider;
