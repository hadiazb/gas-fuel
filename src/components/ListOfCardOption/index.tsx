import * as React from 'react';
import './style.scss';
import CardOption from '../CardOption/index';

const ListOfCardOption = () => {
	return (
		<ul className='listOption'>
			<CardOption title='' text='' size={100} option={1}/>
			<CardOption title='' text='' size={100} option={2}/>
			<CardOption title='' text='' size={100} option={3}/>
		</ul>
	);
};

export default ListOfCardOption;
