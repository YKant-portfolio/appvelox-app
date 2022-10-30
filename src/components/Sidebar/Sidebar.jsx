import React, { useContext } from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

import { ReactComponent as SvgProfile } from '../../assets/icons/profile.svg';
import { ReactComponent as SvgDoctor } from '../../assets/icons/doctor.svg';
import { ReactComponent as SvgMassege } from '../../assets/icons/massege.svg';
import { ReactComponent as SvgTest } from '../../assets/icons/test.svg';
import { ReactComponent as SvgInformation } from '../../assets/icons/information.svg';
import { ReactComponent as SvgHelp } from '../../assets/icons/help.svg';
import { ReactComponent as SvgAppvelox } from '../../assets/icons/appvelox.svg';

import cn from 'classnames';
import { useTheme } from '../../hooks/useTheme';

export const Sidebar = () => {
	const { isDark } = useTheme();
	return (
		<div className={cn(styles.sidebar, {
			[styles.dark]: isDark
		})}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<h3 className={styles.logo__text}>Логотип</h3>
				</div>
				<div className={styles.nav__wrap}>
					<NavLink to='/' className={styles.nav__link}>
						<SvgProfile className={styles.nav__svg} />
						Профиль
					</NavLink>
					<NavLink to='#' className={styles.nav__link}>
						<SvgDoctor className={styles.nav__svg} />
						Врачи и клиники</NavLink>
					<NavLink to='#' className={styles.nav__link}>
						<SvgMassege className={styles.nav__svg} />
						Сообщения</NavLink>
					<NavLink to='#' className={styles.nav__link}>
						<SvgTest className={styles.nav__svg} />
						Тестирование</NavLink>
					<NavLink to='#' className={styles.nav__link}>
						<SvgInformation className={styles.nav__svg} />
						Полезно знать</NavLink>
				</div>
				<div style={{ textAlign: 'center' }}>
					<button className={cn(styles.nav__btn, {
						[styles.dark]: isDark
					})}>
						Подать заявку
					</button>
				</div>
			</nav>
			<div className={styles.footer}>
				<div className={styles.footer__help}>
					<SvgHelp className={styles.nav__svg} />
					<span>Помощь</span>
				</div>
				<SvgAppvelox />
			</div>
		</div >
	);
}
