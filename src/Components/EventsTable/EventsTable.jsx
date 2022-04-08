import React from 'react';

import { EventRow } from './Components/EventRow/EventRow';

export const EventsTable = () => {
	return (
		<div className="events-table">
			Table with events
			<EventRow />
			<EventRow />
		</div>
	)
}