import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import Accordions from './components/Accordions';
import Header from './components/Header';

const App = () => {
	const [accordions, setAccordions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [theme, setTheme] = useState('light-theme');

	const port = process.env.PORT || 3001;

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
		<div className={theme}>
			<div className={`app-container ${theme}`}>
				<Header onHandlerTheme={onHandlerTheme} theme={theme} />

				{loading && accordions.length === 0 ? (
					<div className='beatLoader'>
						<BeatLoader size={50} color='red' loading />
					</div>
				) : (
					<Accordions accordions={accordions} theme={theme} />
				)}
			</div>
		</div>
	);
};

export default App;
