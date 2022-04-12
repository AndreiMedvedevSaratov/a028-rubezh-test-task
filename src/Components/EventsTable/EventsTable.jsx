import React, { useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEventsOnPageNumber, filterEventIds, applySorting } from './../../Store/Events/';

import { EventRow } from './Components/EventRow/EventRow';

import './EventsTable.scss';

export const EventsTable = () => {
	const dispatch = useDispatch();

	const eventIds = useSelector((state) => filterEventIds(state));
	const sortOptions = useSelector((state => state.events.sortOptions));

	useEffect(() =>
		dispatch(getEventsOnPageNumber(1)), [dispatch]
	);

	const onSortClickFactory = useCallback((fieldName) => e => {
		dispatch(
			applySorting({
				field: fieldName,
				isDesc: sortOptions.field === fieldName && !sortOptions.isDesc
			}));
	}, [dispatch, sortOptions.field, sortOptions.isDesc]);

	const tableHeader = useMemo(() => (
		<div className='events-table-header'>

			<div className='header-item column-start-time-date' >
				<span className='header-item-title'>startTimeDate</span>
				<span className='sort-button' onClick={onSortClickFactory('startTimeDate')}>
					{sortOptions.field === 'startTimeDate' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>

			<div className='header-item column-end-time-date' >
				<span className='header-item-title'>endTimeDate</span>
				<span className='sort-button' onClick={onSortClickFactory('endTimeDate')}>
					{sortOptions.field === 'endTimeDate' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>

			<div className='header-item column-description' >
				<span className='header-item-title'>description</span>
				<span className='sort-button' onClick={onSortClickFactory('description')}>
					{sortOptions.field === 'description' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>

			<div className='header-item column-device' >
				<span className='header-item-title'>device</span>
				<span className='sort-button' onClick={onSortClickFactory('device')}>
					{sortOptions.field === 'device' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>

			<div className='header-item column-zone-of-device' >
				<span className='header-item-title'>zoneOfDevice</span>
				<span className='sort-button' onClick={onSortClickFactory('zoneOfDevice')}>
					{sortOptions.field === 'zoneOfDevice' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>

			<div className='header-item column-color-code' >
				<span className='header-item-title'>colorCode</span>
				<span className='sort-button' onClick={onSortClickFactory('colorCode')}>
					{sortOptions.field === 'colorCode' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>

			<div className='header-item column-action-to-do' >
				<span className='header-item-title'>actionToDo</span>
				<span className='sort-button' onClick={onSortClickFactory('actionToDo')}>
					{sortOptions.field === 'actionToDo' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>

		</div>
	), [onSortClickFactory, sortOptions.field, sortOptions.isDesc]);

	const markup = useMemo(() => (
		<div className="events-table">
			{tableHeader}

			{!!eventIds.length && <div className="events-table-content">
				{eventIds.map(x => (<EventRow id={x} key={x} />))}
			</div>}

		</div>

	), [eventIds, tableHeader]);

	return markup;
}