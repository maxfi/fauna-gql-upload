module.exports = function displayErrors(err, resource, type){
	const response = JSON.parse(err.requestResult.responseRaw);
	const errors = response.errors;

	console.group("Error creating", type, resource.name);
	for(let error of errors){
		const failures = error.failures;
		console.log(`${error.code}: ${error.description}`);
		if(failures){
			console.group("Failures");
			for(let fail of failures){
				console.log(`${fail.code}: ${fail.description}`);
				console.log(`field: ${fail.field}`);
			}
			console.groupEnd();
		}
	}
	console.groupEnd();
};
