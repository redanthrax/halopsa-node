import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloActionCreate } from '../../interfaces/actions';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index) as number;
	const note = this.getNodeParameter('note', index) as string;
	
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const actionData: HaloActionCreate = {
		ticket_id: ticketId,
		note,
		...additionalFields,
	};

	const requestMethod = 'POST';
	const endpoint = '/Actions';
	const body = [actionData];
	const qs = {} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}