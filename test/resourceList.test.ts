import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { INode } from 'n8n-workflow';
import {
	assertValidResourceListResponse,
	extractResourceList,
	getRecordCount,
	isEmptyResourceItem,
} from '../nodes/HaloPSA/resourceList';

const dummyNode = { name: 'HaloPSA' } as INode;

describe('extractResourceList', () => {
	it('reads tickets from wrapped response', () => {
		const items = extractResourceList(
			{ record_count: 2, tickets: [{ id: 1 }, { id: 2 }] },
			'tickets',
		);
		assert.equal(items.length, 2);
	});

	it('falls back to faults key', () => {
		const items = extractResourceList({ faults: [{ id: 99 }] }, 'tickets');
		assert.deepEqual(items, [{ id: 99 }]);
	});
});

describe('getRecordCount', () => {
	it('returns record_count when present', () => {
		assert.equal(getRecordCount({ record_count: 75 }), 75);
		assert.equal(getRecordCount([{ id: 1 }]), undefined);
	});
});

describe('assertValidResourceListResponse', () => {
	it('throws on single empty item with positive record_count', () => {
		assert.throws(
			() =>
				assertValidResourceListResponse(
					dummyNode,
					{ record_count: 10, tickets: [{}] },
					[{}],
					'tickets',
				),
			/single empty record/,
		);
	});

	it('throws when record_count indicates data but list is empty', () => {
		assert.throws(
			() =>
				assertValidResourceListResponse(
					dummyNode,
					{ record_count: 5, tickets: [] },
					[],
					'tickets',
				),
			/reported 5 tickets but returned none/,
		);
	});

	it('allows empty list when record_count is zero', () => {
		assert.doesNotThrow(() =>
			assertValidResourceListResponse(
				dummyNode,
				{ record_count: 0, tickets: [] },
				[],
				'tickets',
			),
		);
	});
});

describe('isEmptyResourceItem', () => {
	it('detects empty objects', () => {
		assert.equal(isEmptyResourceItem({}), true);
		assert.equal(isEmptyResourceItem({ id: 1 }), false);
	});
});
