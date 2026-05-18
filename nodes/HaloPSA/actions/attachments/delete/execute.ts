import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const attachmentId = this.getNodeParameter('attachmentId', index) as number;

	const response = await apiRequest.call(this, 'DELETE', `/Attachment/${attachmentId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: attachmentId },
		pairedItem: { item: index },
	}];
}
