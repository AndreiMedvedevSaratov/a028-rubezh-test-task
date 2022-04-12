import { nanoid } from 'nanoid';

const NUMBER_OF_ROWS_ON_PAGE = 20;

export function pageInfoGeneration(pageNumber) {
	const resultsArray = [];

	function randomDate(start, end) {
		var date = new Date(+start + Math.random() * (end - start));
		var hour = Math.random() * 24 | 0;
		date.setHours(hour);
		return date;
	}

	for (let i = 0; i < NUMBER_OF_ROWS_ON_PAGE; i++) {
		let tempStartTimeDate = randomDate(1000000000000, 1500000000000).toLocaleString();
		let tempEndTimeDate = randomDate(1000000000000, 1500000000000).toLocaleString();
		let tempDescription = `Some Description + ${i} also some many words + page number = ${pageNumber}`;
		let tempDevice = `Device number = ${Math.floor(Math.random(10000000) * 10000000)}`;
		let tempZoneOfDevice = `Zone of device = ${Math.floor(Math.random(1000) * 1000)}`;
		let tempColorCode = '#' + Math.floor(Math.random() * (256)).toString(16) +
			Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
		let tempActionToDo = 'Alarm number = ' + Math.floor(Math.random(i + 100) * (i + 100));
		
	
		resultsArray.push({
			id: nanoid(6),
			startTimeDate: tempStartTimeDate,
			endTimeDate: tempEndTimeDate,
			description: tempDescription,
			device: tempDevice,
			zoneOfDevice: tempZoneOfDevice,
			colorCode: tempColorCode,
			actionToDo: tempActionToDo,
		})
	}

	// console.log(resultsArray);
	return resultsArray;
}

// export let eventsData = {
// 	events: pageInfoGeneration(22),
// };