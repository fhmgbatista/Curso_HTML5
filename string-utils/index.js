

function uppercase(string){
	if (typeof string === 'string'){
		return string.toUpperCase();
	} else if (string == undefined) {
		throw new Error('argument string is required');	
	} else if (Array.isArray(string)) {
		throw new Error ('argument need be a string');
	}
}

function lowercase(string){
	return string.toLowerCase();	
}

module.exports = {
	uppercase: uppercase,
	lowercase: lowercase
};