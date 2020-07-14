import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import Accordion from './components/Accordion';
import Header from './components/Header';
import { v4 as uuid } from 'uuid';

const App = () => {
	const [accordions, setAccordions] = useState([]);
	const [theme, setTheme] = useState('lightTheme');
	const [loading, setLoading] = useState(true);
	
	const port = process.env.PORT || 8080;
	const env = process.env.NODE_ENV;
	let urlPath = '';

	if (env === 'development') {
		urlPath = 'http://localhost:3000';
	}
	
	const fetchData = async () => {
		const accordionsList = await axios({
			method: 'GET',
			url: `${urlPath}/accordions`,
		});

		const json = await accordionsList;
		setAccordions(json.data);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const onHandlerTheme = () => {
		setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
	};

	return (
		<div className='container'>
			<Header theme={theme} onHandlerTheme={onHandlerTheme} />
				{loading && accordions ? (
					<div className='beatLoader'>
						<BeatLoader size={50} color='red' loading />
					</div>
				) : (
					<div className='accordions'>
						{accordions.map(accordion => {
							return <Accordion key={uuid()} accordion={accordion} />;
						})}
					</div>
				)}
		</div>
	);
};

export default App;
