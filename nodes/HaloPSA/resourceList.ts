import { IDataObject } from 'n8n-workflow';

/** HaloPSA fault-style list endpoints may use `tickets` (OpenAPI) or `faults` (runtime). */
const FAULT_LIST_KEYS = ['tickets', 'faults'] as const;

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
