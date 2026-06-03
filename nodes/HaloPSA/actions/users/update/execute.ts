import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { toNodeApiError } from '../../../errors';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	// Normalize potential string IDs from dropdowns
	const normalizedUpdate: IDataObject = { ...updateFields };
	if (normalizedUpdate.client_id !== undefined && normalizedUpdate.client_id !== '') {
		const v = normalizedUpdate.client_id as string | number;
		normalizedUpdate.client_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.site_id !== undefined && normalizedUpdate.site_id !== '') {
		const v = normalizedUpdate.site_id as string | number;
		normalizedUpdate.site_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.linked_agent_id !== undefined && normalizedUpdate.linked_agent_id !== '') {
		const v = normalizedUpdate.linked_agent_id as string | number;
		normalizedUpdate.linked_agent_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	
	const body = {
		id,
		...normalizedUpdate,
	};

	try {
		const response = await apiRequest.call(this, 'POST', '/Users', [body], {});
		
		let users = [];
		if (Array.isArray(response)) {
			users = response;
		} else if (response) {
			users = [response];
		}

		return users.map((user: any) => ({
			json: user,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw toNodeApiError(this, error);
	}
}