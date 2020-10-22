import * as React from 'react';
import './style.scss';
import { RiGasStationLine } from 'react-icons/ri';
import { MdTextsms } from 'react-icons/all';
import { AiOutlineAreaChart } from 'react-icons/ai';

type optionProps = {
	title: string;
	size: number;
	text: string;
	option: number;
};

const CardOption = ({
	title,
	size,
	text,
	option,
}: optionProps) => {
	const putContent = (option: number) => {
		switch (option) {
			case 1:
				return <RiGasStationLine size={size ? size : 100} />;
			case 2:
				return <MdTextsms size={size ? size : 100} />;
			case 3:
				return <AiOutlineAreaChart size={size ? size : 100} />;

			default:
				<RiGasStationLine size={size ? size : 100} />;
				break;
		}
	};

	return (
		<li className='option'>
			<div className='option__head'>
				<h1 className='option__head-icon'>
					{putContent(option)}
				</h1>
				<h6 className='option_head-title'>
					{title ? title : 'Title Option'}
				</h6>
			</div>
			<div className='option__footer'>
				<p className='option__footer-paragraph'>
					{text
						? text
						: `Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Reprehenderit ea eveniet expedita facilis culpa
					nulla in perspiciatis consequatur quam distinctio?`}
				</p>
			</div>
		</li>
	);
};

export default CardOption;
