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

	const body: HaloProjectUpdate = {
		id: projectId,
		...updateFields,
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