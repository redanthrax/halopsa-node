import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const manageEngineDetailId = this.getNodeParameter('manageEngineDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ManageEngineDetails/${manageEngineDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: manageEngineDetailId }, pairedItem: { item: index } }];
}
