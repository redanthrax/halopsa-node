import { IDataObject } from 'n8n-workflow';

export function extractReportRows(response: unknown): IDataObject[] {
	if (Array.isArray(response)) {
		const first = response[0] as IDataObject | undefined;
		if (first?.rows && Array.isArray(first.rows)) {
			return first.rows as IDataObject[];
		}
		return response as IDataObject[];
	}
	if (response && typeof response === 'object') {
		const obj = response as IDataObject;
		if (Array.isArray(obj.rows)) {
			return obj.rows as IDataObject[];
		}
	}
	return [];
}
