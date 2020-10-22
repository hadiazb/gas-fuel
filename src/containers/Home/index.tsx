import * as React from 'react';
import NavigationMain from '../../components/NavigationMain/index';
import Information from '../../components/Information/index';
import Button from '../../components/Button/index';
import './style.scss';

const Home = () => {
	return (
		<section className='home'>
			<NavigationMain />
			<Information />
			<div className='home__view'>
				<Button />
			</div>
		</section>
	);
};

export default Home;
