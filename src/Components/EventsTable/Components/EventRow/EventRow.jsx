import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './EventRow.scss';

import { toggleSelectRowById } from './../../../../Store/Events/Actions';

export const EventRow = ({ id, isSelectedRow }) => {
	const dispatch = useDispatch();

	const event = useSelector((state) => state.events.list[id]);

	const { startTimeDate, endTimeDate, description, device, zoneOfDevice, colorCode, actionToDo } = event;

	const checkboxControl = useSelector((state) => state.events.checkboxControl);
	const columnsWidth = useSelector((state) => state.events.columnsWidth);

	const handleSelectionOnRow = useCallback(() => {
		dispatch(toggleSelectRowById(id));
	}, [dispatch, id]);

	const markup = useMemo(() =>
	(<div
		className={isSelectedRow ? 'events-table-row selected-row' : 'events-table-row'}
		onClick={handleSelectionOnRow}
		>

		{!!checkboxControl[0] && <div className='row-item column-start-time-date' style={{ width: `${columnsWidth[0]}px` }}>
			<span className='start-time-date'>{startTimeDate}</span>
		</div>}

		{!!checkboxControl[1] && <div className='row-item column-end-time-date' style={{ width: `${columnsWidth[1]}px` }}>
			<span className='end-time-date'>{endTimeDate}</span>
		</div>}

		{!!checkboxControl[2] && <div className='row-item column-description' style={{ width: `${columnsWidth[2]}px` }}>
			<span className='description'>{description}</span>
		</div>}

		{!!checkboxControl[3] && <div className='row-item column-device' style={{ width: `${columnsWidth[3]}px` }}>
			<span className='device'>{device}</span>
		</div>}

		{!!checkboxControl[4] && <div className='row-item column-zone-of-device' style={{ width: `${columnsWidth[4]}px` }}>
			<span className='zone-of-device'>{zoneOfDevice}</span>
		</div>}

		{!!checkboxControl[5] && <div className='row-item column-color-code' style={{ width: `${columnsWidth[5]}px` }}>
			<span className='color-code'>{colorCode}</span>
		</div>}

		{!!checkboxControl[6] && <div className='row-item column-action-to-do' style={{ width: `${columnsWidth[6]}px` }}>
			<span className='action-to-do'>{actionToDo}</span>
		</div>}

	</div>), [startTimeDate, endTimeDate, description, device, zoneOfDevice, colorCode, actionToDo,
					columnsWidth, checkboxControl, handleSelectionOnRow, isSelectedRow]);

	return markup;
}