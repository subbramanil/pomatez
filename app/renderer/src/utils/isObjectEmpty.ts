export function isObjectEmpty(obj?: object) {
	if (obj === null || obj === undefined) return true;
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}
