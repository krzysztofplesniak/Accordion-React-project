import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import Accordion from './components/Accordion';
import Header from './components/Header';
import { v4 as uuid } from 'uuid';

const App = () => {

	const [accordions, setAccordions] = useState(null);
	const [theme, setTheme] = useState('lightTheme');
	const [loading, setLoading] = useState(true);

	const defaultPort = 5001;
	const port = process.env.PORT || defaultPort;
	const env = process.env.NODE_ENV;

	// const fetchData = async () => {
	// 	let localPath = '';

	// 	if (env === 'development') {
	// 		localPath = `http://localhost:${port}/accordions`;
	// 	} else localPath = `/accordions`;

	// 	const accordionsList = await axios({
	// 		method: 'GET',
	// 		url: `http://localhost:${defaultPort}/accordions`,
	// 	});

	// 	const json = await accordionsList.data;

	// 	setAccordions(json);
	// 	setLoading(false);
	// };

	useEffect(() => {
		let isUnmount = false;

		fetch(`http://localhost:${port}/accordions`)
			.then(res => res.json())
			.then(res => {
				if (!isUnmount) {
					setAccordions(res);
					setLoading(false);
				}
			});
		return () => {
			isUnmount = true;
		}	
	}, []);

	const onHandlerTheme = () => {
		setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
	};

	return (
		<div className='container'>
			<Header theme={theme} onHandlerTheme={onHandlerTheme} />

			{loading && (accordions === null) && (
				<div className='beatLoader'>
					<BeatLoader size={50} color='red' loading />
				</div>
			)}

			{!loading && (accordions.length !== null) && (
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
