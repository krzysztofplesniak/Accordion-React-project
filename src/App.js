import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import Accordion from './components/Accordion';
import Header from './components/Header';


const App = () => {

	const [accordions, setAccordions] = useState(null);
	const [theme, setTheme] = useState('lightTheme');
	const [loading, setLoading] = useState(true);

	const defaultPort = 5001;
	const port = process.env.PORT || defaultPort;
	
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
						return <Accordion key={accordion.id} accordion={accordion} />;
					})}
				</div>
			)}
		</div>
	);
};

export default App;
