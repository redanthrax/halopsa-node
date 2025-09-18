import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketType } from '../../Interfaces';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketTypeId = this.getNodeParameter('ticketTypeId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	const body = {
		id: ticketTypeId,
		...updateFields,
	};

	const requestMethod = 'POST';
	const endpoint = '/TicketType';

	const responseData: HaloTicketType = await apiRequest.call(this, requestMethod, endpoint, [body]);

	return this.helpers.returnJsonArray([responseData]);
}