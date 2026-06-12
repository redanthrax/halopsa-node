import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
	continuationPageNo,
	NON_PAGINATED_MAX_COUNT,
	PAGINATED_PAGE_SIZE,
	resolvePageSize,
	shouldFetchMorePages,
} from '../nodes/HaloPSA/pagination';

describe('shouldFetchMorePages', () => {
	it('stops when bulk fetch is not full', () => {
		assert.equal(shouldFetchMorePages(50, 200), false);
	});

	it('stops when record_count fits in bulk fetch', () => {
		assert.equal(shouldFetchMorePages(NON_PAGINATED_MAX_COUNT, 500), false);
	});

	it('continues when bulk fetch is full and more records may exist', () => {
		assert.equal(shouldFetchMorePages(NON_PAGINATED_MAX_COUNT, 1500), true);
		assert.equal(shouldFetchMorePages(NON_PAGINATED_MAX_COUNT, undefined), true);
	});
});

describe('continuationPageNo', () => {
	it('starts after the non-paginated bulk window', () => {
		assert.equal(continuationPageNo(), 11);
		assert.equal(continuationPageNo(1000, 100), 11);
	});
});

describe('resolvePageSize', () => {
	it('caps page size at HaloPSA maximum', () => {
		assert.equal(resolvePageSize(250), PAGINATED_PAGE_SIZE);
		assert.equal(resolvePageSize(50), 50);
		assert.equal(resolvePageSize(undefined), PAGINATED_PAGE_SIZE);
	});
});
