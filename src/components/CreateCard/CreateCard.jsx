import React from 'react';
import { DoctorCard } from '../DoctorCard/DoctorCard';

export const CreateCard = ({ array, flex }) => {

	const cards = array.map(card => {
		return (<DoctorCard
			key={card.id}
			date={card.date}
			address={card.address}
			photo={card.doctor.photo}
			name={card.doctor.name}
			department={card.doctor.department} />
		)
	})
	return (
		<div style={flex}>
			{cards}
		</div >
	)
}
