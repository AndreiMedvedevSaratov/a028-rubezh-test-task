import React, { Component } from 'react';

class CheckboxControlPanel extends Component {
	state = {
		isStartTimeDateShow: true,
		isEndTimeDateShow: true,
		isDescriptionShow: true,
		isDeviceShow: true,
		isZoneOfDeviceShow: true,
		isColorCodeShow: true,
		isActionToDoShow: true,
	};

	onChangeStartTimeDate = () => {
		this.setState(initialState => ({
			isStartTimeDateShow: !initialState.isStartTimeDateShow,
		}));
	}
	onChangeEndTimeDate = () => {
		this.setState(initialState => ({
			isEndTimeDateShow: !initialState.isEndTimeDateShow,
		}));
	}
	onChangeDescription = () => {
		this.setState(initialState => ({
			isDescriptionShow: !initialState.isDescriptionShow,
		}));
	}
	onChangeDevice = () => {
		this.setState(initialState => ({
			isDeviceShow: !initialState.isDeviceShow,
		}));
	}
	onChangeZoneOfDevice = () => {
		this.setState(initialState => ({
			isZoneOfDeviceShow: !initialState.isZoneOfDeviceShow,
		}));
	}
	onChangeColorCode = () => {
		this.setState(initialState => ({
			isColorCodeShow: !initialState.isColorCodeShow,
		}));
	}
	onChangeActionToDo = () => {
		this.setState(initialState => ({
			isActionToDoShow: !initialState.isActionToDoShow,
		}));
	}


	onSubmit = (e) => {
		e.preventDefault();
	}

	render() {
		return (
			<div className="checkbox-control-panel">
				<h4>Control panel for checkboxes - for displaying and not displaying of columns of table</h4>
				<form className="checkbox-control-form" onSubmit={this.onSubmit}>

					<div className="checkbox-control-panel__checkbox">
						<label className="checkbox-control-panel__label">
							<input type="checkbox"
								checked={this.state.isStartTimeDateShow}
								onChange={this.onChangeStartTimeDate}
								className="checkbox-control-panel__input"
							/>
							Show "Start Time Date" ?
						</label>
					</div>

					<div className="checkbox-control-panel__checkbox">
						<label className="checkbox-control-panel__label">
							<input type="checkbox"
								checked={this.state.isEndTimeDateShow}
								onChange={this.onChangeEndTimeDate}
								className="checkbox-control-panel__input"
							/>
							Show "End Time Date" ?
						</label>
					</div>

					<div className="checkbox-control-panel__checkbox">
						<label className="checkbox-control-panel__label">
							<input type="checkbox"
								checked={this.state.isDescriptionShow}
								onChange={this.onChangeDescription}
								className="checkbox-control-panel__input"
							/>
							Show "Description" ?
						</label>
					</div>

					<div className="checkbox-control-panel__checkbox">
						<label className="checkbox-control-panel__label">
							<input type="checkbox"
								checked={this.state.isDeviceShow}
								onChange={this.onChangeDevice}
								className="checkbox-control-panel__input"
							/>
							Show "Device" ?
						</label>
					</div>

					<div className="checkbox-control-panel__checkbox">
						<label className="checkbox-control-panel__label">
							<input type="checkbox"
								checked={this.state.isZoneOfDeviceShow}
								onChange={this.onChangeZoneOfDevice}
								className="checkbox-control-panel__input"
							/>
							Show "Zone Of Device" ?
						</label>
					</div>

					<div className="checkbox-control-panel__checkbox">
						<label className="checkbox-control-panel__label">
							<input type="checkbox"
								checked={this.state.isColorCodeShow}
								onChange={this.onChangeColorCode}
								className="checkbox-control-panel__input"
							/>
							Show "Color Code" ?
						</label>
					</div>

					<div className="checkbox-control-panel__checkbox">
						<label className="checkbox-control-panel__label">
							<input type="checkbox"
								checked={this.state.isActionToDoShow}
								onChange={this.onChangeActionToDo}
								className="checkbox-control-panel__input"
							/>
							Show "Action To Do" ?
						</label>
					</div>

				</form>
			</div>
		);
	}
}

export default CheckboxControlPanel;