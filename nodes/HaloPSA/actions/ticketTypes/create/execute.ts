import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketType, HaloTicketTypeCreate } from '../../Interfaces';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const body: HaloTicketTypeCreate = {
		name,
		...additionalFields,
	};

	const requestMethod = 'POST';
	const endpoint = '/TicketType';

	const responseData: HaloTicketType = await apiRequest.call(this, requestMethod, endpoint, [body]);

	return this.helpers.returnJsonArray([responseData]);
}