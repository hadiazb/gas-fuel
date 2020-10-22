import * as React from 'react';
import './style.scss';
import ListOfFuelPrice from '../ListOfFuelPrice/index';
import ListOfCardOption from '../ListOfCardOption/index';

const Information = () => {
	return (
		<section className='information'>
			<ListOfFuelPrice />
			<ListOfCardOption />
		</section>
	);
};

export default Information;
