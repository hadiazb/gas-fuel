import * as React from 'react';
import FuelPrice from '../FuelPrice/index';
import './style.scss';

const ListOfFuelPrice = () => {
	return (
		<ul className='priceAvg'>
			<FuelPrice
				type='Regular'
				date='01/10/20'
				price='$ 9.00'
			/>
			<FuelPrice
				type='Extra'
				date='02/10/20'
				price='$ 10.23'
			/>
			<FuelPrice
				type='Premium'
				date='03/10/20'
				price='$ 12.21'
			/>
		</ul>
	);
};

export default ListOfFuelPrice;
