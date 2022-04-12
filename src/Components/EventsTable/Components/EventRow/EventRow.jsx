import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import './EventRow.scss';

export const EventRow = ({ id }) => {

	const event = useSelector((state) => state.events.list[id]);

	const { startTimeDate, endTimeDate, description, device, zoneOfDevice, colorCode, actionToDo } = event;

	const columnsWidth = useSelector((state) => state.events.columnsWidth);

	const markup = useMemo(() =>
	(<div className='events-table-row'>

		<div className='row-item column-start-time-date' style={{ width: `${columnsWidth.startTimeDateWidth}px` }}>
			<span className='start-time-date'>{startTimeDate}</span>
		</div>

		<div className='row-item column-end-time-date' style={{ width: `${columnsWidth.endTimeDateWidth}px` }}>
			<span className='end-time-date'>{endTimeDate}</span>
		</div>

		<div className='row-item column-description' style={{ width: `${columnsWidth.descriptionWidth}px` }}>
			<span className='description'>{description}</span>
		</div>

		<div className='row-item column-device' style={{ width: `${columnsWidth.deviceWidth}px` }}>
			<span className='device'>{device}</span>
		</div>

		<div className='row-item column-zone-of-device' style={{ width: `${columnsWidth.zoneOfDeviceWidth}px` }}>
			<span className='zone-of-device'>{zoneOfDevice}</span>
		</div>

		<div className='row-item column-color-code' style={{ width: `${columnsWidth.colorCodeWidth}px` }}>
			<span className='color-code'>{colorCode}</span>
		</div>

		<div className='row-item column-action-to-do' style={{ width: `${columnsWidth.actionToDoWidth}px` }}>
			<span className='action-to-do'>{actionToDo}</span>
		</div>

	</div>), [startTimeDate, endTimeDate, description, device, zoneOfDevice, colorCode, actionToDo, columnsWidth.startTimeDateWidth,
		columnsWidth.actionToDoWidth, columnsWidth.colorCodeWidth, columnsWidth.descriptionWidth, columnsWidth.deviceWidth,
		columnsWidth.endTimeDateWidth, columnsWidth.zoneOfDeviceWidth]);

	return markup;
}