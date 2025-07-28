const sport = {
"regexList": ["https://www.wishtv.com/sports/.*"],
	"jsValidator": 'return true',
	"selector": {
 		"target": ".wp-block-fuel-fuelshortcode + p + p",
 		"method": "afterend"
}
}

// URL #1 for example: https://www.wishtv.com/sports/football/college-football/notre-dame-offensive-lineman-charles-jagusah-breaks-arm-in-utv-accident-in-wyoming/
// URL #2 for example: https://www.wishtv.com/sports/indy-eleven/indianapolis-indy-eleven-players-honored/

function injectPinkRectangle(sport) {
	const currentUrl = window.location.href;
	let isUrlMatch = false;

	// 1. Validate URL against regexList
	for (const regexString of sport.regexList) {
		const regex = new RegExp(regexString);
		if (regex.test(currentUrl)) {
            console.log(`urls match: ${currentUrl} ✅`);
			isUrlMatch = true;
			break;
		}}

	// 2. Execute jsValidator
	let validationResult = true;
	if (typeof sport.jsValidator === 'string' && sport.jsValidator.trim() !== '') {
		const func = new Function(sport.jsValidator);

		console.log('validation passed ✅');
        	validationResult = func();
	
	}
	console.log(`isUrlMatch: ${isUrlMatch} ✅`);
	console.log(`validationResult: ${validationResult} ✅`);

	if (isUrlMatch && validationResult) {
		const targetElement = document.querySelector(sport.selector.target);
		console.log(targetElement);
		if (targetElement) {
			const pinkRectangle = document.createElement('div');
			pinkRectangle.style.backgroundColor = '#f472b6'; // Pink
			pinkRectangle.style.width = '100px';
			pinkRectangle.style.height = '50px';
			pinkRectangle.style.display = 'flex';
			targetElement.insertAdjacentElement(sport.selector.method, pinkRectangle);
		}
	}
}


injectPinkRectangle(sport)

