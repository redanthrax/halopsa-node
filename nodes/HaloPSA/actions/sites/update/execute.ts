import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const siteId = this.getNodeParameter('id', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	// Normalize potential string IDs from dropdowns
	const normalizedUpdate: IDataObject = { ...updateFields };
	if (normalizedUpdate.client_id !== undefined && normalizedUpdate.client_id !== '') {
		const v = normalizedUpdate.client_id as string | number;
		normalizedUpdate.client_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.deliverby !== undefined && normalizedUpdate.deliverby !== '') {
		const v = normalizedUpdate.deliverby as string | number;
		normalizedUpdate.deliverby = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.facilitiesmanager !== undefined && normalizedUpdate.facilitiesmanager !== '') {
		const v = normalizedUpdate.facilitiesmanager as string | number;
		normalizedUpdate.facilitiesmanager = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.inuseby !== undefined && normalizedUpdate.inuseby !== '') {
		const v = normalizedUpdate.inuseby as string | number;
		normalizedUpdate.inuseby = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.regionaldirector !== undefined && normalizedUpdate.regionaldirector !== '') {
		const v = normalizedUpdate.regionaldirector as string | number;
		normalizedUpdate.regionaldirector = typeof v === 'string' ? parseInt(v, 10) : v;
	}

	const body = {
		id: siteId,
		...normalizedUpdate,
	} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/Site';

	const responseData = await apiRequest.call(this, requestMethod, endpoint, [body]);

	return this.helpers.returnJsonArray(responseData);
}