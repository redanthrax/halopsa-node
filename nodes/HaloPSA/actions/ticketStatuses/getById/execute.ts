import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketStatusDetailed } from '../../Interfaces';

export async function getById(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const statusId = this.getNodeParameter('statusId', index) as number;
	const options = this.getNodeParameter('options', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply options
	if (options.includedetails !== undefined) qs.includedetails = options.includedetails;

	const requestMethod = 'GET';
	const endpoint = `/Status/${statusId}`;
	const body = {} as IDataObject;

	const responseData: HaloTicketStatusDetailed = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray([responseData]);
}