import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { getDoctorsData } from '../../service/service';
import { Context } from '../../context/context';

import styles from './App.module.css';

function App() {
	let doctorsData = getDoctorsData();
	return (
		<Context.Provider value={doctorsData}>
			<div className={styles.app} >
				<Sidebar />
				<Header />
				<Main />
			</div >
		</Context.Provider>
	);
}

export default App;
