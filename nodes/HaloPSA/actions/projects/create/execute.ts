import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloProjectCreate } from '../../interfaces/projects';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const summary = this.getNodeParameter('summary', index) as string;
	const client_id = this.getNodeParameter('client_id', index) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

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