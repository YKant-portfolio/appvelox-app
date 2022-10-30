import { Routes, Route } from 'react-router-dom';
import { Appointment } from '../../pages/Appointment/Appointment';
import { Details } from '../../pages/Details/Details';
import { NotFound } from '../../pages/NotFound/NotFound';

import styles from './Main.module.css';
import cn from 'classnames';
import { useTheme } from '../../hooks/useTheme';

export const Main = () => {
	const { isDark } = useTheme();
	return (
		<div className={cn(styles.main, {
			[styles.dark]: isDark
		})}>
			<Routes>
				<Route exact path="/" element={<Appointment />} />
				<Route path="/details" element={<Details />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}
