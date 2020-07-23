import React from 'react';
import { BeatLoader } from 'react-spinners';

const Spinner = () => {
	return (
		<div className='beatLoader'>
			<BeatLoader size={50} color='red' loading />
		</div>
	);
};

export default Spinner;
