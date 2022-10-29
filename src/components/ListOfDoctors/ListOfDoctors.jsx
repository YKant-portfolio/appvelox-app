import React, { useContext } from 'react';
import { CreateCard } from '../CreateCard/CreateCard';
import { Link } from 'react-router-dom'
import { Context } from '../../context/context';
import styles from './ListOfDoctors.module.css';

export const ListOfDoctors = () => {
	const doctorsData = useContext(Context);
	const doctorsDataAppointment = doctorsData.slice(0, 2);

	return (
		<div className={styles.wrap_style}>
			<CreateCard array={doctorsDataAppointment} flex={{ display: 'flex' }} />
			<Link className={styles.link} to='/details'> <span className={styles.span} >Еще 3 записи </span>Подробнее </Link>
		</div>
	)
}

