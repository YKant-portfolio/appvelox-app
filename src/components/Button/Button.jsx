import styles from './Button.module.css';
import cn from 'classnames';
import { useTheme } from '../../hooks/useTheme';


export const Button = ({ text }) => {
	const { isDark } = useTheme();
	return (
		<button className={cn(styles.button, { [styles.dark]: isDark })}>
			{text}
		</button>
	);
}

