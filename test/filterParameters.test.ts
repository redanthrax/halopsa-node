import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
	applyFiltersToQueryString,
	applyHaloPaginationRules,
	isMeaningfulFilterValue,
} from '../nodes/HaloPSA/filterParameters';

describe('isMeaningfulFilterValue', () => {
	it('omits empty and zero defaults', () => {
		assert.equal(isMeaningfulFilterValue(undefined), false);
		assert.equal(isMeaningfulFilterValue(null), false);
		assert.equal(isMeaningfulFilterValue(''), false);
		assert.equal(isMeaningfulFilterValue(0), false);
		assert.equal(isMeaningfulFilterValue([]), false);
	});

	it('keeps true booleans and omits false booleans', () => {
		assert.equal(isMeaningfulFilterValue(false), false);
		assert.equal(isMeaningfulFilterValue(true), true);
		assert.equal(isMeaningfulFilterValue(40), true);
		assert.equal(isMeaningfulFilterValue('search text'), true);
		assert.equal(isMeaningfulFilterValue([1, 2]), true);
	});
});

describe('applyHaloPaginationRules', () => {
	it('sets pageinate when page_size or page_no is present', () => {
		assert.deepEqual(applyHaloPaginationRules({ page_size: 50 }), {
			page_size: 50,
			pageinate: true,
		});
		assert.deepEqual(applyHaloPaginationRules({ page_no: 2 }), {
			page_no: 2,
			pageinate: true,
		});
	});
});

describe('applyFiltersToQueryString', () => {
	it('passes open_only and requesttype_id while omitting zero and false defaults', () => {
		const qs = applyFiltersToQueryString({
			open_only: true,
			requesttype_id: 40,
			agent_id: 0,
			status_id: 0,
			search: '',
			pageinate: false,
			default_columns: false,
		});

		assert.deepEqual(qs, {
			open_only: true,
			requesttype_id: 40,
		});
	});

	it('forces pageinate when page_size is set in filters', () => {
		const qs = applyFiltersToQueryString({
			page_size: 25,
		});

		assert.deepEqual(qs, {
			page_size: 25,
			pageinate: true,
		});
	});

	it('joins multi-select arrays', () => {
		const qs = applyFiltersToQueryString({
			requesttype: [40, 41],
			status: [1, 2],
			include_custom_fields: [10, 20],
		});

		assert.deepEqual(qs, {
			requesttype: '40,41',
			status: '1,2',
			include_custom_fields: '10,20',
		});
	});
});
