import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {	toggleColumnVisibility } from '../../Store/Events';
import { changeColumnWidth } from './../../Store/Events/Actions';

import { COLUMN_TITLES } from '../../Utils/Constants';

import './CheckboxControlPanel.scss';

export const CheckboxControlPanel = () => {
	const dispatch = useDispatch();

	const checkboxControl = useSelector((state) => state.events.checkboxControl);
	const columnsWidth = useSelector((state) => state.events.columnsWidth);

	const handleChangeCheckbox = (index) => {
		dispatch(toggleColumnVisibility(index, !checkboxControl[index]));
	}

	const handleChangeWidth = (index, value) => {
		// if (value < 150) {
		// 	value = 150
		// }
		dispatch(changeColumnWidth(index, value));
	} 

	// const onSubmit = (e) => {
	// 	e.preventDefault();
	// }

	return (
		<div className="checkbox-control-panel">
			<h4>Control panel for checkboxes - for displaying and not displaying of columns of table</h4>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[0]}
							onChange={({ target: { checked } }) => handleChangeCheckbox(0, checked)}
							className="checkbox-control-panel__input"
						/>
						Show "{COLUMN_TITLES[0]}" column ?
					</label>

					<input
						className="checkbox-control-panel__width-input"
						type="text"
						value={columnsWidth[0]}
						onChange={({ target: { value } }) => handleChangeWidth(0, value)}
					></input>				
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[1]}
							onChange={({ target: { checked } }) => handleChangeCheckbox(1, checked)}
							className="checkbox-control-panel__input"
						/>
						Show "{COLUMN_TITLES[1]}" column ?
					</label>

					<input
						className="checkbox-control-panel__width-input"
						type="text"
						value={columnsWidth[1]}
						onChange={({ target: { value } }) => handleChangeWidth(1, value)}
					></input>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[2]}
							onChange={({ target: { checked } }) => handleChangeCheckbox(2, checked)}
							className="checkbox-control-panel__input"
						/>
						Show "{COLUMN_TITLES[2]}" column ?
					</label>

					<input
						className="checkbox-control-panel__width-input"
						type="text"
						value={columnsWidth[2]}
						onChange={({ target: { value } }) => handleChangeWidth(2, value)}
					></input>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[3]}
							onChange={({ target: { checked } }) => handleChangeCheckbox(3, checked)}
							className="checkbox-control-panel__input"
						/>
						Show "{COLUMN_TITLES[3]}" column ?
					</label>

					<input
						className="checkbox-control-panel__width-input"
						type="text"
						value={columnsWidth[3]}
						onChange={({ target: { value } }) => handleChangeWidth(3, value)}
					></input>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[4]}
							onChange={({ target: { checked } }) => handleChangeCheckbox(4, checked)}
							className="checkbox-control-panel__input"
						/>
						Show "{COLUMN_TITLES[4]}" column ?
					</label>

					<input
						className="checkbox-control-panel__width-input"
						type="text"
						value={columnsWidth[4]}
						onChange={({ target: { value } }) => handleChangeWidth(4, value)}
					></input>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[5]}
							onChange={({ target: { checked } }) => handleChangeCheckbox(5, checked)}
							className="checkbox-control-panel__input"
						/>
						Show "{COLUMN_TITLES[5]}" column ?
					</label>

					<input
						className="checkbox-control-panel__width-input"
						type="text"
						value={columnsWidth[5]}
						onChange={({ target: { value } }) => handleChangeWidth(5, value)}
					></input>
				</div>

				<div className="checkbox-control-panel__checkbox">
					<label className="checkbox-control-panel__label">
						<input type="checkbox"
							checked={checkboxControl[6]}
							onChange={({ target: { checked } }) => handleChangeCheckbox(6, checked)}
							className="checkbox-control-panel__input"
						/>
						Show "{COLUMN_TITLES[6]}" column ?
					</label>

					<input
						className="checkbox-control-panel__width-input"
						type="text"
						value={columnsWidth[6]}
						onChange={({ target: { value } }) => handleChangeWidth(6, value)}
					></input>
				</div>

			{/* {!!columnsWidth.length &&
				<form className="checkbox-control-form" onSubmit={onSubmit}>
					{
						columnsWidth.map(index => (
							<div className="checkbox-control-panel__checkbox">
								<label className="checkbox-control-panel__label">
									<input type="checkbox"
										checked={checkboxControl[index]}
										onChange={({ target: { checked } }) => handleChangeCheckbox(index, checked)}
										className="checkbox-control-panel__input"
									/>
									Show "{COLUMN_TITLES[index]}" column ?
								</label>

								<input
									className="checkbox-control-panel__width-input"
									type="text"
									value={columnsWidth[index]}
									onChange={({ target: { value } }) => handleChangeWidth(index, value)}
								></input>
							</div>
						))
					}
				</form>
			} */}
		</div>
	);
}