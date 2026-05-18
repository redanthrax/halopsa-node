import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const releaseId = this.getNodeParameter('releaseId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Release/${releaseId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: releaseId }, pairedItem: { item: index } }];
}
