import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveFilters } from '../../../filterParameters';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = resolveFilters.call(this, index);
	
	const qs = {} as IDataObject;
	
	if (filters) {
		Object.assign(qs, filters);
	}

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.count = limit;
	}

	try {
		const response = await apiRequest.call(this, 'GET', '/WebhookEvent', {}, qs);
		const webhookEvents = Array.isArray(response) ? response : [];

		return webhookEvents.map((webhookEvent: any) => ({
			json: webhookEvent,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw error;
	}
}