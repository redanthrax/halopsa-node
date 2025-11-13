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
	
	// Normalize potential string IDs from dropdowns
	const normalizedUpdate: IDataObject = { ...updateFields };
	if (normalizedUpdate.agent_id !== undefined && normalizedUpdate.agent_id !== '') {
		const v = normalizedUpdate.agent_id as string | number;
		normalizedUpdate.agent_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.status_id !== undefined && normalizedUpdate.status_id !== '') {
		const v = normalizedUpdate.status_id as string | number;
		normalizedUpdate.status_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	
	const ticketData: IDataObject = {
		id: ticketId,
	};
	
	Object.keys(normalizedUpdate).forEach(key => {
		if (normalizedUpdate[key] !== undefined && normalizedUpdate[key] !== '' && normalizedUpdate[key] !== 0) {
			ticketData[key] = normalizedUpdate[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Tickets';
	
	const body = [ticketData];

	let responseData: HaloTicketDetailed[];
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray(responseData);
}