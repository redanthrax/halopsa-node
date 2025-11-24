import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (filters) {
		Object.assign(qs, filters);
	}

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	try {
		let agents: any[];
		if (returnAll) {
			// Agents API returns array directly, not wrapped
			agents = await apiRequestAllItems.call(this, 'GET', '/Agent', '', {}, qs);
		} else {
			const response = await apiRequest.call(this, 'GET', '/Agent', {}, qs);
			agents = Array.isArray(response) ? response : [];
		}

		return agents.map((agent: any) => ({
			json: agent,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw error;
	}
}