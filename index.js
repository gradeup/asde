'use strict';
function isPromise(obj) {
	return Boolean(obj) && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

module.exports = p => {
	if (!isPromise(p)) {
		throw new TypeError('Expected a promise');
	}
	return p.then(res => [null, res]).catch(err => [err]);
};
