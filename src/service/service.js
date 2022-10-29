import doctorHarkov from '../assets/doctors/doctorHarkov.png';
import doctorMalyshko from '../assets/doctors/doctorMalyshko.png';

const doctorsData = [
	{
		id: '1',
		date: '2022-10-26T11:45:00',
		address: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
		doctor: {
			name: "Малушко Т.Н.",
			photo: doctorMalyshko,
			department: "Хирургия"
		},
	},
	{
		id: '2',
		date: '2022-10-27T11:45:00',
		address: `СПБ ГБУЗ "Городская поликлиника №26", пр. Солидарности, д. 2, к. 1, лит. А`,
		doctor: {
			name: "Харьков В. С.",
			photo: doctorHarkov,
			department: "Терапевтическое отделение"
		},
	},
	{
		id: '3',
		date: '2022-10-28T11:45:00',
		address: `СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А`,
		doctor: {
			name: "Малушко Т.Н.",
			photo: doctorMalyshko,
			department: "Хирургия"
		},
	},
	{
		id: '4',
		date: '2022-10-28T11:45:00',
		address: `СПБ ГБУЗ "Городская поликлиника №26", пр. Солидарности, д. 2, к. 1, лит. А`,
		doctor: {
			name: "Харьков В. С.",
			photo: doctorHarkov,
			department: "Терапевтическое отделение"
		},
	}, {
		id: '5',
		date: '2022-10-28T11:45:00',
		address: `СПБ ГБУЗ "Городская поликлиника №26", пр. Солидарности, д. 2, к. 1, лит. А`,
		doctor: {
			name: "Харьков В. С.",
			photo: doctorHarkov,
			department: "Терапевтическое отделение"
		},
	},
	{
		id: '6',
		date: '2022-10-28T11:45:00',
		address: `СПБ ГБУЗ "Городская поликлиника №26", пр. Солидарности, д. 2, к. 1, лит. А`,
		doctor: {
			name: "Харьков В. С.",
			photo: doctorHarkov,
			department: "Терапевтическое отделение"
		},
	},
]

export const getDoctorsData = (() => [...doctorsData]);