import React, { useState } from 'react';
import Accordions from './components/Accordion/Accordions';
import Header from './components/Layout/Header';
import Layout from './components/Layout/Layout';

const App = () => {
	const [theme, setTheme] = useState('light-theme');

	const onHandlerTheme = () => {
		setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
	};

	return (
		<Layout theme={theme}>
			<Header onHandlerTheme={onHandlerTheme} theme={theme} />
			<Accordions theme={theme} />
		</Layout>
	);
};

export default App;
