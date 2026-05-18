import { IDataObject } from 'n8n-workflow';

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
