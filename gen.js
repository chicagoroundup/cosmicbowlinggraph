import { parse } from 'csv-parse';
import fs from 'node:fs';

const teams = [
	'Spare Me The Drama',
	'Lickety Splits',
	'Bowl Jobs',
	"Ed's Filling Station",
	'Plump Peaches',
	'Dashiki Dreams',
	'Spare Me The Drama',
	'Gutter Humiliation',
	"Livin' on a Spare",
	'Step XXX',
	'Wrecking Balls',
	'I’d Hit That',
	'Team Pin-icillin',
	'The God Sized Holes',
	'A Case of the Zoomies'
];

let output = [];

//Generate a starting amount
teams.map((item) => {
	output.push({
		group: item,
		value: 0
	});
});

//Add up donations, filtering out non-bowling
fs.createReadStream('./donations.csv')
	.pipe(parse({ delimiter: ',', from_line: 2 }))
	.on('data', function (row) {
		let simplifiedTeamName = row[0].replace('Donations to', '').trim();
		if (teams.indexOf(String(simplifiedTeamName)) > -1) {
			let outputTeam = output.find((item) => item.group === simplifiedTeamName);
			if (outputTeam) {
				outputTeam.value = Math.ceil(outputTeam.value) + Math.ceil(row[1]);
			} else {
				output.push({
					group: simplifiedTeamName,
					value: row[1]
				});
			}
		}

		fs.writeFile('./static/data.json', JSON.stringify(output), (err) => err && console.error(err));
	})
	.on('end', function () {
		console.log('--->>> File Read');
	})
	.on('error', function (error) {
		console.log(`--->>> File Error ${error.message}`);
	});
