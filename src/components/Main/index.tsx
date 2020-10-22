import * as React from 'react';
import { Link } from 'react-router-dom';

type mainProps = {
	optionOne: string,
	optionTwo: string,
	optionThree: string,
};

const Main = ({
	optionOne,
	optionTwo,
	optionThree,
}: mainProps) => {
	return (
		<nav className='nav'>
			<img
				src='https://firebasestorage.googleapis.com/v0/b/gasprice-85c9b.appspot.com/o/Foundations%2FLogos%2FlogoGas.svg?alt=media&token=ec2caaf6-1a0a-406b-88dc-f3ed17b853cd'
				alt='This is a Logo'
				className='nav__img'
			/>
			<ul className='nav__list'>
				<li className='item'>
					<Link to='/error'>
						<h3 className='item__title'>
							{optionOne ? optionOne : 'ABOUT'}
						</h3>
					</Link>
				</li>
				<li className='item'>
					<Link to='/login'>
						<h3 className='item__title'>
							{optionTwo ? optionTwo : 'LOGIN'}
						</h3>
					</Link>
				</li>
				<li className='item'>
					<Link to='/register'>
						<h3 className='item__title'>
							{optionThree ? optionThree : 'REGISTER'}
						</h3>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Main;
