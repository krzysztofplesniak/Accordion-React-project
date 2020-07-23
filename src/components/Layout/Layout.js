import React from 'react';

const Layout = ({ theme, children }) => {
	return (
		<div className={theme}>
			<div className={`app-container ${theme}`}>{children}</div>
		</div>
	);
};

export default Layout;
