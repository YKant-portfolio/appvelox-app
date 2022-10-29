import { Routes, Route } from 'react-router-dom';

import styles from './Main.module.css';

import { Appointment } from '../../pages/Appointment/Appointment';
import { Details } from '../../pages/Details/Details';
import { NotFound } from '../../pages/NotFound/NotFound';

export const Main = () => {
	return (
		<div className={styles.main}>
			<Routes>
				<Route exact path="/" element={<Appointment />} />
				<Route path="/details" element={<Details />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}
