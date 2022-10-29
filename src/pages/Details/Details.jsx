import React from 'react'
import { Subtitle } from '../../components/Subtitle/Subtitle';

import { ReactComponent as SvgArrow } from '../../assets/iconsDetails/arrow.svg';
import { Link } from 'react-router-dom';
import { DetailList } from '../../components/DetailList/DetailList';

export const Details = () => {
	return (
		<div>
			<Link to='/'>
				<Subtitle text={'Мои записи'} icon={<SvgArrow />} />
			</Link>
			<DetailList />
		</div>
	)
}
