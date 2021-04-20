import Airtable from "airtable";

Airtable.configure({
	apiKey: "keyyrKJKHPQDO9aJy",
	endpointUrl: "https://api.airtable.com",
	apiVersion: "",
	noRetryIfRateLimited: ""
});

const base = Airtable.base('appgxreLyNXbdYBR3');
const table = base("WorkLog");

function addTask(name: String, duration: number, status: String) {
	table.create([
		{
			"fields": { "Task": name, "Duration": duration, "Status": status }
		}
	], function(err: any, records: any[]) {
		if (err) {
			console.error(err);
			return;
		}
		records.forEach(function(record) {
			console.log(record.getId());
		});
	});
}

export { addTask };
