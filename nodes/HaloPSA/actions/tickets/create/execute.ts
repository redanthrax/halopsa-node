import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketCreate, HaloTicketDetailed } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const summary = this.getNodeParameter('summary', index) as string;
	const details = this.getNodeParameter('details', index, '') as string;
	const clientId = this.getNodeParameter('client_id', index, 0) as number;
	const siteId = this.getNodeParameter('site_id', index, 0) as number;
	const userId = this.getNodeParameter('user_id', index, 0) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	// Build the ticket object
	const ticketData: HaloTicketCreate = {
		summary,
		...((details && { details }) || {}),
		...((clientId && { client_id: clientId }) || {}),
		...((siteId && { site_id: siteId }) || {}),
		...((userId && { user_id: userId }) || {}),
	};
	
	// Add additional fields
	Object.keys(additionalFields).forEach(key => {
		if (additionalFields[key] !== undefined && additionalFields[key] !== '' && additionalFields[key] !== 0) {
			(ticketData as IDataObject)[key] = additionalFields[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Tickets';
	
	// The API expects an array of tickets
	const body = [ticketData];

	let responseData: HaloTicketDetailed[];
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	// Return the first (and only) created ticket
	return this.helpers.returnJsonArray(responseData);
}