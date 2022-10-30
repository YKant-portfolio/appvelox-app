import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { getDoctorsData } from '../../service/service';
import { Context } from '../../context/Context';

import styles from './App.module.css';
import { ThemeProvider } from '../../context/ThemeProvider';

function App() {
	let doctorsData = getDoctorsData();
	return (
		<ThemeProvider>
			<Context.Provider value={doctorsData}>
				<div className={styles.app} >
					<Sidebar />
					<Header />
					<Main />
				</div >
			</Context.Provider>
		</ThemeProvider>
	);
}

export default App;
