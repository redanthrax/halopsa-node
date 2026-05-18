import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const queryParameters = this.getNodeParameter('queryParameters', index, {}) as IDataObject;

	const response = await apiRequest.call(this, 'POST', '/Attachment/image', {}, queryParameters);
	const record = Array.isArray(response) ? response[0] : response;

	return [{ json: (record ?? response) as IDataObject, pairedItem: { item: index } }];
}
