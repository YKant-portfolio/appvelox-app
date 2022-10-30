import React, { useContext } from 'react';
import { CreateCard } from '../CreateCard/CreateCard';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import styles from './ListOfDoctors.module.css';

import cn from 'classnames';
import { useTheme } from '../../hooks/useTheme';

export const ListOfDoctors = () => {
	const doctorsData = useContext(Context);
	const doctorsDataAppointment = doctorsData.slice(0, 2);
	const { isDark } = useTheme();

	return (
		<div className={styles.wrap_style}>
			<CreateCard array={doctorsDataAppointment} flex={{ display: 'flex' }} />
			<Link className={cn(styles.link, { [styles.dark]: isDark })} to='/details'> <span className={cn(styles.span, {
				[styles.dark]: isDark
			})} >Еще 3 записи </span>Подробнее </Link>
		</div>
	)
}

