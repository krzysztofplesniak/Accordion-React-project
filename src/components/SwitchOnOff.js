import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

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
				checked={isSwitchOn}
			/>
		</Form>
	);
};

export default SwitchOnOff;
