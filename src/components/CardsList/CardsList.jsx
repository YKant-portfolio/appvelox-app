import { ElectronicCard } from '../ElectronicCard/ElectronicCard'
import { ReactComponent as SvgInformation } from '../../assets/iconElectronCard/information.svg';
import { ReactComponent as SvgAdd } from '../../assets/iconElectronCard/add.svg';
import { ReactComponent as SvgResult } from '../../assets/iconElectronCard/result.svg';
import { ReactComponent as SvgHistory } from '../../assets/iconElectronCard/history.svg';

import styles from './CardsList.module.css';
import cn from 'classnames';
import { useTheme } from '../../hooks/useTheme';

export const CardsList = () => {
	const { isDark } = useTheme();

	return (
		<div className={styles.cards_list}>
			<ElectronicCard
				title="Информация о пациенте"
				text="">
				<SvgInformation className={styles.svg} />
				<ul className={styles.list}>
					<li className={cn(styles.item, {
						[styles.dark]: isDark
					})}><span>Ваши личные данные</span></li>
					<li className={cn(styles.item, {
						[styles.dark]: isDark
					})}><span>Рекомендации врачей</span></li>
					<li className={cn(styles.item, {
						[styles.dark]: isDark
					})}><span>История болезней</span></li>
				</ul>
			</ElectronicCard>
			<ElectronicCard
				title="Результаты анализов"
				text="Вы можете узнать здесь результаты своих анализов">
				<SvgResult />
				<ul className={styles.list}></ul>
			</ElectronicCard>
			<ElectronicCard
				title="Добавить  информацию"
				text="Добавляйте в свою электронную медицинскую карту новые данные">
				<SvgAdd />
				<ul className={styles.list}></ul>
			</ElectronicCard>
			<ElectronicCard
				title="История приемов"
				text="Вся информация о полученных услугах за все время хранится здесь">
				<SvgHistory />
				<ul className={styles.list}></ul>
			</ElectronicCard>
		</div>

	)
}
