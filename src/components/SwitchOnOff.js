import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SwitchOnOff = ({ onHandlerTheme }) => {
	const [isSwitchOn, setIsSwitchOn] = useState(false);

	const onSwitchAction = () => {
		setIsSwitchOn(!isSwitchOn);
		onHandlerTheme();
	};

	return (
		<Form>
			<Form.Check
				onChange={onSwitchAction}
				type='switch'
				id='custom-switch'
				//label='On/Off'
				checked={isSwitchOn}
			/>
		</Form>
	);
};

export default SwitchOnOff;
