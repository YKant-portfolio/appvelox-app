import { Subtitle } from '../../components/Subtitle/Subtitle';
import { ReactComponent as SvgArrow } from '../../assets/iconsDetails/arrow.svg';
import { Link } from 'react-router-dom';
import { DetailList } from '../../components/DetailList/DetailList';
import { useTheme } from '../../hooks/useTheme';

export const Details = () => {
	const { isDark, } = useTheme();
	const style = isDark ? 'white' : 'blak';
	return (
		<div>
			<Link to='/'>
				<Subtitle text={'Мои записи'} icon={<SvgArrow fill={style} />} />
			</Link>
			<DetailList />
		</div>
	)
}
