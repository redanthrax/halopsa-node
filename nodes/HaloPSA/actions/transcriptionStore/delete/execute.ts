import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const transcriptionId = this.getNodeParameter('transcriptionId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TranscriptionStore/${transcriptionId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: transcriptionId }, pairedItem: { item: index } }];
}
