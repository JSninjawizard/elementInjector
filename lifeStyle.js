const lifeStyle = {
"regexList": ["https://www.wishtv.com/lifestyle"],
	"jsValidator": `return window.matchMedia('(max-width: 768px)').matches`,
	"selector": {
 		"target": ".slider-style-img-content",
 		"method": "afterend"
}
}

function injectPinkRectangle(lifeStyle) {
	const currentUrl = window.location.href;
	let isUrlMatch = false;

	// 1. Validate URL against regexList
	for (const regexString of lifeStyle.regexList) {
		const regex = new RegExp(regexString);
		if (regex.test(currentUrl)) {
            console.log(`currentUrl: ${currentUrl} ✓`);
			isUrlMatch = true;
			break;
		}}
	// 2. Execute jsValidator
	let validationResult = true;
	if (typeof lifeStyle.jsValidator === 'string' && lifeStyle.jsValidator.trim() !== '') {
		const func = new Function(lifeStyle.jsValidator);
        console.log(`isCondition: ${func()} ✓`);
        	validationResult = func();
	}

	if (isUrlMatch && validationResult) {
		const targetElement = document.querySelector(lifeStyle.selector.target);
		if (targetElement) {
			const pinkRectangle = document.createElement('div');
			pinkRectangle.style.backgroundColor = '#f472b6'; // Pink
			pinkRectangle.style.width = '100px';
			pinkRectangle.style.height = '50px';
			pinkRectangle.style.display = 'flex';
			targetElement.insertAdjacentElement(lifeStyle.selector.method, pinkRectangle);
		}
	}
}

injectPinkRectangle(lifeStyle)


