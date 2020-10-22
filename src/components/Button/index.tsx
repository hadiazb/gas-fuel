import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { IoMdLeaf } from 'react-icons/io';

const Button = () => {
	return (
		<div className='button'>
			<div className='button__icon'>
				<Link to='/'>
					<IoMdLeaf size={25} />
				</Link>
			</div>
			<h6 className='button__title'>Conoce más</h6>
		</div>
	);
};

export default Button;
