import * as React from 'react';
import Main from '../Main/index';
import './style.scss';

const NavigationMain = () => {
	return (
		<header className='header container'>
			<Main
				optionOne='ABOUT'
				optionTwo='LOGIN'
				optionThree='REGISTER'
			/>
		</header>
	);
};

export default NavigationMain;
