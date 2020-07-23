import React, { useState, useEffect } from 'react';
import AccordionsList from './AccordionsList';
import Spinner from '../Vendor/Spinner';

const Accordions = ({ theme = 'light-theme', spinner = false }) => {
	const [accordions, setAccordions] = useState([]);
	const [loading, setLoading] = useState(true);
	const port = process.env.PORT || 3001;
	
	useEffect(() => {
		let isUnmount = false;
		let serverpath = '';
		const env = process.env.NODE_ENV;
		console.log('Gdzie pyta apka???', env ,' ',port);
		if (env === 'development') {
			serverpath = `http://localhost:${port}/accordions`;
		} else {
			serverpath = '/accordions';
		}

		setTimeout(() => {
			fetch(serverpath)
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

	return (
		<>
			{spinner && loading ? (
				<Spinner />
			) : (
				<AccordionsList accordions={accordions} theme={theme} />
			)}
		</>
	);
};

export default Accordions;
