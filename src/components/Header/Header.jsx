import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

import avatar from '../../assets/iconsHeader/avatar.png';
import { ReactComponent as SvgSearch } from '../../assets/iconsHeader/search.svg';
import { ReactComponent as SvgNotify } from '../../assets/iconsHeader/notify.svg';
import { ReactComponent as SvgEye } from '../../assets/iconsHeader/eye.svg';
import { ReactComponent as SvgDeploy } from '../../assets/iconsHeader/deploy.svg';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import cn from 'classnames';
import { useTheme } from '../../hooks/useTheme';


export const Header = () => {
	const { isDark, setIsDark } = useTheme();

	return (
		<div className={cn(styles.header, {
			[styles.dark]: isDark
		})}>
			<h2>Мой профиль</h2>
			<div className={styles.header__nav}>
				<NavLink to='/' >
					<SvgSearch />
				</NavLink>
				<NavLink to='/' >
					<SvgNotify />
				</NavLink>
				<NavLink to='/' >
					<SvgEye />
				</NavLink>
				<img src={avatar} alt="avatar" />
				<NavLink to='/' style={{ paddingLeft: "10px" }} >
					<SvgDeploy />
				</NavLink>
				<button className={cn(styles.header__btn,
					{ [styles.dark]: isDark })}
					onClick={() => setIsDark(!isDark)}>
					{isDark ? (<IoMoonOutline size="18px" />)
						: (<IoMoon size="18px" color="white" />)}
				</button>
			</div>
		</div >
	)
}
