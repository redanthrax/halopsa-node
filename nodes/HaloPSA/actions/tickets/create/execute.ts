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
	const clientIdParam = this.getNodeParameter('client_id', index, '');
	let clientId: number | undefined = undefined;
	if (clientIdParam) {
		const parsed = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);
		clientId = isNaN(parsed) ? undefined : parsed;
	}
	const siteIdParam = this.getNodeParameter('site_id', index, '');
	let siteId: number | undefined = undefined;
	if (siteIdParam) {
		const parsed = typeof siteIdParam === 'string' ? parseInt(siteIdParam, 10) : (siteIdParam as number);
		siteId = isNaN(parsed) ? undefined : parsed;
	}
	const userIdParam = this.getNodeParameter('user_id', index, '');
	let userId: number | undefined = undefined;
	if (userIdParam) {
		const parsed = typeof userIdParam === 'string' ? parseInt(userIdParam, 10) : (userIdParam as number);
		userId = isNaN(parsed) ? undefined : parsed;
	}
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	if (additionalFields.status_id) {
		const statusIdValue = additionalFields.status_id;
		const parsed = typeof statusIdValue === 'string' ? parseInt(statusIdValue, 10) : statusIdValue;
		additionalFields.status_id = isNaN(parsed as number) ? undefined : parsed;
	}
	if (additionalFields.tickettype_id) {
		const ticketTypeIdValue = additionalFields.tickettype_id;
		const parsed = typeof ticketTypeIdValue === 'string' ? parseInt(ticketTypeIdValue, 10) : ticketTypeIdValue;
		additionalFields.tickettype_id = isNaN(parsed as number) ? undefined : parsed;
	}
	
	const ticketData: HaloTicketCreate = {
		summary,
	};
	if (details) ticketData.details = details;
	if (clientId !== undefined) ticketData.client_id = clientId;
	if (siteId !== undefined) ticketData.site_id = siteId;
	if (userId !== undefined) ticketData.user_id = userId;
	
	Object.keys(additionalFields).forEach(key => {
		if (additionalFields[key] !== undefined && additionalFields[key] !== '') {
			(ticketData as IDataObject)[key] = additionalFields[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Tickets';
	
	const body = [ticketData];

	let responseData: HaloTicketDetailed[];
	try {
		responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});
	} catch (error) {
		throw error;
	}

	return this.helpers.returnJsonArray(responseData);
}