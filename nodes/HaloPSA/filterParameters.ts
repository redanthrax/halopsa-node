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

export function additionalFieldsJsonProperty(
	resource: string,
	operation: string,
): INodeProperties {
	return collectionJsonProperty('additionalFieldsJson', 'Additional Fields', resource, operation);
}

export function updateFieldsJsonProperty(resource: string, operation: string): INodeProperties {
	return collectionJsonProperty('updateFieldsJson', 'Update Fields', resource, operation);
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

export function resolveAdditionalFields(
	this: IExecuteFunctions,
	index: number,
	collectionName = 'additionalFields',
	jsonName = 'additionalFieldsJson',
): IDataObject {
	return resolveCollectionParams.call(this, index, collectionName, jsonName);
}

export function resolveUpdateFields(
	this: IExecuteFunctions,
	index: number,
): IDataObject {
	return resolveCollectionParams.call(this, index, 'updateFields', 'updateFieldsJson');
}

/** Applies collection/JSON fields to a request body (keeps arrays and 0). */
export function applyFieldsToBody(target: IDataObject, source: IDataObject): void {
	for (const [key, value] of Object.entries(source)) {
		if (value === undefined || value === '') {
			continue;
		}
		target[key] = value;
	}
}

function parseJsonValue(value: unknown): unknown {
	if (typeof value !== 'string') {
		return value;
	}
	const trimmed = value.trim();
	if (!trimmed) {
		return value;
	}
	try {
		return JSON.parse(trimmed);
	} catch {
		return value;
	}
}

/** Parses customfields when supplied as a JSON string in the UI or expressions. */
export function normalizeCustomfieldsField(fields: IDataObject): void {
	if (fields.customfields === undefined) {
		return;
	}
	const parsed = parseJsonValue(fields.customfields);
	if (parsed !== undefined) {
		fields.customfields = parsed as IDataObject[keyof IDataObject];
	}
}

/**
 * Whether a filter value should be sent to the HaloPSA API.
 * Omits UI defaults (0, '', empty arrays) that would over-constrain results.
 * Booleans are kept when explicitly set, including false.
 */
export function isMeaningfulFilterValue(value: unknown): boolean {
	if (value === undefined || value === null || value === '') {
		return false;
	}
	if (typeof value === 'number' && value === 0) {
		return false;
	}
	if (Array.isArray(value) && value.length === 0) {
		return false;
	}
	return true;
}

/** Applies common HaloPSA query-string transforms (e.g. multi-select custom fields). */
export function applyFiltersToQueryString(filters: IDataObject): IDataObject {
	const qs: IDataObject = {};

	for (const [key, value] of Object.entries(filters)) {
		if (!isMeaningfulFilterValue(value)) {
			continue;
		}

		if (key === 'include_custom_fields' && Array.isArray(value)) {
			qs.include_custom_fields = value.join(',');
		} else if (key === 'requesttype' && Array.isArray(value)) {
			qs.requesttype = value.join(',');
		} else if (key === 'status' && Array.isArray(value)) {
			qs.status = value.join(',');
		} else {
			qs[key] = value;
		}
	}

	return qs;
}
