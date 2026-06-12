import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
	applyFiltersToQueryString,
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

	it('keeps meaningful values including false booleans', () => {
		assert.equal(isMeaningfulFilterValue(false), true);
		assert.equal(isMeaningfulFilterValue(true), true);
		assert.equal(isMeaningfulFilterValue(40), true);
		assert.equal(isMeaningfulFilterValue('search text'), true);
		assert.equal(isMeaningfulFilterValue([1, 2]), true);
	});
});

describe('applyFiltersToQueryString', () => {
	it('passes open_only and requesttype_id while omitting zero defaults', () => {
		const qs = applyFiltersToQueryString({
			open_only: true,
			requesttype_id: 40,
			agent_id: 0,
			status_id: 0,
			search: '',
		});

		assert.deepEqual(qs, {
			open_only: true,
			requesttype_id: 40,
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
