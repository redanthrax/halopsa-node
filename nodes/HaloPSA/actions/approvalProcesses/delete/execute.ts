import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const processId = this.getNodeParameter('processId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ApprovalProcess/${processId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: processId }, pairedItem: { item: index } }];
}
