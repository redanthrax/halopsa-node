import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mattermostDetailId = this.getNodeParameter('mattermostDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/MattermostDetails/${mattermostDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: mattermostDetailId }, pairedItem: { item: index } }];
}
