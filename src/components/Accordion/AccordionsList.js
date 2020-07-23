import React from 'react';
import AccordionItem from './AccordionItem';

const AccordionsList = ({ accordions, theme }) => {
	return (
		<div className='accordions'>
			{accordions.map(accordion => (
				<AccordionItem key={accordion.id} accordion={accordion} theme={theme} />
			))}
		</div>
	);
};

export default AccordionsList;
