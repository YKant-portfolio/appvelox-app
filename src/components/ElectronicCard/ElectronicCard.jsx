import styles from './ElectronicCard.module.css';
import cn from 'classnames';
import { useTheme } from '../../hooks/useTheme';

export const ElectronicCard = ({ title, text, children }) => {
	const { isDark } = useTheme();
	return (
		<div className={cn(styles.card, {
			[styles.dark]: isDark
		})}>
			<div className={cn(styles.icon, {
				[styles.dark]: isDark
			})}>
				{children[0]}
			</div>
			<div className={styles.descr}>
				<h3 className={styles.title}>
					{title}
				</h3>
				<div className={cn(styles.divider, {
					[styles.dark]: isDark
				})} />
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
