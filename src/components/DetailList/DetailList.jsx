import React, { useContext, useState } from 'react';
import { CreateCard } from '../CreateCard/CreateCard';
import { Calendar } from '../Calendar/Calendar'
import styles from './DetailList.module.css';
import { Context } from '../../context/Context';
import cn from 'classnames';
import { useTheme } from '../../hooks/useTheme';


export const DetailList = () => {
	const doctorsData = useContext(Context);
	const [renderCard, setRenderCard] = useState(doctorsData);
	const { isDark } = useTheme();
	let btnHidden = renderCard.length > 3 ? styles["hidden"] : null;

	const onShowAllCard = () => {
		setRenderCard(doctorsData);
		btnHidden = null;
	}

	return (
		<div className={styles.wrap}>
			<div className={cn(styles.wrap_btn, btnHidden)}>
				<button className={cn(styles.btn, {
					[styles.dark]: isDark
				})}
					onClick={onShowAllCard}>
					Показать все записи
				</button>
			</div>
			<div className={cn(styles.detail_list, btnHidden ? styles.show_scroll : styles.element, {
				[styles.dark]: isDark
			})}>
				<CreateCard array={renderCard} />
			</div>
			<Calendar doctorsData={doctorsData} setRenderCard={setRenderCard} hidden={btnHidden} />
		</div >
	)
}