import {
	IExecuteFunctions,
	IDataObject,
	INodeProperties,
} from 'n8n-workflow';

export function filtersJsonProperty(
	resource: string,
	operation: string = 'getAll',
): INodeProperties {
	return collectionJsonProperty('filtersJson', 'Filters', resource, operation);
}

export function optionsJsonProperty(resource: string, operation: string): INodeProperties {
	return collectionJsonProperty('optionsJson', 'Options', resource, operation);
}

export function collectionJsonProperty(
	jsonName: string,
	collectionLabel: string,
	resource: string,
	operation: string,
): INodeProperties {
	return {
		displayName: `${collectionLabel} (JSON)`,
		name: jsonName,
		type: 'json',
		default: {},
		displayOptions: {
			show: {
				resource: [resource],
				operation: [operation],
			},
		},
		description:
			`Dynamic ${collectionLabel.toLowerCase()} as a JSON object. Values here override the same keys from ${collectionLabel}. ` +
			'Use with expressions, e.g. {"client_id": {{ $json.client_id }}}.',
	};
}

function normalizeFilterObject(value: unknown): IDataObject {
	if (value === undefined || value === null || value === '') {
		return {};
	}

	if (typeof value === 'string') {
		const trimmed = value.trim();
		if (!trimmed) {
			return {};
		}
		try {
			const parsed: unknown = JSON.parse(trimmed);
			if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
				return parsed as IDataObject;
			}
		} catch {
			return {};
		}
		return {};
	}

	if (typeof value === 'object' && !Array.isArray(value)) {
		return value as IDataObject;
	}

	return {};
}

export function resolveCollectionParams(
	this: IExecuteFunctions,
	index: number,
	collectionName: string,
	jsonName: string,
): IDataObject {
	const rawCollection = this.getNodeParameter(collectionName, index, {}) as unknown;
	let params = normalizeFilterObject(rawCollection);

	let rawJson: unknown = {};
	try {
		rawJson = this.getNodeParameter(jsonName, index, {});
	} catch {
		rawJson = {};
	}

	const jsonParams = normalizeFilterObject(rawJson);
	return { ...params, ...jsonParams };
}

/**
 * Resolves Filters collection + Filters (JSON), with JSON values overriding UI filters.
 */
export function resolveFilters(this: IExecuteFunctions, index: number): IDataObject {
	return resolveCollectionParams.call(this, index, 'filters', 'filtersJson');
}

/**
 * Resolves Options collection + Options (JSON), with JSON values overriding UI options.
 */
export function resolveOptions(this: IExecuteFunctions, index: number): IDataObject {
	return resolveCollectionParams.call(this, index, 'options', 'optionsJson');
}

/** Applies common HaloPSA query-string transforms (e.g. multi-select custom fields). */
export function applyFiltersToQueryString(filters: IDataObject): IDataObject {
	const qs: IDataObject = { ...filters };

	if (filters.include_custom_fields && Array.isArray(filters.include_custom_fields)) {
		qs.include_custom_fields = filters.include_custom_fields.join(',');
	}
	if (filters.requesttype && Array.isArray(filters.requesttype)) {
		qs.requesttype = filters.requesttype.join(',');
	}
	if (filters.status && Array.isArray(filters.status)) {
		qs.status = filters.status.join(',');
	}

	return qs;
}
