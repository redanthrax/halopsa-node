import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketDetailed } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	// Build the ticket object with the ID for updating
	const ticketData: IDataObject = {
		id: ticketId,
	};
	
	// Add update fields
	Object.keys(updateFields).forEach(key => {
		if (updateFields[key] !== undefined && updateFields[key] !== '' && updateFields[key] !== 0) {
			ticketData[key] = updateFields[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Tickets';
	
	// The API expects an array of tickets for updates
	const body = [ticketData];

	let responseData: HaloTicketDetailed[];
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	// Return the updated ticket
	return this.helpers.returnJsonArray(responseData);
}