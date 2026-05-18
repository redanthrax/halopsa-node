import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const imageId = this.getNodeParameter('imageId', index) as string;

	const response = await apiRequest.call(this, 'DELETE', `/Attachment/image/${imageId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: imageId },
		pairedItem: { item: index },
	}];
}
