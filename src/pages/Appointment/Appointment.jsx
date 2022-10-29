import React from 'react'

import { CardsList } from '../../components/CardsList/CardsList'
import { ListOfDoctors } from '../../components/ListOfDoctors/ListOfDoctors'
import { Subtitle } from '../../components/Subtitle/Subtitle'

export const Appointment = () => {
	return (
		<div>
			<Subtitle text={'Записи на прием'} />
			<ListOfDoctors />
			<Subtitle text={'Электронная карта'} />
			<CardsList />
		</div>
	)
}
