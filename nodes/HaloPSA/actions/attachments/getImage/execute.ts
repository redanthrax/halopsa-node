import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const imageId = this.getNodeParameter('imageId', index) as string;

	const response = await apiRequest.call(this, 'GET', `/Attachment/image/${imageId}`, {}, {});

	const json: IDataObject =
		typeof response === 'string' || Buffer.isBuffer(response)
			? { id: imageId, data: response.toString() }
			: (response as IDataObject);

	return [{ json, pairedItem: { item: index } }];
}
