import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('id', index) as number;

	const requestMethod = 'DELETE';
	const endpoint = `/Agent/${agentId}`;
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData || [{ success: true, id: agentId }]);
}