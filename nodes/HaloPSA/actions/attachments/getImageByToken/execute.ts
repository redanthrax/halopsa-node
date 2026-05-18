import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const token = this.getNodeParameter('token', index, '') as string;
	const nonce = this.getNodeParameter('nonce', index, '') as string;
	const qs: IDataObject = {};
	if (token) qs.token = token;
	if (nonce) qs.nonce = nonce;

	const response = await apiRequest.call(this, 'GET', '/Attachment/image', {}, qs);
	const json: IDataObject =
		typeof response === 'string' || Buffer.isBuffer(response)
			? { data: response.toString() }
			: (response as IDataObject);

	return [{ json, pairedItem: { item: index } }];
}
