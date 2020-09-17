const test = require('ava');
const m = require('.');

const successPromise = () => Promise.resolve('success');
const failurePromise = () => Promise.reject(new Error('failure'));

test('Invalid Param', (t) => {
	const err = t.throws(() => {
		m(123);
	});
	t.is(err.message, 'Expected a promise');
});

test('Works with promise success', async (t) => {
	const [err, value] = await m(successPromise());
	t.is(value, 'success');
	t.is(err, null);
});

test('Works with promise failure', async (t) => {
	const [err, value] = await m(failurePromise());
	t.is(err.message, 'failure');
	t.is(value, undefined);
});
