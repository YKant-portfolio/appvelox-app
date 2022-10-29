import React from 'react'
import styles from './DoctorCard.module.css';
import dayjs from 'dayjs';
import { Button } from '../Button/Button';

export const DoctorCard = ({ date, address, photo, name, department }) => {
	const numDay = dayjs(date).format('d');
	const arrDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',]
	const weekDay = arrDay.find((_, index) => index === +numDay);
	const numDate = dayjs(date).format(' DD.MM.YYYY ');
	const time = dayjs(date).format('|  HH:MM');

	return (
		<div className={styles.doctor_card}>
			<div className={styles.date}>{weekDay}{numDate} {time}</div>
			<div className={styles.address}>{address}</div>
			<div className={styles.doctor}>
				<img className={styles.photo} src={photo} alt="photo_doctor" />
				<div className={styles.descr}>
					<div className={styles.name}>{name}</div>
					<div className={styles.department}>{department}</div>
				</div>
			</div>
			<div className={styles.btn_wrapper}>
				<Button text="Отменить" />
			</div>
		</div>
	)
}
