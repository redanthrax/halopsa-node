import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloProjectCreate } from '../../interfaces/projects';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const summary = this.getNodeParameter('summary', index) as string;
	const clientIdParam = this.getNodeParameter('client_id', index);
	const client_id = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	if (additionalFields.user_id) {
		const userIdValue = additionalFields.user_id;
		additionalFields.user_id = typeof userIdValue === 'string' ? parseInt(userIdValue, 10) : userIdValue;
	}

	const body: HaloProjectCreate = {
		summary,
		client_id,
		...additionalFields,
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