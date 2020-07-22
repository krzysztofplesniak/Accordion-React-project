import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import Accordion from './components/Accordion';
import Header from './components/Header';

const App = () => {
	const [accordions, setAccordions] = useState([]);
	const [theme, setTheme] = useState('light-theme');
	const [loading, setLoading] = useState(true);

	const defaultPort = 3001;
	const port = process.env.PORT || defaultPort;
	
	useEffect(() => {
		let isUnmount = false;
		setTimeout(() => {
			fetch(`http://localhost:${port}/accordions`)
				.then(res => res.json())
				.then(res => {
					if (!isUnmount) {
						setAccordions(res);
						setLoading(false);
					}
				});
		}, 1000);

		return () => {
			isUnmount = true;
		};
		// eslint-disable-next-line
	}, []);

	const onHandlerTheme = () => {
		setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
	};

	
	return (
		<div className={`app-container app-container--${theme}`}>
			<>
				<Header onHandlerTheme={onHandlerTheme}/>

				{(loading && accordions.length === 0) ? (
					<div className='beatLoader'>
						<BeatLoader size={50} color='red' loading />
					</div>
				) : (
					<div className='accordions'>
						{accordions.map(accordion => (
							<Accordion key={accordion.id} accordion={accordion} />
						))}
					</div>
				)}
			</>
		</div>
	);
};

export default App;
