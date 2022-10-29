import React from 'react'
import styles from './ElectronicCard.module.css';

export const ElectronicCard = ({ title, text, children }) => {

	return (
		<div className={styles.card}>
			<div className={styles.icon}>
				{children[0]}
			</div>
			<div className={styles.descr}>
				<h3 className={styles.title}>
					{title}
				</h3>
				<div className={styles.divider} />
				<div className={styles.text}>
					{text}
				</div>
				<div className={styles.list}>
					{children[1]}
				</div>
			</div>
		</div>
	)
}
