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
	const clientIdParam = this.getNodeParameter('client_id', index, 0);
	const clientId = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);
	const siteIdParam = this.getNodeParameter('site_id', index, 0);
	const siteId = typeof siteIdParam === 'string' ? parseInt(siteIdParam, 10) : (siteIdParam as number);
	const userIdParam = this.getNodeParameter('user_id', index, 0);
	const userId = typeof userIdParam === 'string' ? parseInt(userIdParam, 10) : (userIdParam as number);
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	if (additionalFields.status_id) {
		const statusIdValue = additionalFields.status_id;
		additionalFields.status_id = typeof statusIdValue === 'string' ? parseInt(statusIdValue, 10) : statusIdValue;
	}
	if (additionalFields.tickettype_id) {
		const ticketTypeIdValue = additionalFields.tickettype_id;
		additionalFields.tickettype_id = typeof ticketTypeIdValue === 'string' ? parseInt(ticketTypeIdValue, 10) : ticketTypeIdValue;
	}
	
	const ticketData: HaloTicketCreate = {
		summary,
		...((details && { details }) || {}),
		...((clientId && { client_id: clientId }) || {}),
		...((siteId && { site_id: siteId }) || {}),
		...((userId && { user_id: userId }) || {}),
	};
	
	Object.keys(additionalFields).forEach(key => {
		if (additionalFields[key] !== undefined && additionalFields[key] !== '' && additionalFields[key] !== 0) {
			(ticketData as IDataObject)[key] = additionalFields[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Tickets';
	
	const body = [ticketData];

	let responseData: HaloTicketDetailed[];
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray(responseData);
}