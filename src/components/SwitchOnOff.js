import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
//import 'bootstrap/dist/css/bootstrap.min.css';

const SwitchOnOff = () => {
	const [isSwitchOn, setIsSwitchOn] = useState(false);

	const onSwitchAction = () => {
		setIsSwitchOn(!isSwitchOn);
	};

	return (
		<Form>
			<Form.Check
				height='20px'
				weight='20px'
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
