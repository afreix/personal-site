import React from 'react';
import { Link } from 'react-router';
import '../../styles/about-page.css';

const AboutHarry = () => {
	return (
		<div> 
			<h1> About Harry </h1>
				<p> Believe it or not, he is a promising young student worthy of your trust and praise. </p>

				<p> Click <Link to="/"> here </Link> to return to the homepage </p>
		</div>
		);
};

export default AboutHarry;
