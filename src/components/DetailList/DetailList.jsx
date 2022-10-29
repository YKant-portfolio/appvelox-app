import React, { useContext, useState } from 'react';
import { CreateCard } from '../CreateCard/CreateCard';
import { Calendar } from '../Calendar/Calendar'
import styles from './DetailList.module.css';
import cn from 'classnames';
import { Context } from '../../context/context';

export const DetailList = () => {
	const doctorsData = useContext(Context);
	const [renderCard, setRenderCard] = useState(doctorsData);

	let btnHidden = renderCard.length > 3 ? styles["hidden"] : null;

	const onShowAllCard = () => {
		setRenderCard(doctorsData);
		btnHidden = null;
	}

	return (
		<div className={styles.wrap}>
			<div className={cn(styles.wrap_btn, btnHidden)}>
				<button className={styles.btn}
					onClick={onShowAllCard}>
					Показать все записи
				</button>
			</div>
			<div className={cn(styles.detail_list, btnHidden ? styles.show_scroll : styles.element)}>
				<CreateCard array={renderCard} />
			</div>
			<Calendar doctorsData={doctorsData} setRenderCard={setRenderCard} hidden={btnHidden} />
		</div >
	)
}