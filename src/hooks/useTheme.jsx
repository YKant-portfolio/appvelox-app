import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export const useTheme = () => {
	const value = useContext(ThemeContext);
	return value;
}
