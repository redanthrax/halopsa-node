import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const vMWorkspaceDetailId = this.getNodeParameter('vMWorkspaceDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/VMWorkspaceDetails/${vMWorkspaceDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: vMWorkspaceDetailId }, pairedItem: { item: index } }];
}
