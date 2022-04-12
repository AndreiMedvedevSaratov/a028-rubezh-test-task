import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {	changeStartTimeDateShow, changeEndTimeDateShow, changeDescriptionShow,
	changeDeviceShow, changeZoneOfDeviceShow, changeColorCodeShow, changeActionToDoShow } from '../../Store/Events';

export const CheckboxControlPanel = () => {
	const dispatch = useDispatch();

	const checkboxControl = useSelector((state) => state.events.checkboxControl);


	const onChangeStartTimeDate = () => {
		dispatch(changeStartTimeDateShow(!checkboxControl.isStartTimeDateShow));
	}

	const onChangeEndTimeDate = () => {
		dispatch(changeEndTimeDateShow(!checkboxControl.isEndTimeDateShow));
	}

	const onChangeDescription = () => {
		dispatch(changeDescriptionShow(!checkboxControl.isDescriptionShow));
	}

	const onChangeDevice = () => {
		dispatch(changeDeviceShow(!checkboxControl.isDeviceShow));
	}

	const onChangeZoneOfDevice = () => {
		dispatch(changeZoneOfDeviceShow(!checkboxControl.isZoneOfDeviceShow));
	}

	const onChangeColorCode = () => {
		dispatch(changeColorCodeShow(!checkboxControl.isColorCodeShow));
	}
	const onChangeActionToDo = () => {
		dispatch(changeActionToDoShow(!checkboxControl.isActionToDoShow));
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
							checked={checkboxControl.isStartTimeDateShow}
							onChange={onChangeStartTimeDate}
							className="checkbox-control-panel__input"
						/>
						Show "Start Time Date" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl.isEndTimeDateShow}
							onChange={onChangeEndTimeDate}
							className="checkbox-control-panel__input"
						/>
						Show "End Time Date" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl.isDescriptionShow}
							onChange={onChangeDescription}
							className="checkbox-control-panel__input"
						/>
						Show "Description" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl.isDeviceShow}
							onChange={onChangeDevice}
							className="checkbox-control-panel__input"
						/>
						Show "Device" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl.isZoneOfDeviceShow}
							onChange={onChangeZoneOfDevice}
							className="checkbox-control-panel__input"
						/>
						Show "Zone Of Device" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl.isColorCodeShow}
							onChange={onChangeColorCode}
							className="checkbox-control-panel__input"
						/>
						Show "Color Code" ?
					</label>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl.isActionToDoShow}
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