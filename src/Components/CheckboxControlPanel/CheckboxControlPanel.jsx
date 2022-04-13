import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {	toggleColumnVisibility } from '../../Store/Events';
import { changeColumnWidth } from './../../Store/Events/Actions';

export const CheckboxControlPanel = () => {
	const dispatch = useDispatch();

	const checkboxControl = useSelector((state) => state.events.checkboxControl);
	const columnsWidth = useSelector((state) => state.events.columnsWidth);


	const onChangeStartTimeDate = () => {
		dispatch(toggleColumnVisibility(0, !checkboxControl[0]));
	}

	const onChangeEndTimeDate = () => {
		dispatch(toggleColumnVisibility(1, !checkboxControl[1]));
	}

	const onChangeDescription = () => {
		dispatch(toggleColumnVisibility(2, !checkboxControl[2]));
	}

	const onChangeDevice = () => {
		dispatch(toggleColumnVisibility(3, !checkboxControl[3]));
	}

	const onChangeZoneOfDevice = () => {
		dispatch(toggleColumnVisibility(4, !checkboxControl[4]));
	}

	const onChangeColorCode = () => {
		dispatch(toggleColumnVisibility(5, !checkboxControl[5]));
	}
	const onChangeActionToDo = () => {
		dispatch(toggleColumnVisibility(6, !checkboxControl[6]));
	}

	const handleChangeStartTimeDateWidth = (value) => {
		console.log(columnsWidth);
		dispatch(changeColumnWidth(0, value));
	} 


	const onSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div className="checkbox-control-panel">
			<h4>Control panel for checkboxes - for displaying and not displaying of columns of table</h4>
			<form className="checkbox-control-form" onSubmit={onSubmit}>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[0]}
							onChange={onChangeStartTimeDate}
							className="checkbox-control-panel__input"
						/>
						Show "Start Time Date" ?
					</label>

					<input
						type="text"
						value={columnsWidth[0]}
						onChange={({ target: { value } }) => handleChangeStartTimeDateWidth(value)}
					></input>
					
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[1]}
							onChange={onChangeEndTimeDate}
							className="checkbox-control-panel__input"
						/>
						Show "End Time Date" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[2]}
							onChange={onChangeDescription}
							className="checkbox-control-panel__input"
						/>
						Show "Description" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[3]}
							onChange={onChangeDevice}
							className="checkbox-control-panel__input"
						/>
						Show "Device" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[4]}
							onChange={onChangeZoneOfDevice}
							className="checkbox-control-panel__input"
						/>
						Show "Zone Of Device" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[5]}
							onChange={onChangeColorCode}
							className="checkbox-control-panel__input"
						/>
						Show "Color Code" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[6]}
							onChange={onChangeActionToDo}
							className="checkbox-control-panel__input"
						/>
						Show "Action To Do" ?
					</label>
				</div>

			</form>
		</div>
	);
}