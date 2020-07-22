import React from 'react';
import SwitchOnOff from './SwitchOnOff';

const Header = ({ onHandlerTheme }) => {
	return (
		<div className='header'>
			<div>
				<p className='header__title'>Accordion component</p>
				<p className='header__subtitle'>
					Made without any out-of-box npm package
				</p>
			</div>
			<div className='header__toggle-switch'>
				<SwitchOnOff onHandlerTheme={onHandlerTheme}/>
			</div>
		</div>
	);
};

export default Header;
