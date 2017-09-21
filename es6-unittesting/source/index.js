'use strict'

export const sum = (a, b) => {
	if(typeof a !== 'number' && typeof b !== 'number')
		return '-1';
	return a+b;
}
