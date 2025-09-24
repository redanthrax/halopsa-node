import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (filters.isazureautomation !== undefined) qs.isazureautomation = filters.isazureautomation;
	if (filters.type) qs.type = filters.type;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.count = limit;
	}

	try {
		const response = await apiRequest.call(this, 'GET', '/Webhook', {}, qs);
		const webhooks = Array.isArray(response) ? response : [];

		return webhooks.map((webhook: any) => ({
			json: webhook,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw error;
	}
}