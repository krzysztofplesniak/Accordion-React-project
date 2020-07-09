import React, { useState, useRef } from 'react';
import Chevron from './Chevron';

const Accordion = ({ accordion: { title, subtitle, content } }) => {
	const [openAccordion, setToogle] = useState('');
	const [contentHeight, setContentHeight] = useState('0px');
	const contentReference = useRef(null);

	const onClickHandlerToogle = () => {
		setToogle(openAccordion === '' ? 'accordion--open' : '');
		setContentHeight(
			openAccordion === ''
				? `${contentReference.current.scrollHeight}px`
				: '0px'
		);
	};

	return (
		<div className='container container--accordion'>
			<div className={`accordion`}>
				<button className='accordion__button' onClick={onClickHandlerToogle}>
					<div className='accordion__info'>
						<p className='accordion__info-text accordion--title'>{title}</p>
						<p className='accordion__info-text accordion--subtitle'>
							{subtitle}
						</p>
					</div>
					<div className='accordion__icon'>
						<Chevron />
					</div>
				</button>
				<div
					className={`accordion__content ${openAccordion}`}
					ref={contentReference}
					style={{ maxHeight: `${contentHeight}` }}>
					<p className='accordion__text'>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
