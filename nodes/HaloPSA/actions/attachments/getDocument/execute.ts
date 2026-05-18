import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;

	const response = await apiRequest.call(this, 'GET', `/Attachment/document/${documentId}`, {}, {});

	const json: IDataObject =
		typeof response === 'string' || Buffer.isBuffer(response)
			? { id: documentId, data: response.toString() }
			: (response as IDataObject);

	return [{ json, pairedItem: { item: index } }];
}
