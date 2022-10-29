import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import './Calendar.css';
import dayjs from 'dayjs';

import { ReactComponent as SvgNext } from '../../assets/iconsCalendar/naxt.svg';
import { ReactComponent as SvgPrev } from '../../assets/iconsCalendar/prev.svg';

const gridArea = {
	gridArea: "calendar",
}
export const Calendar = ({ doctorsData, setRenderCard }) => {
	const [value, onChange] = useState(new Date());

	const tileContent = ({ date, view }) => {
		const day = doctorsData.filter(item => {
			const date1 = dayjs(item.date).format('DD.MM.YY');
			const date2 = dayjs(date).format('DD.MM.YY');
			return date1 === date2;
		})
		if (day.length > 0) {
			return (<TileContent content={day.length} />);
		} else {
			return;
		}
	}

	const onClickDay = (e) => {
		setRenderCard(doctorsData.filter(item => {
			return dayjs(item.date).format('DD.MM') === dayjs(e).format('DD.MM');
		}))
	};

	function tileClassName({ view }) {
		return 'react-calendar__tile--border';
	}

	return (
		<div style={gridArea}>
			<ReactCalendar
				onChange={onChange}
				value={value}
				locale={'ru'}
				nextLabel={<SvgNext />}
				prevLabel={<SvgPrev />}
				tileContent={tileContent}
				tileClassName={tileClassName}
				onClickDay={onClickDay}
			/>
		</div>
	)
}

const TileContent = ({ content }) => {
	return (
		<div >
			{content}
		</div>
	);
}