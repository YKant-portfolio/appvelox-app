import style from './Subtitle.module.css'

export const Subtitle = ({ text, icon }) => {
	return (
		<div>
			<h3 className={style.subtitle}>
				{icon}{text}
			</h3>
		</div>
	)
}
