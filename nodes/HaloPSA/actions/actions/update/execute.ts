import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloActionUpdate } from '../../interfaces/actions';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const actionId = this.getNodeParameter('actionId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const actionData: HaloActionUpdate = {
		id: actionId,
		...updateFields,
	};

	const requestMethod = 'POST';
	const endpoint = '/Actions';
	const body = [actionData];
	const qs = {} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}