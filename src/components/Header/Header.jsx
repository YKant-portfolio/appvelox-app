import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

import avatar from '../../assets/iconsHeader/avatar.png'
import { ReactComponent as SvgSearch } from '../../assets/iconsHeader/search.svg';
import { ReactComponent as SvgNotify } from '../../assets/iconsHeader/notify.svg';
import { ReactComponent as SvgEye } from '../../assets/iconsHeader/eye.svg';
import { ReactComponent as SvgDeploy } from '../../assets/iconsHeader/deploy.svg';

export const Header = () => {
	return (
		<div className={styles.header}>
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
				<NavLink to='/' >
					<SvgDeploy />
				</NavLink>
			</div>
		</div >
	)
}
