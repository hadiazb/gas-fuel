import * as React from 'react';
import './style.scss';

type fuelPriceProps = {
	type: string,
	date: string,
	price: string,
};

const FuelPrice = ({
	type,
	date,
	price,
}: fuelPriceProps) => {
	return (
		<li className='price'>
			<div className='price__head'>
				<h3 className='price__head-property'>
					{type ? type : 'Magna'}
				</h3>
				<h4 className='price__head-value'>
					{date ? date : '20/10/2020'}
				</h4>
			</div>
			<div className='price__footer'>
				<h3 className='price__footer-property'>
					{price ? price : '$ 9.00'}
				</h3>
				<h4 className='price__footer-value'>Average Price</h4>
			</div>
		</li>
	);
};

export default FuelPrice;
