import React from 'react';

import { EventRow } from './Components/EventRow/EventRow';

export const EventsTable = () => {
	return (
		<div>
			Table with events
			<EventRow />
			<EventRow />
		</div>
	)
}