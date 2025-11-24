import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketStatusesListResponse } from '../../Interfaces';

export async function getAll(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (filters) {
		Object.assign(qs, filters);
	}

	const requestMethod = 'GET';
	const endpoint = '/Status';
	const body = {} as IDataObject;

	const responseData: HaloTicketStatusesListResponse = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData || []);
}
