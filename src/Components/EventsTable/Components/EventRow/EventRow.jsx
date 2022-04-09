import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import './EventRow.scss';

export const EventRow = ({ id }) => {

	const event = useSelector((state) => state.events.list[id]);

	const { startTimeDate, endTimeDate, description, device, zoneOfDevice, colorCode, actionToDo } = event;

	const markup = useMemo(() =>
	(<div className='events-table-row'>

		<div className='row-item column-start-time-date'>
			<span className='start-time-date'>{startTimeDate}</span>
		</div>

		<div className='row-item column-end-time-date'>
			<span className='end-time-date'>{endTimeDate}</span>
		</div>

		<div className='row-item column-description'>
			<span className='description'>{description}</span>
		</div>

		<div className='row-item column-device'>
			<span className='device'>{device}</span>
		</div>

		<div className='row-item column-zone-of-device'>
			<span className='zone-of-device'>{zoneOfDevice}</span>
		</div>

		<div className='row-item column-color-code'>
			<span className='color-code'>{colorCode}</span>
		</div>

		<div className='row-item column-action-to-do'>
			<span className='action-to-do'>{actionToDo}</span>
		</div>

	</div>), [startTimeDate, endTimeDate, description, device, zoneOfDevice, colorCode, actionToDo]);

	return markup;
}