'use strict';
function isPromise(object) {
	return (
		Boolean(object) &&
		(typeof object === 'object' || typeof object === 'function') &&
		typeof object.then === 'function'
	);
}

module.exports = (p) => {
	if (!isPromise(p)) {
		throw new TypeError('Expected a promise');
	}

	return p.then((result) => [null, result]).catch((error) => [error]);
};
