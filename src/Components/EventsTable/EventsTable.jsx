import React, { useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEventsOnPageNumber, filterEventIds, applySorting } from './../../Store/Events/';

import { EventRow } from './Components/EventRow/EventRow';

import { COLUMN_TITLES } from '../../Utils/Constants';

import './EventsTable.scss';

export const EventsTable = () => {
	const dispatch = useDispatch();

	const eventIds = useSelector((state) => filterEventIds(state));
	const sortOptions = useSelector((state => state.events.sortOptions));
	const columnsWidth = useSelector((state) => state.events.columnsWidth);
	const currentPage = useSelector((state) => state.events.currentPage);

	const checkboxControl = useSelector((state) => state.events.checkboxControl);

	useEffect(() =>
		dispatch(getEventsOnPageNumber(currentPage)), [dispatch, currentPage]
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

			{!!checkboxControl[0] && <div className='header-item column-start-time-date'
				style={{ width: `${columnsWidth[0]}px` }}>
				<span className='header-item-title'>{COLUMN_TITLES[0]}</span>
				<span className='sort-button' onClick={onSortClickFactory('startTimeDate')}>
					{sortOptions.field === 'startTimeDate' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>}

			{!!checkboxControl[1] && <div className='header-item column-end-time-date' style={{ width: `${columnsWidth[1]}px` }}>
				<span className='header-item-title'>{COLUMN_TITLES[1]}</span>
				<span className='sort-button' onClick={onSortClickFactory('endTimeDate')}>
					{sortOptions.field === 'endTimeDate' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>}

			{!!checkboxControl[2] && <div className='header-item column-description' style={{ width: `${columnsWidth[2]}px` }}>
				<span className='header-item-title'>{COLUMN_TITLES[2]}</span>
				<span className='sort-button' onClick={onSortClickFactory('description')}>
					{sortOptions.field === 'description' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>}

			{!!checkboxControl[3] && <div className='header-item column-device' style={{ width: `${columnsWidth[3]}px` }}>
				<span className='header-item-title'>{COLUMN_TITLES[3]}</span>
				<span className='sort-button' onClick={onSortClickFactory('device')}>
					{sortOptions.field === 'device' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>}

			{!!checkboxControl[4] && <div className='header-item column-zone-of-device' style={{ width: `${columnsWidth[4]}px` }}>
				<span className='header-item-title'>{COLUMN_TITLES[4]}</span>
				<span className='sort-button' onClick={onSortClickFactory('zoneOfDevice')}>
					{sortOptions.field === 'zoneOfDevice' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>}

			{!!checkboxControl[5] && <div className='header-item column-color-code' style={{ width: `${columnsWidth[5]}px` }}>
				<span className='header-item-title'>{COLUMN_TITLES[5]}</span>
				<span className='sort-button' onClick={onSortClickFactory('colorCode')}>
					{sortOptions.field === 'colorCode' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>}

			{!!checkboxControl[6] && <div className='header-item column-action-to-do' style={{ width: `${columnsWidth[6]}px` }}>
				<span className='header-item-title'>{COLUMN_TITLES[6]}</span>
				<span className='sort-button' onClick={onSortClickFactory('actionToDo')}>
					{sortOptions.field === 'actionToDo' && sortOptions.isDesc ? '🔺' : '🔻'}
				</span>
			</div>}

		</div>
	), [onSortClickFactory, sortOptions.field, sortOptions.isDesc, columnsWidth, checkboxControl]);

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