import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloProjectUpdate } from '../../interfaces/projects';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	// Normalize potential string IDs from dropdowns
	const normalizedUpdate: IDataObject = { ...updateFields };
	if (normalizedUpdate.agent_id !== undefined && normalizedUpdate.agent_id !== '') {
		const v = normalizedUpdate.agent_id as string | number;
		normalizedUpdate.agent_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.client_id !== undefined && normalizedUpdate.client_id !== '') {
		const v = normalizedUpdate.client_id as string | number;
		normalizedUpdate.client_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.site_id !== undefined && normalizedUpdate.site_id !== '') {
		const v = normalizedUpdate.site_id as string | number;
		normalizedUpdate.site_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.status_id !== undefined && normalizedUpdate.status_id !== '') {
		const v = normalizedUpdate.status_id as string | number;
		normalizedUpdate.status_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.user_id !== undefined && normalizedUpdate.user_id !== '') {
		const v = normalizedUpdate.user_id as string | number;
		normalizedUpdate.user_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}

	const body: HaloProjectUpdate = {
		id: projectId,
		...normalizedUpdate,
	};

	Object.keys(body).forEach(key => {
		if (body[key] === undefined || body[key] === '') {
			delete body[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Projects';
	const qs = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}