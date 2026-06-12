import { IDataObject, INode } from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

/** HaloPSA fault-style list endpoints may use `tickets` (OpenAPI) or `faults` (runtime). */
const FAULT_LIST_KEYS = ['tickets', 'faults'] as const;

export function getRecordCount(response: unknown): number | undefined {
	if (!response || typeof response !== 'object' || Array.isArray(response)) {
		return undefined;
	}
	const recordCount = (response as IDataObject).record_count;
	return typeof recordCount === 'number' ? recordCount : undefined;
}

export function isEmptyResourceItem(item: IDataObject): boolean {
	return Object.keys(item).length === 0;
}

/** Throws when HaloPSA metadata indicates records exist but the list payload is empty or malformed. */
export function assertValidResourceListResponse(
	node: INode,
	response: unknown,
	items: IDataObject[],
	resourceKey: string,
): void {
	const recordCount = getRecordCount(response);
	const label = resourceKey || 'records';

	if (items.length === 1 && isEmptyResourceItem(items[0]!) && (recordCount === undefined || recordCount > 0)) {
		throw new NodeApiError(node, {}, {
			message:
				'HaloPSA returned a single empty record instead of list data. ' +
				'Check filter parameters or try disabling Return All.',
		});
	}

	if (recordCount === undefined || recordCount === 0) {
		return;
	}

	if (items.length === 0) {
		throw new NodeApiError(node, {}, {
			message: `HaloPSA reported ${recordCount} ${label} but returned none. Check filter parameters.`,
		});
	}

	if (items.every(isEmptyResourceItem)) {
		throw new NodeApiError(node, {}, {
			message:
				`HaloPSA reported ${recordCount} ${label} but all returned items were empty. ` +
				'Check filter parameters.',
		});
	}
}

export function extractResourceList(response: unknown, resourceKey: string): IDataObject[] {
	if (resourceKey) {
		if (Array.isArray(response)) {
			return response as IDataObject[];
		}
		const bag = response as IDataObject;
		const items = bag?.[resourceKey];
		if (Array.isArray(items)) {
			return items as IDataObject[];
		}
		if (resourceKey === 'tickets' || resourceKey === 'faults') {
			for (const key of FAULT_LIST_KEYS) {
				if (key === resourceKey) {
					continue;
				}
				const alt = bag?.[key];
				if (Array.isArray(alt)) {
					return alt as IDataObject[];
				}
			}
		}
		return [];
	}

	if (Array.isArray(response)) {
		return response as IDataObject[];
	}

	if (response && typeof response === 'object') {
		return [response as IDataObject];
	}

	return [];
}
