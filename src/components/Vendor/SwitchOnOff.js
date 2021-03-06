import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SwitchOnOff = ({ onHandlerTheme, color = 'grey' }) => {
	const [isSwitchOn, setIsSwitchOn] = useState(false);

	const onSwitchAction = () => {
		setIsSwitchOn(!isSwitchOn);
		onHandlerTheme();
	};

	return (
		<Form>
			<Form.Switch>
				<Form.Check
					onChange={onSwitchAction}
					type='switch'
					id='custom-switch'
					label=''
					checked={isSwitchOn}
				/>
			</Form.Switch>
		</Form>
	);
};

export default SwitchOnOff;
