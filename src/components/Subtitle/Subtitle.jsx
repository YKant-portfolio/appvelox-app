import cn from 'classnames';
import styles from './Subtitle.module.css'
import { useTheme } from '../../hooks/useTheme';

export const Subtitle = ({ text, icon }) => {
	const { isDark, } = useTheme();

	return (
		<div>
			<h3 className={cn(styles.subtitle, {
				[styles.dark]: isDark
			})}>
				{icon}
				{text}
			</h3>
		</div>
	)
}
